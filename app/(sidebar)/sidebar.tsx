"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const route = useRouter();
  const searchParams = useSearchParams();
  const agentKey = searchParams.get("agent");

  const handleSelectChange = (value: string) => {
    route.push(`/overview?agent=${value}`);
  };

  return (
    <div className="w-80 h-[917px] pt-3 border-r border-[#dcff9f] flex-col justify-start items-start gap-3 inline-flex">
      <div className="self-stretch px-6 py-3 justify-center items-center gap-2.5 inline-flex">
        <Select value={agentKey || ''} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ajax">
              <div className="flex gap-3">
                <Image src={"/icons/agent-menu-icon.svg"} alt={""} width={22} height={22}></Image>Ajax
              </div>
            </SelectItem>
            <SelectItem value="beta">
              <div className="flex gap-3">
                <Image src={"/icons/agent-menu-icon.svg"} alt={""} width={22} height={22}></Image>Beta
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="h-px border-[#333333] justify-center items-center inline-flex">
        <div className="w-80 h-px border border-[#333333]" />
      </div>
      <div className="self-stretch h-[46px] px-3 flex-col justify-start items-start flex">
        <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch px-3.5 py-3 bg-[#a4fb0e] justify-center items-center gap-3 inline-flex">
          <Image src={"/icons/overview-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className="grow shrink basis-0 text-black text-base font-medium font-['Bricolage Grotesque'] leading-snug">Overview</div>
          </div>
        </div>
      </div>
      <div className="h-px border-[#333333] justify-center items-center inline-flex">
        <div className="w-80 h-px border border-[#333333]" />
      </div>
      <div className="self-stretch h-[194px] px-3 flex-col justify-start items-start flex">
        <div className="self-stretch p-3.5 justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-[#999999] text-sm font-medium font-['Bricolage Grotesque'] leading-tight">Generative AI</div>
        </div>
        <div className="self-stretch h-[146px] flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex">
            <Image src={"/icons/tech-learn-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className="grow shrink basis-0 text-white text-base font-medium font-['Bricolage Grotesque'] leading-snug">Technical learn</div>
          </div>
          <div className="self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex">
            <Image src={"/icons/scrape-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className="grow shrink basis-0 text-white text-base font-medium font-['Bricolage Grotesque'] leading-snug">Scrape social accounts</div>
          </div>
          <div className="self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex">
            <Image src={"/icons/other-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className="grow shrink basis-0 text-white text-base font-medium font-['Bricolage Grotesque'] leading-snug">Other data</div>
          </div>
        </div>
      </div>
      <div className="h-px border-[#333333] justify-center items-center inline-flex">
        <div className="w-80 h-px border border-[#333333]" />
      </div>
      <div className="self-stretch h-[94px] px-3 flex-col justify-start items-start flex">
        <div className="self-stretch p-3.5 justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-[#999999] text-sm font-medium font-['Bricolage Grotesque'] leading-tight">Export</div>
        </div>
        <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex">
            <Image src={"/icons/github-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className="grow shrink basis-0 text-white text-base font-medium font-['Bricolage Grotesque'] leading-snug">Github</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
