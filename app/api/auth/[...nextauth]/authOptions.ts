import CredentialsProvider from "next-auth/providers/credentials";
import { PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";
// import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Solana Wallet",
      credentials: {
        publicKey: { label: "Public Key", type: "text" },
        signature: { label: "Signature", type: "text" },
        message: { label: "Message", type: "text" },
      },
      async authorize(credentials) {
        const { publicKey, signature, message } = credentials;

        try {
          const publicKeyObj = new PublicKey(publicKey);
          const messageUint8 = new TextEncoder().encode(message);
          const signatureUint8 = Uint8Array.from(
            atob(signature)
              .split("")
              .map((char) => char.charCodeAt(0)),
          );

          const isValid = nacl.sign.detached.verify(messageUint8, signatureUint8, publicKeyObj.toBytes());

          if (isValid) {
            return { id: publicKey, name: publicKey };
          }

          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_CLIENT_ID, // Lấy từ Twitter Developer Portal
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET, // Lấy từ Twitter Developer Portal
    //   version: "2.0", // Sử dụng API v2 của Twitter
    // }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      // if (token) {
      //   session.accessToken = token.accessToken;
      //   session.refreshToken = token.refreshToken;
      // }
      return session;
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.user = user;
      }
      // if (account) {
      //   token.accessToken = account.access_token;
      //   token.refreshToken = account.refresh_token;
      // }
      return token;
    },

    async signOut({ token, session }) {
      console.log("User is logging out:", session?.user?.email);
      return true;
    },
  },
};
