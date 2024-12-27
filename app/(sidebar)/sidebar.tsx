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
              <div className="grow shrink basis-0 text-[#999999] text-sm font-medium font-bricolage leading-tight">Build your Knowledge Base</div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-1 flex pb-2">
              <Link
                href={"/tech-learn"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/tech-learn" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M7.33301 4.58331H9.16634V6.41665H7.33301V4.58331Z" fill="#666666" />
                  <path d="M5.49968 6.41665H7.33301V8.24998H5.49968V6.41665Z" fill="#666666" />
                  <path d="M3.66634 8.24998H5.49968V10.0833H3.66634V8.24998Z" fill="#666666" />
                  <path d="M1.83301 10.0833H3.66634V11.9166H1.83301V10.0833Z" fill="#666666" />
                  <path d="M3.66634 11.9166H5.49968V13.75H3.66634V11.9166Z" fill="#666666" />
                  <path d="M5.49968 13.75H7.33301V15.5833H5.49968V13.75Z" fill="#666666" />
                  <path d="M7.33301 15.5833H9.16634V17.4166H7.33301V15.5833Z" fill="#666666" />
                  <path d="M14.6663 4.58331H12.833V6.41665H14.6663V4.58331Z" fill="#666666" />
                  <path d="M16.4997 6.41665H14.6663V8.24998H16.4997V6.41665Z" fill="#666666" />
                  <path d="M18.333 8.24998H16.4997V10.0833H18.333V8.24998Z" fill="#666666" />
                  <path d="M20.1663 10.0833H18.333V11.9166H20.1663V10.0833Z" fill="#666666" />
                  <path d="M18.333 11.9166H16.4997V13.75H18.333V11.9166Z" fill="#666666" />
                  <path d="M16.4997 13.75H14.6663V15.5833H16.4997V13.75Z" fill="#666666" />
                  <path d="M14.6663 15.5833H12.833V17.4166H14.6663V15.5833Z" fill="#666666" />
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug flex w-full justify-between items-baseline`}>
                  Technical learn
                  {/* <div className="text-xs font-bricolage text-[#A4FB0E]">Coming soon</div> */}
                </div>
              </Link>
              <Link
                href={"/scrape"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/scrape" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M12.5697 9.73662L18.7122 2.75H17.2567L11.9231 8.81639L7.66326 2.75H2.75L9.19176 11.9235L2.75 19.25H4.20566L9.838 12.8437L14.3367 19.25H19.25L12.5694 9.73662H12.5697ZM10.576 12.0043L9.92333 11.0908L4.73015 3.82224H6.96596L11.1569 9.6882L11.8096 10.6017L17.2573 18.2265H15.0215L10.576 12.0046V12.0043Z"
                    fill="white"
                  />
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug`}>Scrape X accounts</div>
              </Link>
              <div className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex bg-transparent text-[#666666]`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M18.6353 4.17193C17.1909 3.49867 15.6634 3.0205 14.093 2.75C13.8856 3.14498 13.698 3.53996 13.5203 3.94482C11.8515 3.69795 10.1629 3.69795 8.48424 3.94482C8.3065 3.53996 8.11889 3.13511 7.90165 2.75987C6.32172 3.02649 4.80105 3.50046 3.35937 4.17193C0.791689 7.86873 -0.364544 12.364 0.100775 16.8409C1.77691 18.0986 3.65767 19.0574 5.66013 19.6749C6.11436 19.0627 6.50934 18.411 6.84507 17.7198C6.20323 17.4729 5.57126 17.1767 4.96891 16.8113C5.13678 16.6928 5.2849 16.5743 5.43302 16.446C8.9681 18.1246 13.0364 18.1246 16.5715 16.446L17.0257 16.8113C16.4332 17.1668 15.7914 17.4729 15.1495 17.7198C15.4952 18.411 15.8901 19.0528 16.3345 19.6749C18.339 19.0528 20.2251 18.095 21.9037 16.8409C22.3678 12.0321 21.1335 7.865 18.6451 4.17193H18.6353ZM7.34867 14.2933C6.26248 14.2933 5.37377 13.2861 5.37377 12.0518C5.37377 10.8274 6.24273 9.82016 7.34867 9.82016C8.45462 9.82016 9.34333 10.8274 9.32358 12.0518C9.32358 13.2861 8.44475 14.2933 7.34867 14.2933ZM14.6558 14.2933C13.5696 14.2933 12.6809 13.2861 12.6809 12.0518C12.6809 10.8274 13.5499 9.82016 14.6558 9.82016C15.7618 9.82016 16.6505 10.8274 16.6307 12.0518C16.6307 13.2861 15.7618 14.2933 14.6558 14.2933Z"
                    fill="#666666"
                  />
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug flex w-full justify-between items-baseline`}>
                  Follow Discord
                  <div className="text-xs font-bricolage text-[#A4FB0E]">Coming soon</div>
                </div>
              </div>
              <div className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex bg-transparent text-[#666666]`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <g clip-path="url(#clip0_337_12562)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.3942 8.12068C10.3243 8.5657 8.18596 9.48676 4.97924 10.8839C4.45851 11.091 4.18574 11.2935 4.1609 11.4916C4.11894 11.8264 4.53815 11.9582 5.10902 12.1377C5.18667 12.1621 5.26713 12.1874 5.34961 12.2142C5.91125 12.3968 6.66676 12.6104 7.05951 12.6189C7.41578 12.6266 7.81342 12.4797 8.25242 12.1782C11.2486 10.1558 12.7952 9.13349 12.8923 9.11145C12.9608 9.09591 13.0557 9.07636 13.12 9.13352C13.1844 9.19069 13.178 9.29896 13.1712 9.328C13.1297 9.50504 11.4841 11.0349 10.6325 11.8266C10.3671 12.0734 10.1787 12.2485 10.1402 12.2885C10.054 12.3781 9.96612 12.4628 9.88165 12.5442C9.35987 13.0472 8.96859 13.4244 9.90331 14.0404C10.3525 14.3364 10.7119 14.5812 11.0705 14.8254C11.4622 15.0921 11.8528 15.3581 12.3581 15.6894C12.4869 15.7738 12.6099 15.8614 12.7296 15.9468C13.1854 16.2717 13.5949 16.5636 14.1007 16.5171C14.3946 16.49 14.6983 16.2136 14.8525 15.3893C15.2169 13.4412 15.9332 9.22025 16.0987 7.48089C16.1132 7.3285 16.095 7.13347 16.0803 7.04786C16.0657 6.96225 16.035 6.84027 15.9238 6.74997C15.792 6.64303 15.5885 6.62047 15.4975 6.62208C15.0838 6.62936 14.449 6.85008 11.3942 8.12068Z"
                      fill="#666666"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_337_12562">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug flex w-full justify-between items-baseline`}>
                  Follow Telegram
                  <div className="text-xs font-bricolage text-[#A4FB0E]">Coming soon</div>
                </div>
              </div>
              <Link
                href={"/other"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/other" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.3332 3.66669H3.6665V5.50002H18.3332V3.66669ZM18.3332 7.33335H3.6665V9.16669H18.3332V7.33335ZM10.9998 11H3.6665V12.8334H10.9998V11ZM18.3332 11H12.8332V16.5H18.3332V18.3334H20.1665V16.5H18.3332V11ZM14.6665 14.6667V12.8334H16.4998V14.6667H14.6665ZM10.9998 14.6667H3.6665V16.5H10.9998V14.6667Z"
                    fill="white"
                  />
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug flex w-full justify-between items-baseline`}>
                  Other data
                  {/* <div className="text-xs font-bricolage text-[#A4FB0E]">Coming soon</div> */}
                </div>
              </Link>
            </div>
          </div>
          <div className="h-px border-[#333333] justify-center items-center inline-flex w-full">
            <div className="w-80 h-px border border-[#333333]" />
          </div>
          <div className="self-stretch h-[94px] px-3 flex-col justify-start items-start flex">
            <div className="self-stretch p-3.5 justify-center items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 text-[#999999] text-sm font-medium font-bricolage leading-tight">Agent Functionalities</div>
            </div>
            <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1 flex">
              <Link
                href={"/github"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/github" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <g clip-path="url(#clip0_337_12584)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 0C4.9247 0 0 4.9324 0 11.0187C0 15.8862 3.1515 20.0167 7.5229 21.4731C8.0729 21.5743 8.2731 21.2344 8.2731 20.9418C8.2731 20.6811 8.2643 19.987 8.2588 19.0685C5.1986 19.734 4.5529 17.5912 4.5529 17.5912C4.0535 16.3174 3.3319 15.9786 3.3319 15.9786C2.3331 15.2966 3.4078 15.3098 3.4078 15.3098C4.5111 15.3868 5.0919 16.445 5.0919 16.445C6.0731 18.128 7.667 17.6418 8.2929 17.3602C8.3941 16.6485 8.6779 16.1634 8.9925 15.8884C6.5505 15.6101 3.982 14.6641 3.982 10.4423C3.982 9.24 4.411 8.2555 5.1139 7.4855C5.0006 7.2072 4.6233 6.0863 5.2217 4.5705C5.2217 4.5705 6.1457 4.2735 8.2467 5.6991C9.14404 5.45437 10.0699 5.32971 11 5.3284C11.935 5.3328 12.8755 5.4549 13.7544 5.6991C15.8543 4.2735 16.7761 4.5694 16.7761 4.5694C17.3767 6.0863 16.9983 7.2072 16.8861 7.4855C17.5901 8.2555 18.0169 9.24 18.0169 10.4423C18.0169 14.6751 15.444 15.6068 12.9943 15.8796C13.3892 16.2195 13.7401 16.8916 13.7401 17.9201C13.7401 19.3919 13.7269 20.581 13.7269 20.9418C13.7269 21.2366 13.9249 21.5798 14.4837 21.472C16.6741 20.7373 18.5783 19.3328 19.927 17.4571C21.2758 15.5813 22.0009 13.329 22 11.0187C22 4.9324 17.0742 0 11 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_337_12584">
                      <rect width="22" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug flex w-full justify-between items-baseline`}>
                  Push to Github
                  {/* <div className="text-xs font-bricolage text-[#A4FB0E]">Coming soon</div> */}
                </div>
              </Link>
              <Link
                href={"/auto-social-post"}
                className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/auto-social-post" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
                onClick={() => setIsSidebarVisible(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M12.5697 9.73662L18.7122 2.75H17.2567L11.9231 8.81639L7.66326 2.75H2.75L9.19176 11.9235L2.75 19.25H4.20566L9.838 12.8437L14.3367 19.25H19.25L12.5694 9.73662H12.5697ZM10.576 12.0043L9.92333 11.0908L4.73015 3.82224H6.96596L11.1569 9.6882L11.8096 10.6017L17.2573 18.2265H15.0215L10.576 12.0046V12.0043Z"
                    fill="white"
                  />
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug flex w-full justify-between items-baseline`}>
                  Auto social post
                  {/* <div className="text-xs font-bricolage text-[#A4FB0E]">Coming soon</div> */}
                </div>
              </Link>
              <div className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex bg-transparent text-[#666666]`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M18.6353 4.17193C17.1909 3.49867 15.6634 3.0205 14.093 2.75C13.8856 3.14498 13.698 3.53996 13.5203 3.94482C11.8515 3.69795 10.1629 3.69795 8.48424 3.94482C8.3065 3.53996 8.11889 3.13511 7.90165 2.75987C6.32172 3.02649 4.80105 3.50046 3.35937 4.17193C0.791689 7.86873 -0.364544 12.364 0.100775 16.8409C1.77691 18.0986 3.65767 19.0574 5.66013 19.6749C6.11436 19.0627 6.50934 18.411 6.84507 17.7198C6.20323 17.4729 5.57126 17.1767 4.96891 16.8113C5.13678 16.6928 5.2849 16.5743 5.43302 16.446C8.9681 18.1246 13.0364 18.1246 16.5715 16.446L17.0257 16.8113C16.4332 17.1668 15.7914 17.4729 15.1495 17.7198C15.4952 18.411 15.8901 19.0528 16.3345 19.6749C18.339 19.0528 20.2251 18.095 21.9037 16.8409C22.3678 12.0321 21.1335 7.865 18.6451 4.17193H18.6353ZM7.34867 14.2933C6.26248 14.2933 5.37377 13.2861 5.37377 12.0518C5.37377 10.8274 6.24273 9.82016 7.34867 9.82016C8.45462 9.82016 9.34333 10.8274 9.32358 12.0518C9.32358 13.2861 8.44475 14.2933 7.34867 14.2933ZM14.6558 14.2933C13.5696 14.2933 12.6809 13.2861 12.6809 12.0518C12.6809 10.8274 13.5499 9.82016 14.6558 9.82016C15.7618 9.82016 16.6505 10.8274 16.6307 12.0518C16.6307 13.2861 15.7618 14.2933 14.6558 14.2933Z"
                    fill="#666666"
                  />
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug flex w-full justify-between items-baseline`}>
                  Discord bot
                  <div className="text-xs font-bricolage text-[#A4FB0E]">Coming soon</div>
                </div>
              </div>
              <div className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex bg-transparent text-[#666666]`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.3332 1.83334H16.4998V5.50001H5.49984V7.33334H3.6665V14.6667H5.49984V16.5H7.33317V20.1667H9.1665H12.8332H14.6665V18.3333H18.3332V16.5H14.6665V14.6667H18.3332V12.8333H14.6665V11H12.8332H9.1665H7.33317V14.6667H5.49984V7.33334H16.4998V5.50001H18.3332V1.83334ZM12.8332 18.3333H9.1665V12.8333H12.8332V18.3333Z"
                    fill="#666666"
                  />
                </svg>
                <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug flex w-full justify-between items-baseline`}>
                  Integration
                  <div className="text-xs font-bricolage text-[#A4FB0E]">Coming soon</div>
                </div>
              </div>
              {/* <Link
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
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
