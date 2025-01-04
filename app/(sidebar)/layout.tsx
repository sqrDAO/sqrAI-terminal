"use client";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Chakra_Petch } from "next/font/google";
import Sidebar from "./sidebar";
import AiChat from "./chat/Index";
import { useEffect } from "react";

// export const metadata: Metadata = {
//   title: "Overview",
//   description: "",
// };

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full flex border-t border-t-[#DCFF9F]`}>
      <Sidebar />
      {children}
      <div className="w-[375px] min-w-[375px] h-[calc(100vh_-77px)]">
        <AiChat />
      </div>
    </div>
  );
}
