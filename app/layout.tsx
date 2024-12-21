import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="w-full px-6 py-4 justify-between items-center inline-flex">
          <Image src={"/imgs/sqr-logo.svg"} alt={""} width={113} height={30}></Image>
          <div className="w-[113.22px] h-[30px] justify-center items-center flex">
            <div className="w-[113.21px] h-[30px] relative">
              <div className="w-[22.87px] h-[12.49px] left-[90.34px] top-[17.20px] absolute"></div>
            </div>
          </div>
          <div className="justify-start items-start flex">
            <div className="px-3.5 py-2 bg-[#a4fb0e] justify-center items-center flex overflow-hidden">
              <div className="px-1 justify-center items-center gap-2.5 flex">
                <div className="text-center text-black text-lg font-semibold font-['Chakra Petch'] leading-relaxed">Connect wallet</div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
