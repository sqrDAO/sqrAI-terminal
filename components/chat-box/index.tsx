"use client";
import { useEffect, useRef, useState } from "react";
import InputGroup from "../input-group";
import { IChat } from "@/app/types/types";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSQRAI } from "@/app/provider/sqrai.provider";
import { BotReply, useBotAutoReply } from "@/app/serivces/bot-api";
import ReactMarkdown from "react-markdown";
let intervalId;
const ChatBox = () => {
  const { publicKey } = useWallet();
  const messagesEndRef = useRef<HTMLInputElement>(null);
  const { sessionContent, setSessionContent, dataChat } = useSQRAI();
  const [isLoading, setLoading] = useState<boolean>(false);

  const {
    data: botReplies,
    error,
    refetch: refetchMesages,
  } = useBotAutoReply(publicKey?.toString());

  useEffect(() => {
    setSessionContent(botReplies);
  }, [botReplies]);

  const userChat = (dataChat: IChat) => {
    if (Object.keys(dataChat).length == 0) return;
    setSessionContent([...sessionContent, dataChat]);
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      scrollToBottom();
    }, 1000);
  };

  const onBotReply = async (message) => {
    try {
      setLoading(true);
      const res = await BotReply({
        message: message,
        publicKey: publicKey?.toString(),
      });
      await refetchMesages();
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    scrollToBottom();
    if (sessionContent.length > 0) {
      let lastMessage = sessionContent[sessionContent.length - 1];
      if (lastMessage && lastMessage?.value && lastMessage?.from != "bot") {
        onBotReply(lastMessage?.value);
      }
    }

    window.addEventListener("wheel", () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });
  }, [sessionContent]);

  useEffect(() => {
    if (dataChat) {
      userChat(dataChat);
    }
  }, [dataChat]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col h-full w-full border-l border-[#a4fb0e] bg-black">
      <div className="grow overflow-auto transition-all p-5">
        {sessionContent.map((item, index) => (
          <>
            {item.from !== "bot" && (
              <div key={index}>
                <div className="flex flex-col items-start gap-0 mb-4">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="text-sm font-bold text-[#a4fb0e] font-bricolage flex">
                      &gt;_ You
                    </div>
                  </div>
                  {/* </div> */}
                  <div className="flex flex-col">
                    <div className="text-sm font-normal break-all text-[#a4fb0e] font-chakra">
                      <span style={{ whiteSpace: "pre-line" }}>
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {item.from == "bot" && (
              <div key={index}>
                <div className="flex flex-col items-start gap-0 mb-4 ">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-bold text-white font-bricolage">
                      &gt;_ beta
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-sm font-normal break-all text-white">
                      <ReactMarkdown>{item.value}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}

        {isLoading && (
          <div className="flex flex-col items-start gap-2 mb-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-bold text-white font-bricolage">
                &gt;_ beta
              </span>
            </div>
            <div className="flex flex-col animate-pulse space-y-2.5 w-full">
              <div className="flex items-center w-1/2">
                <div className="h-2.5 rounded-full bg-gray-700 w-32"></div>
                <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-24"></div>
                <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-full"></div>
              </div>
              <div className="flex items-center w-full max-w-[480px]">
                <div className="h-2.5 rounded-full bg-gray-700 w-full"></div>
                <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-24"></div>
              </div>
              <div className="flex items-center w-full max-w-[400px]">
                <div className="h-2.5 rounded-full bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 rounded-full bg-gray-700 w-80"></div>
                <div className="h-2.5 ms-2 rounded-full bg-gray-600 w-full"></div>
              </div>
            </div>
          </div>
        )}
        <div className="p-2" ref={messagesEndRef} />
      </div>
      <InputGroup isLoading={isLoading}></InputGroup>
    </div>
  );
};

export default ChatBox;
