"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import dayjs from "dayjs";
import Image from "next/image";
import { useEffect, useState } from "react";

const Overview = () => {
  const [githubLink, setGithubLink] = useState("");
  const [rowPerPage, setRowPerPage] = useState('50');
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
      return [...prev, { githubLink, addedAt: new Date().toISOString() }];
    });
  };

  const handleDeleteLink = (index: number) => {
    const updatedLinks = githubLinks.filter((_, i) => i !== index);
    setGithubLinks(updatedLinks);
  };

  return (
    <div className=" h-[calc(100vh_-77px)] overflow-auto w-full px-6 pt-6 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-32 pb-16 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-chakra leading-[37.50px]">Technical knowledge</div>
            <div className="self-stretch text-[#999999] text-sm font-medium font-bricolage leading-tight">Drop your project’s Github repo so the agent can understand how it works</div>
          </div>
          <Image src={"/imgs/tech-learn.png"} alt={""} width={110} height={110}></Image>
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex w-[936px] mx-auto">
        <div className="self-stretch h-fit flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-fit py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex">
            <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
              <Input
                value={githubLink}
                onChange={(e) => {
                  setGithubLink(e?.target?.value);
                }}
                className="w-full h-11"
                type="text"
                placeholder="Link to Github’s repo"
              />
              <Button className="w-[125px] h-11" onClick={handleAddLink}>
                Add
              </Button>
            </div>
            <div className="self-stretch h-fit flex-col justify-start items-start flex">
              <div className="w-[936px] px-5 py-2.5 border-b border-[#444444] justify-center items-center inline-flex">
                <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">Name</div>
                </div>
                <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">Link</div>
                </div>
                <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">Add time</div>
                </div>
                <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 opacity-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">action</div>
                </div>
              </div>
              {githubLinks.map((link: any, index: number) => {
                return (
                  <div key={index} className="w-[936px] px-5 py-4 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                      <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">json-data</div>
                    </div>
                    <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                      <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{link?.githubLink}</div>
                    </div>
                    <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                      <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{dayjs(link?.addedAt).format("MMM DD, YYYY")}</div>
                    </div>
                    <Popover>
                      <PopoverTrigger>
                        <Image src={"/icons/menu-dot-icon.svg"} alt={""} width={20} height={20} className="cursor-pointer"></Image>
                      </PopoverTrigger>
                      <PopoverContent align="end" className="bg-black border border-[#DCFF9F] w-[218px]">
                        <div
                          className="cursor-pointer text-white text-base font-medium font-bricolage"
                          onClick={() => {
                            handleDeleteLink(index);
                          }}
                        >
                          Delete
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                );
              })}
            </div>
            <div className="self-stretch px-5 py-1 justify-end items-center gap-16 inline-flex">
              <div className="justify-start items-center gap-2.5 flex w-1/4">
                <div className="text-[#999999] text-sm font-normal font-bricolage leading-tight">Rows per page:</div>
                <Select value={rowPerPage} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-[64px]">
                    <SelectValue placeholder="Select a agent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'25'}>
                      <div>25</div>
                    </SelectItem>
                    <SelectItem value={'50'}>
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
    </div>
  );
};

export default Overview;
