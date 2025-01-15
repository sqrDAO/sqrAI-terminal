"use client";
import Image from "next/image";
import Link from "next/link";
import { useSchedules } from "@/hooks/useSchedules";
import { useWallet } from "@solana/wallet-adapter-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import dayjs from "dayjs";
import cronstrue from "cronstrue";
import { useSQRAI } from "@/app/provider/sqrai.provider";
import { useEffect, useState } from "react";
import { deleteSchedule } from "@/app/serivces/agent.service";
import LoadingSpinner from "@/app/components/loading-spinner";
import PaginationControls from "@/components/pagination-control/Pagination-control";
import { PopoverClose } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";

const Schedule = () => {
  const { publicKey } = useWallet();
  const { dataChat, setFocus } = useSQRAI();
  const [selectedAgent, setSelectedAgent] = useState(null);
  const { data: schedules, refetch, isRefetching, isLoading } = useSchedules(selectedAgent?.id, publicKey?.toString());

  useEffect(() => {
    setSelectedAgent(JSON.parse(localStorage.getItem("selectedAgent") || "{}"));
  }, []);

  useEffect(() => {
    // receive chat message in this screen will trigger interval 10 seconds to refetch schedules
    if (dataChat) {
      let refetchCount = 0;
      const intervalRefetch = setInterval(() => {
        if (refetchCount >= 5) {
          clearInterval(intervalRefetch);
          return;
        }

        refetch()
          .then((newSchedules) => {
            refetchCount++;
            if (newSchedules?.data?.length > schedules?.length) {
              clearInterval(intervalRefetch);
            }
          })
          .catch(() => {
            clearInterval(intervalRefetch);
          });
      }, 10000);
    }
  }, [dataChat]);

  const cronToWeekday = (cron) => {
    if (!cron) {
      return "";
    }

    const res = cronstrue.toString(cron);
    return res;
  };

  const handleDeleteLink = async (eventId: string) => {
    if (eventId) {
      await deleteSchedule(selectedAgent?.id, publicKey?.toString(), eventId);
      refetch();
    }
  };

  return (
    <div className="w-full px-6 pt-6 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-[180px] pb-16 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-chakra leading-[37.50px]">
              Schedule
              {/* <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span> */}
            </div>
            <div className="self-stretch text-[#999999] text-sm font-medium font-bricolage leading-tight">Communicate with the bot to make schedule</div>
          </div>
          <Image className="w-[110px] h-[110px]" width={110} height={110} alt="" src="/imgs/page-3.svg" />
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex mx-auto w-full">
        <div className="self-stretch h-[462px] flex-col items-start gap-2 flexpy-5">
          <div className="w-full pb-5">
            <Button
              className="w-full"
              variant="outline"
              onClick={() => {
                setFocus(false);
                setTimeout(() => {
                  setFocus(true);
                }, 0);
              }}
            >
              Make schedule with bot
            </Button>
          </div>
          <div className="self-stretch h-full bg-black flex-col items-start gap-5 flex overflow-auto">
            {/* <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 p-4 border border-[#dcff9f] flex-col justify-center items-center gap-4 inline-flex">
                <div className="self-stretch text-center text-[#c5ff53] text-sm font-medium font-bricolage leading-tight">
                  + Add a new time to generate content
                </div>
              </div>
            </div> */}

            <table className="self-stretch w-full border-collapse">
              <thead className="sticky top-0 bg-black">
                <tr className="border-b border-[#444444]">
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-bricolage leading-tight">No.</th>
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-bricolage leading-tight">Action</th>
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-bricolage leading-tight w-[150px]">Time</th>
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-bricolage leading-tight w-[200px]">Schedule</th>
                  <th className="px-5 py-2.5 text-left text-[#999999] text-sm font-semibold font-bricolage leading-tight">Prompt</th>
                  <th className="px-5 py-2.5 text-right text-[#999999] text-sm font-semibold font-bricolage leading-tight w-full flex justify-end">
                    {isRefetching || (isLoading && <LoadingSpinner></LoadingSpinner>)}
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedules?.map((schedule, index) => {
                  return (
                    <tr key={index} className="border-b border-[#444444]">
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{index + 1}</td>
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{schedule?.action}</td>
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{dayjs(schedule?.scheduledAt).format("HH:mm A")}</td>
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{cronToWeekday(schedule?.cron)}</td>
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight">{schedule?.data && schedule?.data !== "{}" ? schedule?.data : ""}</td>
                      <td className="px-5 py-2.5 text-[#999999] text-sm font-semibold font-bricolage leading-tight flex justify-end">
                        <Popover>
                          <PopoverTrigger>
                            <Image src={"/icons/menu-dot-icon.svg"} alt={""} width={20} height={20} className="cursor-pointer"></Image>
                          </PopoverTrigger>
                          <PopoverContent align="end" className="bg-black border border-[#DCFF9F] w-[218px]">
                            <PopoverClose>
                              <div
                                className="cursor-pointer text-white text-base font-medium font-bricolage"
                                onClick={() => {
                                  handleDeleteLink(schedule?.id);
                                }}
                              >
                                Delete
                              </div>
                            </PopoverClose>
                          </PopoverContent>
                        </Popover>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* <PaginationControls /> */}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
