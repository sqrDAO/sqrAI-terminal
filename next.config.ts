import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  serverRuntimeConfig: {
    TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID,
    TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET,
    TWITTER_REDIRECT_URI: process.env.TWITTER_REDIRECT_URI,
    POSTGRES_URL: process.env.POSTGRES_URL,
    NEXTAUTH_JWT: process.env.NEXTAUTH_JWT,
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
    NEXT_PUBLIC_AGENTID: process.env.NEXT_PUBLIC_AGENTID,
    NEXT_PUBLIC_ROOMID: process.env.NEXT_PUBLIC_ROOMID,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_SCRAPE_API: process.env.NEXT_PUBLIC_SCRAPE_API,
  },
};

export default nextConfig;
