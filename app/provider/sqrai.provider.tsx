"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { IChat } from "../types/types";

const sqraiContext = createContext({
  dataChat: null,
  setDataChat: (a) => {},
  agent: null,
  setAgent: (a) => {},
  sessionId: "",
  setSessionId: (a) => {},
  sessionContent: [],
  setSessionContent: (a) => {},
});

export const SQRAIProvider = ({ children }) => {
  const [dataChat, setDataChat] = useState<IChat>(null);
  const [agent, setAgent] = useState(null);
  const [sessionId, setSessionId] = useState("");
  const [sessionContent, setSessionContent] = useState<IChat[]>([]);
  const { publicKey } = useWallet();
  useEffect(() => {
    try {
      if (!publicKey) return;
      // console.log(sessionId);
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
        agent,
        setAgent,
        sessionId,
        setSessionId,
        sessionContent,
        setSessionContent,
      }}
    >
      {children}
    </sqraiContext.Provider>
  );
};

export const useSQRAI = () => useContext(sqraiContext);
