"use client";
import LoadingSpinner from "@/app/components/loading-spinner";
import { getSampleAgent, getScrapeByUsername, getScrapeProgress, scrapeTwitter, updateCharacter } from "@/app/serivces/agent.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import useScrapeList from "@/hooks/useScrapeList";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Overview = () => {
  const [scrapeLink, setScrapeLink] = useState("");
  const [rowPerPage, setRowPerPage] = useState("50");
  const handleSelectChange = (value: string) => {
    setRowPerPage(value);
  };

  const [agentList, setAgentList] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    const logsDiv = document.getElementById("logs");
    const scrapeApiUrl = process.env.NEXT_PUBLIC_SCRAPE_API;
    const eventSource = new EventSource(`${scrapeApiUrl}/logs`);

    // Handle incoming messages
    eventSource.onmessage = (event) => {
      if (logsDiv) {
        logsDiv.textContent += event.data + "\n";
      }
    };

    // Handle errors
    eventSource.onerror = () => {
      console.error("Error connecting to the server");
      eventSource.close(); // Optionally close the connection
    };

    // Clean up on unmount
    return () => {
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    const agents = JSON.parse(localStorage.getItem("agents")) || [];
    const selected = JSON.parse(localStorage.getItem("selectedAgent")) || null;
    setAgentList(agents);
    setSelectedAgent(selected);
  }, []);

  const [scrapeLinks, setScrapeLinks] = useState([]);

  const checkScrapeStatus = async (item) => {
    const intervalId = setInterval(async () => {
      const result = await getScrapeProgress(item?.taskId);
      item.taskProgress = result?.progress;
      item.status = "in-progress";
      if (result?.progress === 100) {
        clearInterval(intervalId);

        const characterRes = await getScrapeByUsername(item?.scrapeLink);
        item.status = "success";

        // update local storage
        const updatedAgent = {
          ...selectedAgent,
          scrapeLinks: scrapeLinks?.map((link) => (link.scrapeLink === item.scrapeLink ? item : link)),
        };
        const updatedAgentList = agentList.map((agent) => (agent.name === selectedAgent.name ? updatedAgent : agent));

        localStorage.setItem("agents", JSON.stringify(updatedAgentList));
        localStorage.setItem("selectedAgent", JSON.stringify(updatedAgent));

        setScrapeLinks(scrapeLinks?.map((link) => (link?.scrapeLink === item?.scrapeLink ? item : link)));

        const sample = await getSampleAgent();
        if (sample?.character && characterRes?.characterData) {
          sample.character.knowledge = [...sample?.character?.knowledge, ...characterRes?.characterData.knowledge];
          sample.character.messageExamples = [...sample?.character?.messageExamples, ...characterRes?.characterData.messageExamples];

          await updateCharacter(sample?.character);
        }
      } else {
        // update local storage
        const updatedAgent = {
          ...selectedAgent,
          scrapeLinks: scrapeLinks?.map((link) => (link.scrapeLink === item.scrapeLink ? { ...item, taskProgress: result?.progress } : link)),
        };
        const updatedAgentList = agentList.map((agent) => (agent.name === selectedAgent.name ? updatedAgent : agent));

        localStorage.setItem("agents", JSON.stringify(updatedAgentList));
        localStorage.setItem("selectedAgent", JSON.stringify(updatedAgent));

        setScrapeLinks(scrapeLinks?.map((link) => (link?.scrapeLink === item?.scrapeLink ? item : link)));
      }
    }, 10000);
  };

  useEffect(() => {
    if (agentList?.length > 0) {
      const updatedAgent = {
        ...selectedAgent,
        scrapeLinks: scrapeLinks,
      };

      const updatedAgentList = agentList.map((agent) => (agent?.name === selectedAgent?.name ? updatedAgent : agent));

      localStorage.setItem("agents", JSON.stringify(updatedAgentList));
      localStorage.setItem("selectedAgent", JSON.stringify(updatedAgent));
    }
  }, [agentList, scrapeLinks]);

  useEffect(() => {
    if (selectedAgent) {
      selectedAgent?.scrapeLinks?.forEach((item) => {
        if (item?.status === "pending" || item?.status === "in-progress") {
          checkScrapeStatus(item);
        }
      });

      setScrapeLinks(selectedAgent.scrapeLinks || []);
    }
  }, [selectedAgent]);

  const handleAddLink = () => {
    if (scrapeLink === "") {
      return;
    }

    setScrapeLinks((prev) => {
      return [...prev, { scrapeLink, addedAt: new Date().toISOString(), updatedAt: new Date().toISOString() }];
    });
  };

  const handleDeleteLink = (index: number) => {
    const updatedLinks = scrapeLinks?.filter((_, i) => i !== index);
    setScrapeLinks(updatedLinks);
  };

  const scrape = async (item: any) => {
    item.status = "pending";

    setScrapeLinks(scrapeLinks?.map((link) => (link?.scrapeLink === item?.scrapeLink ? item : link)));

    const scrapeRes = await scrapeTwitter(item?.scrapeLink);
    item.taskId = scrapeRes?.taskId;

    const updatedAgent = {
      ...selectedAgent,
      scrapeLinks: scrapeLinks?.map((link) => (link?.scrapeLink === item?.scrapeLink ? { ...link, taskId: item.taskId } : link)),
    };
    const updatedAgentList = agentList.map((agent) => (agent.name === selectedAgent?.name ? updatedAgent : agent));

    localStorage.setItem("agents", JSON.stringify(updatedAgentList));
    localStorage.setItem("selectedAgent", JSON.stringify(updatedAgent));

    checkScrapeStatus(item);
  };

  return (
    <div className=" h-[calc(100vh_-77px)] overflow-auto w-full px-6 pt-6 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-32 pb-16 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-chakra leading-[37.50px]">Scrape X account</div>
            <div className="self-stretch text-[#999999] text-sm font-medium font-bricolage leading-tight">Follow multiple X accounts to gain more knowledge</div>
          </div>
          <Image src={"/imgs/image3.png"} alt={""} width={110} height={110}></Image>
        </div>
      </div>
      <div className="h-fit flex-col justify-start items-start gap-8 inline-flex">
        <div className="self-stretch h-fit py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex w-full md:w-[936px]">
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
            <Button className="w-[125px] h-11" onClick={handleAddLink}>
              Add
            </Button>
          </div>
          {scrapeLinks?.length > 0 && (
            <div className="self-stretch h-fit flex-col justify-start items-start flex">
              <div className="w-full md:w-[936px] px-5 py-2.5 border-b border-[#444444] grid grid-cols-4 gap-2.5">
                <div className="col-span-1 text-[#999999] text-sm font-semibold font-bricolage leading-tight">User</div>
                <div className="col-span-1 text-[#999999] text-sm font-semibold font-bricolage leading-tight">Add time</div>
                <div className="col-span-1 text-[#999999] text-sm font-semibold font-bricolage leading-tight">Last update</div>
                <div className="col-span-1 text-[#999999] text-sm font-semibold font-bricolage leading-tight text-right"></div>
              </div>
              {scrapeLinks?.map((link, index) => {
                return (
                  <div key={index} className="w-full md:w-[936px] px-5 py-4 border-b border-[#444444] grid grid-cols-4 gap-2.5 items-center">
                    <div className="col-span-1 flex items-center gap-2.5">
                      <img className="w-[22px] h-[22px] rounded-full border border-[#dcff9f]" src="https://via.placeholder.com/22x22" />
                      <Link href={`https://x.com/${link?.scrapeLink}`} target="_blank" className="text-[#999999] text-sm font-semibold font-bricolage leading-tight">
                        @{link?.scrapeLink}
                      </Link>
                    </div>
                    <div className="col-span-1 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{dayjs(link?.addedAt).format("MMM DD, YYYY")}</div>
                    <div className="col-span-1 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{dayjs(link?.updatedAt).format("MMM DD, YYYY")}</div>
                    <div className="col-span-1 flex justify-end items-center gap-2.5">
                      {link?.status === "in-progress" ? (
                        <Button variant="outline" className="text-[#A4FB0E] min-w-[85px]" onClick={() => scrape(link)}>
                          {link?.taskProgress < 100 ? link?.taskProgress + "%" : "Scrape"}
                        </Button>
                      ) : (
                        <Button variant="outline" className="text-[#A4FB0E] min-w-[85px]" onClick={() => scrape(link)}>
                          {link?.status === "pending" ? <LoadingSpinner /> : "Scrape"}
                        </Button>
                      )}
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
          )}
          {/* <div className="self-stretch px-5 py-1 justify-end items-center gap-16 inline-flex">
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
          </div> */}
        </div>
        <div
          className="self-stretch max-h-[400px] overflow-y-auto break-words whitespace-pre-wrap h-fit py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex w-full md:w-[936px] text-white"
          id="logs"
        ></div>
      </div>
    </div>
  );
};

export default Overview;
