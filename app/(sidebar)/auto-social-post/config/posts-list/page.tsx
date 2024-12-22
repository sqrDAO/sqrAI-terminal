import Image from "next/image";
import Link from "next/link";
import PaginationControls from "../../PaginationControls";
const Index = () => {
  return (
    <div className="w-full px-6 pt-6 flex-col justify-start items-center inline-flex h-[calc(100vh_-77px)] overflow-auto">
      <div className="self-stretch h-[180px] pb-16 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-['Chakra Petch'] leading-[37.50px]">
              Auto generate social post{" "}
            </div>
          </div>
          <Image
            className="w-[110px] h-[110px]"
            width={110}
            height={110}
            alt=""
            src="/imgs/page-3.svg"
          />
        </div>
        <div className="self-stretch border-b border-[#dcff9f] justify-start items-center gap-4 inline-flex">
          <Link
            href={"#"}
            className="px-4 py-3 border-b-2 border-[#a4fb0e] justify-center items-center gap-2.5 flex"
          >
            <div className="text-[#a4fb0e] text-base font-semibold font-['Bricolage Grotesque'] leading-snug">
              Posts list
            </div>
          </Link>
          <Link
            href={"/auto-social-post/config/schedule"}
            className="px-4 py-3 justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-semibold font-['Bricolage Grotesque'] leading-snug">
              Schedule
            </div>
          </Link>
          <Link
            href={"/auto-social-post/config/setting"}
            className="px-4 py-3 justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-semibold font-['Bricolage Grotesque'] leading-snug">
              Setting
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[920px] flex-col justify-start items-start gap-8 inline-flex mx-auto my-10 border-2 border-[#dcff9f]">
        <div className="self-stretch pb-5 bg-black  flex-col justify-center items-start gap-5 flex">
          <div className="self-stretch h-[842px] flex-col justify-start items-start flex">
            <div className="h-[216px] bg-[#111111] border-b border-[#444444] flex-col justify-start items-end flex">
              <div className="self-stretch px-5 py-7 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[116px] pl-2.5 pr-8 justify-start items-start gap-3 flex">
                  <Image
                    className="w-[40px] h-[40px] rounded-full"
                    width={40}
                    height={40}
                    alt=""
                    src="/imgs/page-3.svg"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                      <div className="text-white text-base font-bold font-['Bricolage Grotesque'] leading-snug">
                        {`Long Nguyen (꧁IP꧂)`}
                      </div>
                      <div className="w-[18px] h-[18px] relative  overflow-hidden" />
                      <div className="text-[#999999] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                        {`@EledraNguyen`}
                      </div>
                      <div className="text-[#999999] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                        {"·"}
                      </div>
                    </div>
                    <div className="self-stretch text-white text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                      {`sqrAI focuses on web3 project pain points As builders for many years,
                       we have seen projects with limited resources struggling in maintaining good public code presence,
                        communication and quality. sqrAI fixes these problems. sqrAI is based on @ai16zdao`}
                    </div>
                  </div>
                </div>
                <div className="h-10 px-2.5 justify-center items-center gap-2.5 flex">
                  <div className="grow shrink basis-0 text-right text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                    {`Scheduled at 12:43 PM 23/12/2024`}
                    <br />
                    {`Next 6h`}
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-11 px-2.5 py-1.5 bg-[#a4fb0e] justify-center items-center flex overflow-hidden">
                  <div className="px-1 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-black text-base font-semibold font-['Chakra Petch'] leading-normal">
                      {`Save`}
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-11 px-2.5 py-1.5 border-t border-b border-[#dcff9f] justify-center items-center flex overflow-hidden">
                  <div className="px-1 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-[#a4fb0e] text-base font-semibold font-['Chakra Petch'] leading-normal">
                      {`Edit`}
                    </div>
                  </div>
                </div>
                <div className="w-[148px] h-11 px-2.5 py-1.5 border-l border-t border-b border-[#dcff9f] justify-center items-center flex overflow-hidden">
                  <div className="px-1 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-base font-semibold font-['Chakra Petch'] leading-normal">
                      {`Discard`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[238px] border-b border-[#444444] flex-col justify-start items-end flex">
              <div className="self-stretch px-5 py-7 border-b border-[#444444] justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[138px] pl-2.5 pr-8 justify-start items-start gap-3 flex">
                  <Image
                    className="w-[40px] h-[40px] rounded-full"
                    width={40}
                    height={40}
                    alt=""
                    src="/imgs/page-3.svg"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                      <div className="text-white text-base font-bold font-['Bricolage Grotesque'] leading-snug">
                        {`Long Nguyen (꧁IP꧂)`}
                      </div>
                      <div className="w-[18px] h-[18px] relative  overflow-hidden" />
                      <div className="text-[#999999] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                        {`@EledraNguyen`}
                      </div>
                      <div>
                        <span className="text-[#999999] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                          ·
                        </span>
                        <span className="text-[#a4fb0e] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                          Next 6h
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch text-white text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                      {`@sqrAI focuses on web3 project pain points As builders for
                      many years, we have seen projects with limited resources
                      struggling in maintaining good public code presence,
                      communication and quality. sqrAI fixes these problems.
                      sqrAI is based on @ai16zdao`}
                    </div>
                  </div>
                </div>
                <div className="w-[180px] px-2.5 flex-col justify-center items-center gap-1.5 inline-flex">
                  <div className="self-stretch text-right text-[#a4fb0e] text-base font-semibold font-['Bricolage Grotesque'] leading-snug">
                    Saved
                  </div>
                  <div className="self-stretch text-right text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                    Scheduled at
                    <br />
                    12:43 PM 23/12/2024
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-11 px-2.5 py-1.5 bg-[#a4fb0e] justify-center items-center flex overflow-hidden">
                  <div className="px-1 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-black text-base font-semibold font-['Chakra Petch'] leading-normal">
                      Edit
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 h-11 px-2.5 py-1.5 border-t border-b border-[#dcff9f] justify-center items-center flex overflow-hidden">
                  <div className="px-1 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-base font-semibold font-['Chakra Petch'] leading-normal">
                      Unsaved
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[194px] border-b border-[#444444] flex-col justify-start items-end flex">
              <div className="self-stretch px-5 py-7 border-b border-[#444444] justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[138px] pl-2.5 pr-8 justify-start items-start gap-3 flex">
                  <Image
                    className="w-[40px] h-[40px] rounded-full"
                    width={40}
                    height={40}
                    alt=""
                    src="/imgs/page-3.svg"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                      <div className="text-white text-base font-bold font-['Bricolage Grotesque'] leading-snug">
                        {`Long Nguyen (꧁IP꧂)`}
                      </div>
                      <div className="w-[18px] h-[18px] relative  overflow-hidden" />
                      <div className="text-[#999999] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                        @EledraNguyen
                      </div>
                      <div>
                        <span className="text-[#999999] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                          ·
                        </span>
                        <span className="text-[#a4fb0e] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                          Next 8h
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch text-white text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                      sqrAI focuses on web3 project pain points   As builders
                      for many years, we have seen projects with limited
                      resources struggling in maintaining good public code
                      presence, communication and quality. sqrAI fixes these
                      problems. sqrAI is based on @ai16zdao
                    </div>
                  </div>
                </div>
                <div className="w-[180px] px-2.5 flex-col justify-center items-center gap-1.5 inline-flex">
                  <div className="self-stretch text-right text-[#a4fb0e] text-base font-semibold font-['Bricolage Grotesque'] leading-snug">
                    Saved
                  </div>
                  <div className="self-stretch text-right text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                    Scheduled at
                    <br />
                    12:43 PM 23/12/2024
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[194px] border-b border-[#444444] flex-col justify-start items-end flex">
              <div className="self-stretch px-5 py-7 border-b border-[#444444] justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-[138px] pl-2.5 pr-8 justify-start items-start gap-3 flex">
                  <Image
                    className="w-[40px] h-[40px] rounded-full"
                    width={40}
                    height={40}
                    alt=""
                    src="/imgs/page-3.svg"
                  />
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                    <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
                      <div className="text-white text-base font-bold font-['Bricolage Grotesque'] leading-snug">
                        {`Long Nguyen (꧁IP꧂)`}
                      </div>
                      <div className="w-[18px] h-[18px] relative  overflow-hidden" />
                      <div className="text-[#999999] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                        @EledraNguyen
                      </div>
                      <div>
                        <span className="text-[#999999] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                          ·
                        </span>
                        <span className="text-[#999999] text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                          Next 1d
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch text-white text-base font-normal font-['Bricolage Grotesque'] leading-snug">
                      sqrAI focuses on web3 project pain points As builders for
                      many years, we have seen projects with limited resources
                      struggling in maintaining good public code presence,
                      communication and quality. sqrAI fixes these problems.
                      sqrAI is based on @ai16zdao
                    </div>
                  </div>
                </div>
                <div className="w-[180px] px-2.5 flex-col justify-center items-center gap-1.5 inline-flex">
                  <div className="self-stretch text-right text-[#999999] text-sm font-semibold font-['Bricolage Grotesque'] leading-tight">
                    Scheduled at
                    <br />
                    12:43 PM 23/12/2024
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PaginationControls />
        </div>
      </div>
    </div>
  );
};

export default Index;
