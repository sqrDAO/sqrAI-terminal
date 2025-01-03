import type { Metadata } from "next";
import { Bricolage_Grotesque, Chakra_Petch } from "next/font/google";
import "./globals.css";

import Providers from "./provider";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "sqrAI-terminal",
  description: "sqrAI-terminal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${chakra.variable} bg-black`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
