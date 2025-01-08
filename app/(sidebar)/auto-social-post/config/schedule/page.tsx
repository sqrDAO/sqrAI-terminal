"use client";
import Image from "next/image";
import Link from "next/link";
import PaginationControls from "../../PaginationControls";
import { useSchedules } from "@/hooks/useSchedules";
import { useWallet } from "@solana/wallet-adapter-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import dayjs from "dayjs";
import cronstrue from "cronstrue";

const ScheduleList = () => {
  const { publicKey } = useWallet();
  const { data: schedules } = useSchedules(publicKey?.toString());

  const cronToWeekday = (cron) => {
    if (!cron) {
      return "";
    }

    const res = cronstrue.toString(cron);
    return res;
  };

  return (
    <div className="w-full px-6 pt-6 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-[180px] pb-16 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-chakra leading-[37.50px]">
              Auto generate social post
              {/* <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span> */}
            </div>
          </div>
          <Image className="w-[110px] h-[110px]" width={110} height={110} alt="" src="/imgs/page-3.svg" />
        </div>
        <div className="self-stretch border-b border-[#dcff9f] justify-start items-center gap-4 inline-flex">
          <Link href={"/auto-social-post/config/posts-list"} className="px-4 py-3 justify-center items-center gap-2.5 flex">
            <div className="text-white text-base font-semibold font-bricolage leading-snug">Posts list</div>
          </Link>
          <Link href={"#"} className="px-4 py-3 border-b-2 border-[#a4fb0e] justify-center items-center gap-2.5 flex">
            <div className="text-[#a4fb0e] text-base font-semibold font-bricolage leading-snug">Schedule</div>
          </Link>
          <Link href={"/auto-social-post/config/setting"} className="px-4 py-3 justify-center items-center gap-2.5 flex">
            <div className="text-white text-base font-semibold font-bricolage leading-snug">Setting</div>
          </Link>
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex mx-auto mt-10">
        <div className="self-stretch h-[462px] flex-col items-start gap-2 flex border-2 border-[#dcff9f] py-5">
          <div className="px-5 pb-5 text-base text-[#C5FF53] font-semibold font-bricolage">Communicate with the bot to make schedule</div>
          <div className="self-stretch h-full bg-black flex-col items-start gap-5 flex overflow-y-auto">
            {/* <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 p-4 border border-[#dcff9f] flex-col justify-center items-center gap-4 inline-flex">
                <div className="self-stretch text-center text-[#c5ff53] text-sm font-medium font-bricolage leading-tight">
                  + Add a new time to generate content
                </div>
              </div>
            </div> */}

            <table className="self-stretch w-[936px] border-collapse">
              <thead>
                <tr className="border-b border-[#444444]">
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-bricolage leading-tight">Name</th>
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-bricolage leading-tight w-[150px]">Time</th>
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-bricolage leading-tight">Schedule</th>
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-bricolage leading-tight">Prompt</th>
                  <th className="px-5 py-2.5 text-right text-[#999999] text-sm font-semibold font-bricolage leading-tight">Action</th>
                </tr>
              </thead>
              <tbody>
                {schedules?.map((schedule) => {
                  return (
                    <tr className="border-b border-[#444444]">
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{schedule?.name}</td>
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{dayjs(schedule?.scheduledAt).format("HH:mm A")}</td>
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{cronToWeekday(schedule?.cron)}</td>
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{schedule?.data && schedule?.data !== "{}" ? schedule?.data : ""}</td>
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight flex justify-end">
                        <Popover>
                          <PopoverTrigger>
                            <Image src={"/icons/menu-dot-icon.svg"} alt={""} width={20} height={20} className="cursor-pointer"></Image>
                          </PopoverTrigger>
                          {/* <PopoverContent align="end" className="bg-black border border-[#DCFF9F] w-[218px]">
                            <div
                              className="cursor-pointer text-white text-base font-medium font-bricolage"
                              onClick={() => {
                                // handleDeleteLink(index);
                              }}
                            >
                              Delete
                            </div>
                          </PopoverContent> */}
                        </Popover>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <PaginationControls />
        </div>
      </div>
    </div>
  );
};

export default ScheduleList;
