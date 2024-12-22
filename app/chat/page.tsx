"use client";
import ChatBox from "@/components/chat-box";
import { useSQRAI } from "../provider/sqrai.provider";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import Image from "next/image";

const ListAgents: React.FC = () => {
  const { setSessionId, setSessionContent } = useSQRAI();
  const { connected, publicKey } = useWallet();
  useEffect(() => {
    if (connected) {
      if (publicKey) {
        const listChat = localStorage.getItem(publicKey?.toString());
        const _logChat = listChat ? JSON.parse(listChat) : [];
        setSessionId(publicKey?.toString());
        setSessionContent(_logChat[0]?.content || []);
      }
    } else {
      setSessionId("");
      setSessionContent([]);
    }
  }, [connected]);
  return (
    <div className="w-full h-full border-t border-[#dcff9f]">
      <div className="w-[1280px] mx-auto h-[calc(100vh_-_124px)] mt-10 relative z-20">
        <ChatBox></ChatBox>;
      </div>
      <div className="fixed bottom-0 right-0 w-full z-10">
        <Image
          src="/imgs/bg-home.svg"
          alt=""
          className="object-cover w-full"
          width={2560}
          height={615}
        />
      </div>
    </div>
  );
};

export default ListAgents;
