"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Sidebar = () => {
  const route = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const agentKey = searchParams.get("agent");

  const handleSelectChange = (value: string) => {
    route.push(`/overview?agent=${value}`);
  };

  return (
    <div className="w-80 h-[917px] pt-3 border-r border-[#dcff9f] flex-col justify-start items-start gap-3 inline-flex">
      <div className="self-stretch px-6 py-3 justify-center items-center gap-2.5 inline-flex">
        <Image src={"/icons/agent-menu-icon.svg"} alt={""} width={22} height={22}></Image>
        <Select value={agentKey || ""} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a agent" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ajax">
              <div className="flex gap-3">Ajax</div>
            </SelectItem>
            <SelectItem value="beta">
              <div className="flex gap-3">Beta</div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="h-px border-[#333333] justify-center items-center inline-flex">
        <div className="w-80 h-px border border-[#333333]" />
      </div>
      <div className="self-stretch h-[46px] px-3 flex-col justify-start items-start flex">
        <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1 flex">
          <Link
            href={"/overview"}
            className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/overview" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
          >
            <Image src={"/icons/overview-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug`}>Overview</div>
          </Link>
        </div>
      </div>
      <div className="h-px border-[#333333] justify-center items-center inline-flex">
        <div className="w-80 h-px border border-[#333333]" />
      </div>
      <div className="self-stretch h-[194px] px-3 flex-col justify-start items-start flex">
        <div className="self-stretch p-3.5 justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-[#999999] text-sm font-medium font-bricolage leading-tight">Generative AI</div>
        </div>
        <div className="self-stretch h-[146px] flex-col justify-start items-start gap-1 flex">
          <Link
            href={"/tech-learn"}
            className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/tech-learn" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
          >
            <Image src={"/icons/tech-learn-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug`}>Technical learn</div>
          </Link>
          <Link
            href={"/scrape"}
            className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/scrape" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
          >
            <Image src={"/icons/scrape-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug`}>Scrape social accounts</div>
          </Link>
          <Link href={"/other"} className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/other" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}>
            <Image src={"/icons/other-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug`}>Other data</div>
          </Link>
        </div>
      </div>
      <div className="h-px border-[#333333] justify-center items-center inline-flex">
        <div className="w-80 h-px border border-[#333333]" />
      </div>
      <div className="self-stretch h-[94px] px-3 flex-col justify-start items-start flex">
        <div className="self-stretch p-3.5 justify-center items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-[#999999] text-sm font-medium font-bricolage leading-tight">Export</div>
        </div>
        <div className="self-stretch h-[46px] flex-col justify-start items-start gap-1 flex">
          <Link
            href={"/github"}
            className={`self-stretch px-3.5 py-3 justify-center items-center gap-3 inline-flex ${pathName === "/github" ? "bg-[#A4FB0E] text-black" : "bg-transparent text-white"}`}
          >
            <Image src={"/icons/github-menu.svg"} alt={""} width={22} height={22}></Image>
            <div className={`grow shrink basis-0 text-base font-medium font-bricolage leading-snug `}>Github</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
