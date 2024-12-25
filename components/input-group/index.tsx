import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSQRAI } from "@/app/provider/sqrai.provider";

type Props = {
  isLoading: boolean;
};

const InputGroup: React.FC<Props> = ({ isLoading }) => {
  const { publicKey } = useWallet();
  const { setDataChat } = useSQRAI();
  const [value, setValue] = useState<string>("");
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      if (isLoading) return;
      const dataChat = {
        from: publicKey?.toString() ?? "user",
        value: event.target.value,
      };
      setDataChat(dataChat);
      setValue("");
    }
  };

  return (
    <div className={`w-full transition-all border-t border-[#a4fb0e]`}>
      <div className="bg-black w-full flex items-center overflow-hidden pl-11 py-3 relative">
        <div className="text-[#a4fb0e] text-sm font-medium font-bricolage leading-[27px] flex absolute left-5 top-2">
          &gt;_
        </div>
        <textarea
          placeholder="Ask follow-up"
          disabled={isLoading}
          className="text-white text-sm w-full bg-black"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
          rows={2}
        />
      </div>
    </div>
  );
};

export default InputGroup;
