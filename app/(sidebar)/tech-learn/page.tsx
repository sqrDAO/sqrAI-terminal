"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

const Overview = () => {
  const [githubLink, setGithubLink] = useState("");

  return (
    <div className="h-[917px] w-full px-6 pt-6 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-32 pb-16 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-['Chakra Petch'] leading-[37.50px]">Technical knowledge</div>
            <div className="self-stretch text-[#999999] text-sm font-medium font-['Bricolage Grotesque'] leading-tight">Drop your project’s Github repo so the agent can understand how it works</div>
          </div>
          <img className="w-[110px] h-[110px]" src="https://via.placeholder.com/110x110" />
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex w-[936px] mx-auto">
        <div className="self-stretch h-[246px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-[246px] py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex">
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
              <Button className="w-[125px] h-11">Add</Button>
            </div>
            <div className="self-stretch h-[92px] flex-col justify-start items-start flex">
              <div className="w-[936px] px-5 py-2.5 border-b border-[#444444] justify-center items-center inline-flex">
                <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Name</div>
                </div>
                <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Link</div>
                </div>
                <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Add time</div>
                </div>
                <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 opacity-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">action</div>
                </div>
              </div>
              <div className="w-[936px] px-5 py-4 justify-center items-center inline-flex">
                <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">json-data</div>
                </div>
                <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">https://github.com/vietnd69/json-data.git</div>
                </div>
                <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">Jun 28, 2021</div>
                </div>
                <div className="h-5 px-2.5 justify-end items-center gap-2.5 flex">
                  <div className="w-5 h-5 relative origin-top-left rotate-90">
                    <div className="w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start flex overflow-hidden" />
                    <div className="w-5 h-5 left-0 top-0 absolute bg-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch px-5 py-1 justify-end items-center gap-16 inline-flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="text-[#999999] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">Rows per page:</div>
                <div className="justify-start items-center gap-2.5 flex">
                  <div className="text-white text-sm font-normal font-['Bricolage Grotesque'] leading-tight">50</div>
                  <div className="w-4 h-4 relative">
                    <div className="w-4 h-4 left-0 top-0 absolute flex-col justify-start items-start flex overflow-hidden">
                      <img className="w-[9.33px] h-[5.33px]" src="https://via.placeholder.com/9x5" />
                    </div>
                    <div className="w-4 h-4 left-0 top-0 absolute bg-white" />
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-8 flex">
                <div className="w-[22px] h-[22px] relative origin-top-left rotate-180">
                  <div className="w-[22px] h-[22px] left-0 top-0 absolute flex-col justify-start items-start flex overflow-hidden">
                    <img className="w-[12.83px] h-[7.33px] origin-top-left rotate-90" src="https://via.placeholder.com/13x7" />
                  </div>
                  <div className="w-[22px] h-[22px] left-0 top-0 absolute bg-white" />
                </div>
                <div className="w-[22px] h-[22px] relative">
                  <div className="w-[22px] h-[22px] left-0 top-0 absolute flex-col justify-start items-start flex overflow-hidden">
                    <img className="w-[12.83px] h-[7.33px] origin-top-left rotate-90" src="https://via.placeholder.com/13x7" />
                  </div>
                  <div className="w-[22px] h-[22px] left-0 top-0 absolute bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
