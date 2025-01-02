import getConfig from "next/config";

export async function GET() {
  const { TWITTER_CLIENT_ID, TWITTER_REDIRECT_URI } = getConfig().serverRuntimeConfig;

  function randomString(length: number): string {
    return Array.from(Array(length), () => Math.floor(Math.random() * 36).toString(36)).join("");
  }

  const challengeCode = randomString(10);
  const scope = "tweet.read tweet.write users.read offline.access";
  const authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${TWITTER_CLIENT_ID}&redirect_uri=${encodeURIComponent(TWITTER_REDIRECT_URI)}&scope=${encodeURIComponent(
    scope,
  )}&state=${challengeCode}&code_challenge_method=plain&code_challenge=${challengeCode}`;

  return Response.redirect(authUrl);
}
