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
    <div className="h-[917px] w-full mx-6 mt-6 flex-col justify-start items-center inline-flex relative">
      <div className="self-stretch h-[280px] p-6 border border-[#dcff9f] flex-col justify-between items-start flex absolute top-0 left-0 right-0 z-10 w-full mx-auto">
        <div className="text-[#a4fb0e] text-xl font-medium font-bricolage leading-[27px] flex">{">"}<div className="animate-blink">_</div></div>
        <div className="self-stretch justify-between items-center inline-flex">
          <Image className="w-[143px] h-[142px]" width={143} height={142} alt="" src="/imgs/page-1.svg" />
          <Image className="w-[142px] h-[142px]" width={143} height={142} alt="" src="/imgs/page-2.svg" />
        </div>
      </div>
      <div className="mx-auto self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex w-[936px] z-20 mt-6">
        <div className="self-stretch h-[38px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-white text-3xl font-semibold font-chakra leading-[37.50px]">Ajax</div>
          </div>
        </div>
        <div className="self-stretch h-[482px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch mix-blend-difference text-white text-base font-medium font-bricolage leading-snug">
            Go-to solution for harnessing the power of AI. empowering the AI to understand and adapt to your needs. make the process intuitive and efficient.
            <br />
            Dive into to explore how AI can help you automate tasks, gain deeper insights, and unlock new possibilities for growth and innovation.
          </div>
          <div className="self-stretch p-5 bg-black border-2 border-[#dcff9f] justify-start items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
              <div className="self-stretch h-[53px] flex-col justify-start items-start gap-1.5 flex">
                <div className="text-center text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">Collaborate with your project’s GitHub repo!</div>
                <div className="text-center text-[#999999] text-sm font-normal font-bricolage leading-tight">
                  Enable the agent to explore and understand your code by sharing your repository.
                </div>
              </div>
              <div className="self-stretch text-center text-[#c5ff53] text-sm font-medium font-['Bricolage Grotesque'] leading-tight">Drag & drop text-based files</div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 p-5 bg-black border-2 border-[#dcff9f] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch h-[135px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch h-[73px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">Discover and Learn from X Accounts!</div>
                  <div className="self-stretch text-[#999999] text-sm font-normal font-bricolage leading-tight">
                    Scrape and follow multiple X accounts to help the AI gain deeper insights.
                  </div>
                </div>
                <Button>Try it</Button>
              </div>
            </div>
            <div className="grow shrink basis-0 p-5 bg-black border-2 border-[#dcff9f] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch h-[135px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch h-[73px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">Expand Knowledge with Your Documents!</div>
                  <div className="self-stretch text-[#999999] text-sm font-normal font-bricolage leading-tight">
                    Provide documents to help the AI gain deeper insights and understanding.
                  </div>
                </div>
                <Button>Upload documents</Button>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">1.3MB</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">txt</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Jun 28, 2021</div>
              </div>
              <Image src={"/icons/menu-dot-icon.svg"} alt={""} width={22} height={22}></Image>
            </div>
            <div className="w-[936px] px-5 py-4 border-b border-[#444444] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Content demo</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">5.6MB</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">pdf</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Jun 28, 2021</div>
              </div>
              <Image src={"/icons/menu-dot-icon.svg"} alt={""} width={22} height={22}></Image>
            </div>
            <div className="w-[936px] px-5 py-4 border-[#444444] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">http://sbc.zxt/file.txt</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">link</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">link</div>
              </div>
              <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Jun 28, 2021</div>
              </div>
              <Image src={"/icons/menu-dot-icon.svg"} alt={""} width={22} height={22}></Image>
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
