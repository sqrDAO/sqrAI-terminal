"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateAgentPage = () => {
  const route = useRouter();
  const [agentName, setAgentName] = useState("");

  const createAgent = () => {
    if (agentName) {
      // call api to create agent
      route.push(`/overview?agent=${agentName}`);
    }
  };

  return (
    <div className="w-full h-[calc(100vh_-_77px)] bg-black flex-col justify-start items-start inline-flex overflow-hidden">
      <div className="self-stretch grow shrink basis-0 p-6 justify-between items-start inline-flex">
        <div className="grow shrink basis-0 self-stretch pl-16 pt-[132px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch justify-center items-center gap-4 inline-flex">
            <Image src={"/icons/close-x.svg"} alt={""} width={32} height={32}></Image>
            <div className="grow shrink basis-0 text-white text-3xl font-medium font-chakra leading-[37.50px]">Create a agent</div>
          </div>
          <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
            <div className="w-[1318px] pl-12 pt-[122px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch text-white text-5xl font-semibold font-chakra leading-[60px]">Let's start with a name for your agent</div>
              <div className="h-[72px] flex-col justify-start items-start gap-1.5 flex">
                <div className="self-stretch h-[72px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch h-5 flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-white text-sm font-semibold font-bricolage leading-tight">Agent name</div>
                  </div>
                  <Input
                    value={agentName}
                    onChange={(e) => {
                      setAgentName(e?.target?.value);
                    }}
                    className="w-[454px]"
                    type="text"
                    placeholder="Enter your agent name"
                  />
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-6 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="text-[#888888] text-sm font-semibold font-bricolage leading-tight">Agent id</div>
                  <Image src={"/icons/info-icon.svg"} alt={""} width={18} height={18}></Image>
                </div>
                <div className="text-white text-sm font-semibold font-bricolage leading-tight">your-project-id</div>
              </div>
              <Button onClick={createAgent}>Create</Button>
            </div>
          </div>
        </div>
        <div className="w-[368px] self-stretch p-6 border border-[#dcff9f] flex-col justify-between items-start inline-flex">
          <div className="text-[#a4fb0e] text-xl font-medium font-bricolage leading-[27px] animate-blink">{">"}_</div>
          <div className="self-stretch justify-between items-center inline-flex">
            <img className="w-[142px] h-[142px]" src="/imgs/image 2.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAgentPage;
