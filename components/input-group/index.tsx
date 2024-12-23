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
      <div className="bg-black w-full flex items-center overflow-hidden px-5 py-3">
        <textarea
          placeholder="Tell me what you're thinking about..."
          disabled={isLoading}
          className="text-white text-sm w-full bg-black"
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputGroup;
