import axios from "axios";
import { get } from "lodash";
import getConfig from "next/config";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const challengeCode = searchParams.get("state");

  if (!code) {
    return new Response(JSON.stringify({ error: "Authorization code is missing" }), { status: 400, headers: { "Content-Type": "application/json" } });
  }

  const { TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET, TWITTER_REDIRECT_URI } = getConfig().serverRuntimeConfig;

  const credentials = Buffer.from(`${TWITTER_CLIENT_ID}:${TWITTER_CLIENT_SECRET}`).toString("base64");

  try {
    const response = await axios.post(
      "https://api.twitter.com/2/oauth2/token",
      new URLSearchParams({
        code,
        grant_type: "authorization_code",
        client_id: TWITTER_CLIENT_ID,
        client_secret: TWITTER_CLIENT_SECRET,
        redirect_uri: TWITTER_REDIRECT_URI,
        code_verifier: challengeCode, // Match the code_challenge sent earlier
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${credentials}`,
        },
      },
    );

    const { access_token, refresh_token, expires_in } = response.data;
    console.log("auth: ", access_token);

    try {
      const userResponse = await axios.get("https://api.twitter.com/2/users/me", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const { id, username } = userResponse.data.data;
      console.log("user twitte: ", userResponse.data.data);
      console.log("user expire: ", expires_in);

      // call api save to DB
      try {
        const res = await fetch(`http://localhost:3000/api/twitter`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            accessToken: access_token,
            refreshToken: refresh_token,
            expiredAt: new Date(new Date().getTime() + expires_in * 1000000),
            userId: id,
            name: username,
          }),
        });
        const data = await res.json();
        return new Response(JSON.stringify({ user_id: id, username, access_token, refresh_token, expires_in, data }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        console.error(error.response?.data || error.message);
        return new Response(JSON.stringify({ error: "Save user failed" }), { status: 500, headers: { "Content-Type": "application/json" } });
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      return new Response(JSON.stringify({ error: "Failed to fetch user details" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
  } catch (error) {
    console.error(error.response?.data || error.message);
    return new Response(JSON.stringify({ error: "Failed to exchange code for tokens" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
