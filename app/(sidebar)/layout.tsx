import type { Metadata } from "next";
import { Bricolage_Grotesque, Chakra_Petch } from "next/font/google";
import Sidebar from "./sidebar";

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
  title: "Overview",
  description: "",
};

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full flex ${bricolage.variable} ${chakra.variable} border-t border-t-[#DCFF9F]`}>
      <Sidebar />
      {children}
    </div>
  );
}
