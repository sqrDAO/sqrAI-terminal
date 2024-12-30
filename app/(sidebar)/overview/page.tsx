"use client";
import { useSQRAI } from "@/app/provider/sqrai.provider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Overview = () => {
  const searchParams = useSearchParams();
  const agentName = searchParams.get("agent");

  const [agents, setAgents] = useState<{ name: string }[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<{ name: string } | null>(null);
  const [agent, setAgent] = useState<{ name: string } | null>(null);

  const { setAgent: setAgentContext } = useSQRAI();

  useEffect(() => {
    const storedAgents = JSON.parse(localStorage.getItem("agents") || "[]");
    const storedSelectedAgent = JSON.parse(localStorage.getItem("selectedAgent") || "{}");
    setAgents(storedAgents);
    setSelectedAgent(storedSelectedAgent);
    const foundAgent = storedAgents.find((a: { name: string }) => a?.name === agentName) || storedSelectedAgent?.name;
    setAgent(foundAgent);
    setAgentContext(foundAgent);
  }, [agentName]);

  useEffect(() => {
    if (selectedAgent?.name !== agentName && agents.length > 0 && agentName) {
      const item = agents.find((a: { name: string }) => a?.name === agentName);
      localStorage.setItem("selectedAgent", JSON.stringify(item));
      setSelectedAgent(item);
    }
  }, [agents, agentName, selectedAgent]);

  return (
    <div className="w-full mx-6 pt-6 flex-col justify-start items-center inline-flex relative h-[calc(100vh_-_77px)] overflow-auto">
      <div className="self-stretch hidden md:flex h-[280px] p-6 border border-[#dcff9f] flex-col justify-between items-start absolute top-[24px] left-0 right-0 z-10 w-full mx-auto">
        <div className="text-[#a4fb0e] text-xl font-medium font-bricolage leading-[27px] flex">
          {">"}
          <div className="animate-blink">_</div>
        </div>
        <div className="self-stretch justify-between items-center inline-flex">
          <Image className="w-[143px] h-[142px]" width={143} height={142} alt="" src="/imgs/page-1.svg" />
          <Image className="w-[142px] h-[142px]" width={143} height={142} alt="" src="/imgs/page-2.svg" />
        </div>
      </div>
      <div className="mx-auto self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex w-full md:w-[736px] z-20 mt-6 bg-black">
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
              <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                <div className="text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">Collaborate with your project’s GitHub repo!</div>
                <div className="text-[#999999] text-sm font-normal font-bricolage leading-tight">Enable the agent to explore and understand your code by sharing your repository.</div>
              </div>
              <Link href={"/github"}>
                <Button>Get started</Button>
              </Link>
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-8 inline-flex flex-wrap md:flex-nowrap">
            <div className="grow shrink basis-0 p-5 bg-black border-2 border-[#dcff9f] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">Discover and Learn from X Accounts!</div>
                  <div className="self-stretch text-[#999999] text-sm font-normal font-bricolage leading-tight">Scrape and follow multiple X accounts to help the AI gain deeper insights.</div>
                </div>
                <Link href={"/scrape"} className="mt-5">
                  <Button>Try it</Button>
                </Link>
              </div>
            </div>
            <div className="grow shrink basis-0 p-5 bg-black border-2 border-[#dcff9f] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-5 flex">
                <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch text-[#a4fb0e] text-xl font-semibold font-bricolage leading-[27px]">Expand Knowledge with Your Documents!</div>
                  <div className="self-stretch text-[#999999] text-sm font-normal font-bricolage leading-tight">Provide documents to help the AI gain deeper insights and understanding.</div>
                </div>
                <Link href={"/other"} className="mt-5">
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
