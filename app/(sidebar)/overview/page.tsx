"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Overview = () => {
  const searchParams = useSearchParams();
  const agentName = searchParams.get("agent");
  const agents = JSON.parse(localStorage.getItem("agents") || "[]");
  const selectedAgent = JSON.parse(localStorage.getItem("selectedAgent") || "{}");
  const agent = agents?.find((a: { name: string }) => a?.name === agentName || a?.name === selectedAgent?.name);

  useEffect(() => {
    if (selectedAgent?.name !== agentName && agents?.length > 0 && agentName) {
      const item = agents?.find((a: { name: string }) => a?.name === agentName);
      localStorage.setItem("selectedAgent", JSON.stringify(item));
    }
  }, [agents, agentName]);

  return (
    <div className="h-[917px] w-full mx-6 mt-6 flex-col justify-start items-center inline-flex relative">
      <div className="self-stretch h-[280px] p-6 border border-[#dcff9f] flex-col justify-between items-start flex absolute top-0 left-0 right-0 z-10 w-full mx-auto">
        <div className="text-[#a4fb0e] text-xl font-medium font-bricolage leading-[27px] flex">
          {">"}
          <div className="animate-blink">_</div>
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <Image className="w-[143px] h-[142px]" width={143} height={142} alt="" src="/imgs/page-1.svg" />
          <Image className="w-[142px] h-[142px]" width={143} height={142} alt="" src="/imgs/page-2.svg" />
        </div>
      </div>
      <div className="mx-auto self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex w-[936px] z-20 mt-6">
        <div className="self-stretch h-[38px] flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
            <div className="grow shrink basis-0 text-white text-3xl font-semibold font-chakra leading-[37.50px]">{agent?.name}</div>
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
                <div className="text-center text-[#999999] text-sm font-normal font-bricolage leading-tight">Enable the agent to explore and understand your code by sharing your repository.</div>
              </div>
              <Link href={"/github"}>
                <Button>Get started</Button>
              </Link>
            </div>
            <div className="w-[101px] h-[101px] relative  overflow-hidden" />
          </div>
          <div className="self-stretch justify-start items-start gap-8 inline-flex">
            <div className="grow shrink basis-0 p-5 bg-black border-2 border-[#dcff9f] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch h-[135px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch h-[73px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">Discover and Learn from X Accounts!</div>
                  <div className="self-stretch text-[#999999] text-sm font-normal font-bricolage leading-tight">Scrape and follow multiple X accounts to help the AI gain deeper insights.</div>
                </div>
                <Link href={"/scrape"}>
                  <Button>Try it</Button>
                </Link>
              </div>
            </div>
            <div className="grow shrink basis-0 p-5 bg-black border-2 border-[#dcff9f] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch h-[135px] flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch h-[73px] flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">Expand Knowledge with Your Documents!</div>
                  <div className="self-stretch text-[#999999] text-sm font-normal font-bricolage leading-tight">Provide documents to help the AI gain deeper insights and understanding.</div>
                </div>
                <Link href={"/other"}>
                  <Button>Upload documents</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
