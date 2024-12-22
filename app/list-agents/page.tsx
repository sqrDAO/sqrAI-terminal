import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AgentCard: React.FC<{
  name: string;
  code: string;
  edited: string;
  imgSrc: string;
  borderColor: string;
  bgColor?: string;
  shadow?: string;
  chat?: boolean;
}> = ({
  name,
  code,
  edited,
  imgSrc,
  borderColor,
  bgColor = "black",
  shadow,
  chat = false,
}) => (
  <div
    className={`w-[260px] min-w-[260px] h-52 p-5 ${chat ? `card-animation` : ""} ${bgColor} ${
      shadow ? shadow : ""
    } border-2 ${borderColor} flex-col justify-start items-start gap-2.5 inline-flex hover:bg-[#111111]`}
  >
    <div className="self-stretch grow shrink basis-0 flex-col justify-between items-start flex relative z-10">
      <div className="flex-col justify-start items-start flex">
        <div className="text-center text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">
          {name}
        </div>
        <div className="text-center text-[#999999] text-sm font-normal font-bricolage leading-tight">
          {code}
        </div>
        {chat && (
          <Link
            href={chat ? `/chat` : "#"}
            className="px-2 bg-[#a4fb0e] justify-center items-center inline-flex overflow-hidden mt-2"
          >
            <div className="text-center text-black text-sm font-semibold font-chakra leading-relaxed">
              Chat now
            </div>
          </Link>
        )}
      </div>
      <div className="self-stretch justify-between items-center inline-flex">
        <Image
          width={80}
          height={90}
          alt=""
          className="w-10 h-10 rounded-full border border-black"
          src={imgSrc}
        />
        <div className="text-center text-[#999999] text-sm font-normal font-bricolage leading-tight">
          {edited}
        </div>
      </div>
    </div>
  </div>
);

const ListAgents: React.FC = () => {
  return (
    <div className="h-full px-6 pt-4 flex-col justify-start items-center inline-flex w-full relative mt-10">
      <div className="self-stretch h-[280px] p-6 border border-[#dcff9f] flex-col justify-between items-start flex absolute top-0 left-0 right-0 z-10 w-[1580px] mx-auto">
        <div className="text-[#a4fb0e] text-xl font-medium font-bricolage leading-[27px] animate-blink">
          &gt;_
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <Image
            className="w-[143px] h-[142px]"
            width={143}
            height={142}
            alt=""
            src="/imgs/page-1.svg"
          />
          <Image
            className="w-[142px] h-[142px]"
            width={143}
            height={142}
            alt=""
            src="/imgs/page-2.svg"
          />
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-4 flex mx-auto bg-black w-[1112px] relative z-20 mt-10">
        <div className="self-stretch h-[487px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-white text-2xl font-semibold font-chakra leading-[31.20px]">
              Your agents
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-6 inline-flex flex-wrap">
            <div className="w-[260px] min-w-[260px] h-52 bg-black border-4 border-[#a4fb0e] flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="flex-col justify-start items-center gap-4 flex">
                <div className="w-[34px] h-[34px] relative">
                  <div className="w-1 h-[34px] left-[15px] top-0 absolute bg-[#a4fb0e]" />
                  <div className="w-1 h-[34px] left-[34px] top-[15px] absolute origin-top-left rotate-90 bg-[#a4fb0e]" />
                </div>
                <div className="text-center text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">
                  Create a agent
                </div>
              </div>
            </div>
            <AgentCard
              name="Beta"
              code="Beta-a3cs4"
              edited="Edited 8 hours ago"
              imgSrc="/imgs/agents/agents-1.svg"
              borderColor="border-[#dcff9f]"
              chat={true}
            />
            <AgentCard
              name="Ajax"
              code="Ajax"
              edited="Edited 8 hours ago"
              imgSrc="/imgs/agents/agents-2.svg"
              borderColor="border-[#dcff9f]"
            />
            <AgentCard
              name="Beta"
              code="Beta-c9det"
              edited="Edited 8 hours ago"
              imgSrc="/imgs/agents/agents-3.svg"
              borderColor="border-[#dcff9f]"
            />
            <AgentCard
              name="Ce"
              code="Ce"
              edited="Edited 8 hours ago"
              imgSrc="/imgs/agents/agents-4.svg"
              borderColor="border-[#dcff9f]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAgents;
