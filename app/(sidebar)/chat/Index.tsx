"use client";
import ChatBox from "@/components/chat-box";
import { useSQRAI } from "../../provider/sqrai.provider";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import Image from "next/image";

const AiChat: React.FC = () => {
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
  return <ChatBox></ChatBox>;
};

export default AiChat;
