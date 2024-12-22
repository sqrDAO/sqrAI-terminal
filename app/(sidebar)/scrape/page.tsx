"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

const Overview = () => {
  const [scrapeLink, setScrapeLink] = useState("");
  const [rowPerPage, setRowPerPage] = useState(50);
  const handleSelectChange = (value: number) => {
    setRowPerPage(value);
  };

  return (
    <div className="h-[917px] w-full px-6 pt-6 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-32 pb-16 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-['Chakra Petch'] leading-[37.50px]">Scrape X account</div>
            <div className="self-stretch text-[#999999] text-sm font-medium font-['Bricolage Grotesque'] leading-tight">Follow multiple X accounts to gain more knowledge</div>
          </div>
          <Image src={"/imgs/image3.png"} alt={""} width={110} height={110}></Image>
        </div>
      </div>
      <div className="h-[458px] flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch h-[458px] py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex w-[936px]">
          <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
            <Input
              value={scrapeLink}
              onChange={(e) => {
                setScrapeLink(e?.target?.value);
              }}
              className="w-full h-11"
              type="text"
              placeholder="+ Drop @ or link of X account"
            />
            <Button className="w-[125px] h-11">Add</Button>
          </div>
          <div className="self-stretch h-[304px] flex-col justify-start items-start flex">
            <div className="w-[936px] px-5 py-2.5 border-b border-[#444444] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">User</div>
              </div>
              <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Add time</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Last update</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 opacity-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">action</div>
              </div>
            </div>
            <div className="w-[936px] px-5 py-4 border-b border-[#444444] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 h-[22px] px-2.5 justify-center items-center gap-2.5 flex">
                <img
                  className="w-[22px] h-[22px] relative rounded-[200px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03)] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08)] border border-[#dcff9f]"
                  src="https://via.placeholder.com/22x22"
                />
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">@name</div>
              </div>
              <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Jun 28, 2021</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Jun 28, 2021</div>
              </div>
              <div className="h-[34px] px-2.5 justify-between items-center flex">
                <Button variant="outline" className="text-[#A4FB0E]">
                  Scrape
                </Button>
                <Image src={"/icons/menu-dot-icon.svg"} alt={""} width={22} height={22}></Image>
              </div>
            </div>
          </div>
          <div className="self-stretch px-5 py-1 justify-end items-center gap-16 inline-flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="text-[#999999] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">Rows per page:</div>
              <Select value={rowPerPage} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[64px]">
                  <SelectValue placeholder="Select a agent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={25}>
                    <div>25</div>
                  </SelectItem>
                  <SelectItem value={50}>
                    <div>50</div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="justify-start items-center gap-8 flex">
              <Image src={"/icons/arrow-left.svg"} alt={""} width={22} height={22} className="cursor-pointer"></Image>
              <Image src={"/icons/arrow-right.svg"} alt={""} width={22} height={22} className="cursor-pointer"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
