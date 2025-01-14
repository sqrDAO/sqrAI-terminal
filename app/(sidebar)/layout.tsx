"use client";
import Sidebar from "./sidebar";
import AiChat from "./chat/Index";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

// export const metadata: Metadata = {
//   title: "Overview",
//   description: "",
// };

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.style.width = isExpanded ? "100vw" : "375px";
    }
  }, [isExpanded]);
  return (
    <div className={`w-full flex border-t border-t-[#DCFF9F]`}>
      <Sidebar />
      {children}
      <div
        className="w-[375px] min-w-[375px] h-[calc(100vh_-77px)] relative"
        id="chat-container"
      >
        <AiChat />

        <Button
          className="absolute -left-9 bottom-12 w-1 z-50"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m10 16 4-4-4-4"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m14 8-4 4 4 4"
              />
            </svg>
          )}
        </Button>
      </div>
    </div>
  );
}
