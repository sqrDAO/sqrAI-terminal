"use client";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Chakra_Petch } from "next/font/google";
import Sidebar from "./sidebar";
import AiChat from "./chat/Index";
import { useEffect } from "react";
import { EventProvider } from "../context/ChatContext";

// export const metadata: Metadata = {
//   title: "Overview",
//   description: "",
// };

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   // Lấy phần tử container và dragbar
  //   const resizable = document.getElementById("resizable");
  //   const dragbar = document.getElementById("dragbar");

  //   let isDragging = false;

  //   // Sự kiện bắt đầu kéo
  //   dragbar.addEventListener("mousedown", (e) => {
  //     isDragging = true;
  //     document.body.style.cursor = "col-resize"; // Thay đổi con trỏ khi kéo
  //   });

  //   // Sự kiện kéo
  //   document.addEventListener("mousemove", (e) => {
  //     if (isDragging) {
  //       // Tính toán chiều rộng mới dựa trên vị trí chuột
  //       const newWidth = e.clientX - resizable.offsetLeft;
  //       if (newWidth > 100) {
  //         // Giới hạn tối thiểu (100px)
  //         resizable.style.width = `${newWidth}px`;
  //       }
  //     }
  //   });

  //   // Sự kiện thả chuột
  //   document.addEventListener("mouseup", () => {
  //     isDragging = false;
  //     document.body.style.cursor = "default"; // Trả lại con trỏ mặc định
  //   });
  // }, []);
  return (
    <EventProvider>
      <div className={`w-full flex border-t border-t-[#DCFF9F]`}>
        <Sidebar />
        {children}
        <div className="w-[375px] min-w-[375px] h-[calc(100vh_-77px)]">
          <AiChat />
        </div>
      </div>
    </EventProvider>
  );
}
