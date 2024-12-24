"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Overview = () => {
  const [knowledgeLink, setKnowledgeLink] = useState("");
  const [rowPerPage, setRowPerPage] = useState("50");
  const [isDragging, setIsDragging] = useState(false);
  const handleSelectChange = (value: string) => {
    setRowPerPage(value);
  };

  const agentList = JSON.parse(localStorage.getItem("agents"));

  const selectedAgent = JSON.parse(localStorage.getItem("selectedAgent"));

  const [knowledgeLinks, setKnowledgeLinks] = useState(JSON.parse(localStorage.getItem("selectedAgent"))?.knowledgeLinks || []);

  useEffect(() => {
    const updatedAgent = {
      ...selectedAgent,
      knowledgeLinks: knowledgeLinks,
    };

    const updatedAgentList = agentList.map((agent) => (agent?.name === selectedAgent?.name ? updatedAgent : agent));

    setKnowledgeLink("");

    localStorage.setItem("agents", JSON.stringify(updatedAgentList));
    localStorage.setItem("selectedAgent", JSON.stringify(updatedAgent));
  }, [knowledgeLinks]);

  const handleAddLink = () => {
    if (knowledgeLink === "") {
      return;
    }

    setKnowledgeLinks((prev) => {
      return [
        ...prev,
        {
          knowledgeLink: knowledgeLink,
          addedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
    });
  };

  const handleDeleteLink = (index: number) => {
    const updatedLinks = knowledgeLinks?.filter((_, i) => i !== index);
    setKnowledgeLinks(updatedLinks);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event?.dataTransfer?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setKnowledgeLinks((prev) => [
          ...prev,
          {
            knowledgeLink: reader?.result,
            addedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            name: file?.name,
            size: file?.size,
            type: file?.type,
          },
        ]);
      };
      reader.readAsText(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className=" h-[calc(100vh_-77px)] overflow-auto w-full px-6 pt-6 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-32 pb-16 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-chakra leading-[37.50px]">
              More Knowledge <span className="text-[10px] font-chakra text-[#A4FB0E]">(comming soon)</span>
            </div>
            <div className="self-stretch text-[#999999] text-sm font-medium font-bricolage leading-tight">Gain more knowledge by your documents. We supports text-only resource!</div>
          </div>
          <Image src={"/imgs/other.png"} alt={""} width={110} height={110}></Image>
        </div>
      </div>
      <div className="h-fit flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch h-fit py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex">
          <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex" onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
            <div className={`grow shrink basis-0 px-4 py-8 border border-[#dcff9f] flex-col justify-center items-center gap-4 inline-flex ${isDragging ? "bg-[#444444]" : ""}`}>
              <div className="w-[26px] h-[26px] relative">
                <div className="w-[3.06px] h-[26px] left-[11.47px] top-0 absolute bg-[#c5ff53]" />
                <div className="w-[3.06px] h-[26px] left-[26px] top-[11.47px] absolute origin-top-left rotate-90 bg-[#c5ff53]" />
              </div>
              <div className="self-stretch text-center text-[#c5ff53] text-sm font-medium font-bricolage leading-tight">Drag & drop text-based files</div>
            </div>
          </div>
          <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
            <Input
              value={knowledgeLink}
              onChange={(e) => {
                setKnowledgeLink(e?.target?.value);
              }}
              className="w-full h-11"
              type="text"
              placeholder="+ Drop your link of articles, news, etc,..."
            />
            <Button className="w-[125px] h-11" onClick={handleAddLink}>
              Add
            </Button>
          </div>
          <div className="self-stretch h-fit flex-col justify-start items-start flex w-[936px]">
            <div className="w-full px-5 py-2.5 border-b border-[#444444] grid grid-cols-[3fr_1fr_1fr_1fr_auto] gap-2.5">
              <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Name</div>
              <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Size</div>
              <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Type</div>
              <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">Add time</div>
              <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight text-right"></div>
            </div>
            {knowledgeLinks.map((link, index) => {
              return (
                <div key={index} className="w-full px-5 py-4 border-b border-[#444444] grid grid-cols-[3fr_1fr_1fr_1fr_auto] gap-2.5">
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">{link?.name || link?.knowledgeLink}</div>
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">{link?.size ? (link?.size / 1024576)?.toFixed(2) + " MB" : ""}</div>
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">{link?.type}</div>
                  <div className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">{dayjs(link?.addedAt).format("MMM DD, YYYY")}</div>
                  <div className="text-right">
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
                </div>
              );
            })}
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
    </div>
  );
};

export default Overview;
