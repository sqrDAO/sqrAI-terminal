"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Overview = () => {
  const [githubLink, setGithubLink] = useState("");
  const [rowPerPage, setRowPerPage] = useState("50");
  const [isConnected, setIsConnected] = useState(false);
  const handleSelectChange = (value: string) => {
    setRowPerPage(value);
  };

  const agentList = JSON.parse(localStorage.getItem("agents"));

  const selectedAgent = JSON.parse(localStorage.getItem("selectedAgent"));

  const [githubLinks, setGithubLinks] = useState(JSON.parse(localStorage.getItem("selectedAgent"))?.githubLinks || []);

  useEffect(() => {
    const updatedAgent = {
      ...selectedAgent,
      githubLinks: githubLinks,
    };

    const updatedAgentList = agentList.map((agent) => (agent?.name === selectedAgent?.name ? updatedAgent : agent));

    setGithubLink("");

    localStorage.setItem("agents", JSON.stringify(updatedAgentList));
    localStorage.setItem("selectedAgent", JSON.stringify(updatedAgent));
  }, [githubLinks]);

  const handleAddLink = () => {
    if (githubLink === "") {
      return;
    }

    setGithubLinks((prev) => {
      return [...prev, { knowledgeLink: githubLink, addedAt: new Date().toISOString(), updatedAt: new Date().toISOString() }];
    });
  };

  return (
    <div className="w-full px-6 pt-6 flex-col justify-start items-center inline-flex h-[calc(100vh_-77px)] overflow-auto">
      <div className="self-stretch h-32 pb-16 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-chakra leading-[37.50px]">Push to github repo <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span></div>
            <div className="self-stretch text-[#999999] text-sm font-medium font-bricolage leading-tight">Drop your project’s Github repo here so</div>
          </div>
          <Image src={"/imgs/github.png"} alt={""} width={110} height={110}></Image>
        </div>
      </div>
      <div className="h-fit flex-col justify-start items-start gap-8 inline-flex">
        {!isConnected && (
          <div className="self-stretch h-fit py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex w-full md:w-[936px]">
            <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
              <Input
                value={githubLink}
                onChange={(e) => {
                  setGithubLink(e?.target?.value);
                }}
                className="w-full h-11"
                type="text"
                placeholder="Enter repo link"
              />
              <Button
                className="w-[125px] h-11"
                onClick={() => {
                  if (githubLink === "") {
                    return;
                  }

                  setIsConnected(true);
                }}
              >
                Connect
              </Button>
            </div>
          </div>
        )}
        {isConnected && (
          <div className="h-fit flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-fit py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex">
              <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 h-[66px] p-4 border border-[#dcff9f] justify-between items-center flex">
                  <div className="justify-start items-center gap-4 flex">
                    <Image src={"/icons/repo.svg"} alt={""} width={22} height={22}></Image>
                    <div className="text-center text-white text-sm font-medium font-bricolage leading-tight">repo-name</div>
                    <div className="text-center text-[#c5ff53] text-sm font-medium font-bricolage leading-tight">https://github.com/nicbarker/clay.git</div>
                  </div>
                  <div className="justify-start items-center gap-6 flex">
                    <div className="w-[120px] h-[34px] px-2 py-1 bg-[#a4fb0e] justify-center items-center flex overflow-hidden">
                      <div className="px-1 justify-center items-center gap-2.5 flex">
                        <div className="text-center text-black text-base font-semibold font-chakra leading-normal">Push</div>
                      </div>
                    </div>
                    <Image src={"/icons/menu-dot-icon.svg"} alt={""} width={22} height={22}></Image>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[196px] flex-col justify-start items-start flex">
                <div className="w-full md:w-[936px] px-5 py-2.5 border-b border-[#444444] grid grid-cols-4 gap-2.5">
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Commits</div>
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Detail</div>
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Status</div>
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Push time</div>
                </div>
                <div className="w-full md:w-[936px] px-5 py-4 border-b border-[#444444] grid grid-cols-4 gap-2.5">
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">mess</div>
                  <div className="text-[#c5ff53] text-sm font-semibold font-bricolage leading-tight">8cd2380</div>
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Status</div>
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Jun 28, 2021</div>
                </div>
              </div>
              <div className="self-stretch px-5 py-1 justify-end items-center gap-16 inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                  <div className="text-[#999999] text-sm font-normal font-bricolage leading-tight">Rows per page:</div>
                  <Select value={rowPerPage} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-[64px]">
                      <SelectValue placeholder="Select a agent" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"25"}>
                        <div>25</div>
                      </SelectItem>
                      <SelectItem value={"50"}>
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
        )}
      </div>
    </div>
  );
};

export default Overview;
