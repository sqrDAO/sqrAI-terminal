"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import InputGroup from "../input-group";
import { IChat } from "@/app/types/types";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSQRAI } from "@/app/provider/sqrai.provider";
import BotReply from "@/app/serivces/bot-api";
import utils from "@/app/utils";
import Image from "next/image";
let intervalId;
const ChatBox = () => {
  const { publicKey } = useWallet();
  const [avatar, setAvatar] = useState<string>("");
  const messagesEndRef = useRef<HTMLInputElement>(null);
  const { sessionContent, setSessionContent, sessionId, dataChat } = useSQRAI();
  const [isLoading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    const res = await BotReply({ message: message, sessionId: sessionId });
    if (res[0].text) {
      const reply: IChat = {
        from: "bot",
        value: res[0].text,
      };

      setSessionContent([...sessionContent, reply]);
      setLoading(false);
    }
  };

  useEffect(() => {
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

  useEffect(() => {
    if (publicKey?.toString()) {
      setAvatar(utils.genAVT(publicKey?.toString() as string));
    }
  }, [publicKey?.toString()]);

  return (
    <div className="flex flex-col h-[calc(100vh-_170px)] max-h-screen w-full border border-[#a4fb0e] bg-black">
      <div className="grow overflow-auto transition-all p-5">
        {sessionContent.map((item, index) => (
          <>
            {item.from !== "bot" && (
              <div key={index}>
                <div className="flex flex-col items-end gap-4 mb-4">
                  <div className="flex gap-1 p-1 border border-[#a4fb0e] overflow-hidden">
                    <img
                      className="w-6 h-6 rounded-full"
                      src={avatar}
                      alt={publicKey?.toString()}
                    />
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="text-sm font-semibold text-yellow-300">
                        {publicKey
                          ? ` ..${publicKey
                              ?.toString()
                              ?.substring(
                                publicKey?.toString().length - 6,
                                publicKey?.toString().length
                              )}`
                          : "User"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-md font-normal break-all text-white font-chakra">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {item.from == "bot" && (
              <div key={index}>
                <div className="flex flex-col items-start gap-2 mb-4 ">
                  <div className="flex gap-2 items-center justify-center p-2 border border-[#a4fb0e] overflow-hidden">
                    <Image
                      src={"/imgs/sqr-logo.svg"}
                      className=""
                      alt={""}
                      width={50}
                      height={30}
                    ></Image>
                    {/* <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <span className="opacity-80 text-right text-zinc-900/opacity-80 text-xs font-normal font-pixel uppercase leading-[18px] text-white">
                        SQR.AI
                      </span>
                    </div> */}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-md font-normal break-all text-[#a4fb0e]">
                      {item.value}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ))}

        {isLoading && (
          <div className="flex flex-col items-start gap-2 mb-4">
            <div className="flex gap-2 items-center justify-center">
              <Image
                src={"/imgs/sqr-logo.svg"}
                alt={""}
                width={50}
                height={30}
              ></Image>
              {/* <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="opacity-80 text-right text-zinc-900/opacity-80 text-xs font-normal font-pixel uppercase leading-[18px] text-white">
                  SQR.AI
                </span>
              </div> */}
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
