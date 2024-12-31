"use client";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSQRAI } from "@/app/provider/sqrai.provider";

type Props = {
  isLoading: boolean;
};

const InputGroup: React.FC<Props> = ({ isLoading }) => {
  const { publicKey } = useWallet();
  const { setDataChat } = useSQRAI();
  // const [value, setValue] = useState<string>("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      if (isLoading) return;
      const dataChat = {
        from: publicKey?.toString() ?? "user",
        value: event.target.textContent,
      };
      setDataChat(dataChat);
      event.target.textContent = "";
    }
  };

  return (
    <div className={`w-full transition-all border-t border-[#a4fb0e]`}>
      <div className="bg-black w-full flex items-center overflow-hidden pl-11 py-4 relative">
        <div className="text-[#a4fb0e] text-sm font-medium font-bricolage leading-[27px] flex absolute left-5 top-3">
          &gt;_
        </div>
        <div
          contentEditable={!isLoading}
          className="text-white text-sm w-full bg-black outline-none break-words whitespace-pre-wrap min-h-5 max-h-14 overflow-auto editable"
          // onInput={(event) => setValue(event.currentTarget.textContent || "")}
          onKeyDown={handleKeyDown}
          suppressContentEditableWarning={true}
        >
          {/* {value} */}
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
