"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { IChat } from "../types/types";

const sqraiContext = createContext({
  dataChat: null,
  setDataChat: (a) => {},
  sessionId: "",
  setSessionId: (a) => {},
  sessionContent: [],
  setSessionContent: (a) => {},
  isSubmit: false,
  setIsSubmit: (a) => {},
});

export const SQRAIProvider = ({ children }) => {
  const [dataChat, setDataChat] = useState<IChat>(null);
  const [sessionId, setSessionId] = useState("");
  const [sessionContent, setSessionContent] = useState<IChat[]>([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const { connected, connect, publicKey, disconnect, signMessage } =
    useWallet();
  useEffect(() => {
    try {
      if (!publicKey) return;
      console.log(sessionId);
      if (sessionContent && sessionContent.length > 0) {
        const listChat = window.localStorage.getItem(publicKey?.toString());
        let jsonChat = listChat ? JSON.parse(listChat) : [];
        if (jsonChat) {
          jsonChat = jsonChat.filter((item) => item.sessionId !== sessionId);
        }
        jsonChat.unshift({ sessionId: sessionId, content: sessionContent });
        jsonChat = JSON.stringify(jsonChat);
        window.localStorage.setItem(publicKey?.toString(), jsonChat);
        setDataChat(null);
      }
    } catch (error) {
      console.error(error);
    }
  }, [sessionContent]);

  return (
    <sqraiContext.Provider
      value={{
        dataChat,
        setDataChat,
        sessionId,
        setSessionId,
        sessionContent,
        setSessionContent,
        isSubmit,
        setIsSubmit,
      }}
    >
      {children}
    </sqraiContext.Provider>
  );
};

export const useSQRAI = () => useContext(sqraiContext);
