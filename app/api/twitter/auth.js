import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
      version: "2.0",
      authorization: {
        params: {
          scope: "tweet.read tweet.write users.read offline.access",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.twitterId = account.providerAccountId;
        token.twitterName = account.name;
      }

      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        userId: token.userId,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };

      console.log(`session: ${JSON.stringify(session)}`);

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
