"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const route = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [agentKey, setAgentKey] = useState("");

  // const agentList = JSON.parse(localStorage.getItem("agents") || "[]");
  const [agentList, setAgentList] = useState([]);

  useEffect(() => {
    setAgentKey(searchParams.get("agent") || JSON.parse(localStorage.getItem("selectedAgent") || "{}")?.name);
    setAgentList(JSON.parse(localStorage.getItem("agents") || "[]"));
  }, [searchParams]);

  const handleSelectChange = (value: string) => {
    const agents = JSON.parse(localStorage.getItem("agents") || "[]");
    const selectedAgent = agents?.find((agent: any) => agent?.name === value);
    localStorage.setItem("selectedAgent", JSON.stringify(selectedAgent));

    route.push(`/overview?agent=${value}`);
  };
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <>
      <div className="md:hidden absolute top-6 left-[150px] z-20 cursor-pointer">
        <Image
          onClick={() => {
            setIsSidebarVisible(!isSidebarVisible);
          }}
          src={"/icons/menu-dot-icon.svg"}
          alt={""}
          width={22}
          height={22}
        ></Image>
      </div>
      <div className={`md:block md:relative ${isSidebarVisible ? "block transition-all absolute top-[74px] left-0 z-50" : "hidden"}`}>
        <div className="w-80 h-[calc(100vh_-77px)] pt-3 border-r border-[#dcff9f] flex-col justify-start items-start gap-3 inline-flex bg-black relative z-[100] overflow-hidden">
          <div className="self-stretch px-6 py-3 justify-center items-center gap-2.5 inline-flex">
            <Image src={"/icons/agent-menu-icon.svg"} alt={""} width={22} height={22}></Image>
            {agentList?.length > 0 && (
              <Select value={agentKey || ""} onValueChange={handleSelectChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a agent" />
                </SelectTrigger>
                <SelectContent>
                  <div className="flex flex-col">
                    <Link href={"/agents"} className="font-bricolage text-base px-[14px] py-3">
                      See all agents
                    </Link>
                    <Link href={"/create-agent"} className="font-bricolage text-base px-[14px] py-3">
                      Create a agent
                    </Link>
                  </div>
                  <div className="w-full border-t border-t-[#333333]  my-[2px]"></div>
                  <div className="font-bricolage text-sm text-[#999999] px-[14px] py-3">Your agents</div>
                  {agentList?.map((item, index) => {
                    return (
                      <SelectItem className="font-bricolage text-base px-[14px] py-3" key={index} value={item?.name}>
                        <div className="flex gap-3">{item?.name}</div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            )}
          </div>
          <div className="h-px border-[#333333] justify-center items-center inline-flex w-full">
            <div className="w-80 h-px border border-[#333333]" />
          </div>
          <div className="self-stretch h-[46px] px-3 flex-col justify-start items-start flex">
            <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1 flex">
              <Link
                href={"/overview"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/overview" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <Image src={"/icons/overview-menu.svg"} alt={""} width={22} height={22}></Image>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug`}>Overview</div>
              </Link>
            </div>
          </div>
          <div className="h-px border-[#333333] justify-center items-center inline-flex w-full">
            <div className="w-80 h-px border border-[#333333]" />
          </div>
          <div className="self-stretch px-3 flex-col justify-start items-start flex">
            <div className="self-stretch p-3.5 justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-[#999999] text-sm font-medium font-bricolage leading-tight">Generative AI</div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-1 flex pb-2">
              <Link
                href={"/tech-learn"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/tech-learn" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <Image src={"/icons/tech-learn-menu.svg"} alt={""} width={22} height={22}></Image>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug`}>
                  Technical learn <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span>
                </div>
              </Link>
              <Link
                href={"/scrape"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/scrape" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <Image src={"/icons/scrape-menu.svg"} alt={""} width={22} height={22}></Image>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug`}>Scrape social accounts</div>
              </Link>
              <Link
                href={"/other"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/other" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <Image src={"/icons/other-menu.svg"} alt={""} width={22} height={22}></Image>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug`}>
                  Other data <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="h-px border-[#333333] justify-center items-center inline-flex w-full">
            <div className="w-80 h-px border border-[#333333]" />
          </div>
          <div className="self-stretch h-[94px] px-3 flex-col justify-start items-start flex">
            <div className="self-stretch p-3.5 justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-[#999999] text-sm font-medium font-bricolage leading-tight">
                Export <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span>
              </div>
            </div>
            <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1 flex">
              <Link
                href={"/github"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/github" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <Image src={"/icons/github-menu.svg"} alt={""} width={22} height={22}></Image>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug `}>
                  Github <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span>
                </div>
              </Link>
              <Link
                href={"/auto-social-post"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/auto-social-post" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.58333 1.8335H17.4167H19.25V3.66683V18.3335V20.1668H17.4167H4.58333H2.75V18.3335V3.66683V1.8335H4.58333ZM17.4167 18.3335V3.66683H4.58333V18.3335H17.4167ZM6.41667 5.50016H15.5833V7.3335H6.41667V5.50016ZM15.5833 9.16683H6.41667V11.0002H15.5833V9.16683ZM6.41667 12.8335H12.8333V14.6668H6.41667V12.8335Z"
                    fill="white"
                  />
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug `}>
                  Auto social post <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span>
                </div>
              </Link>
              <Link
                href={"/chat"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/chat" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.66683 1.8335H18.3335H20.1668V3.66683V14.6668V16.5002H18.3335H5.50039V18.3335H3.66706V16.5002H5.50017V14.6668H18.3335V3.66683H3.66683V20.1668H1.8335V3.66683H1.8335V1.8335H1.8335H3.66683ZM8.25017 8.25016H6.41683V10.0835H8.25017V8.25016ZM10.0835 8.25016H11.9168V10.0835H10.0835V8.25016ZM15.5835 8.25016H13.7502V10.0835H15.5835V8.25016Z"
                    fill="white"
                  />
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug `}>Chat bot</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
