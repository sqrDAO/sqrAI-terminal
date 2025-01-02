"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Overview = () => {
  // const [scrapeLink, setScrapeLink] = useState("");
  // const [rowPerPage, setRowPerPage] = useState(50);
  const { data: session } = useSession();
  console.log(session);
  const updatetwitter = async () => {
    try {
      const res = await fetch(`/api/twitter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          accessToken: (session as any)?.accessToken,
          refreshToken: (session as any)?.refreshToken,
          expiredAt: (session as any)?.expires,
          userId: (session as any)?.user?.id,
          name: (session as any)?.user?.name,
        }),
      });
      const data = await res.json();
      return data.data;
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    if (session) {
      updatetwitter();
    }
  }, [[session]]);
  const handleLogin = () => {
    signIn("twitter"); // Đăng nhập với Twitter
  };
  return (
    <div className="px-6 pt-6 flex-col justify-start items-center inline-flex w-full">
      <div className="self-stretch h-32 pb-16 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-['Chakra Petch'] leading-[37.50px]">
              Auto generate social post
              {/* <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span> */}
            </div>
            <div className="text-[#999999] text-sm font-medium font-['Bricolage Grotesque'] leading-tight">
              Setting a schedule, AI can create content that matches your
              writing style and automatically post it to X at the time you
              choose.
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
      </div>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex w-full md:w-[936px] mx-auto">
        <div className="self-stretch h-48 flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-48 py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex">
            <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.7124 10.6218L20.4133 3H18.8254L13.0071 9.61788L8.35992 3H3L10.0274 13.0074L3 21H4.58799L10.7324 14.0113L15.6401 21H21L13.7121 10.6218H13.7124ZM11.5375 13.0956L10.8255 12.0991L5.16017 4.16971H7.59922L12.1712 10.5689L12.8832 11.5655L18.8262 19.8835H16.3871L11.5375 13.096V13.0956Z"
                  fill="white"
                />
              </svg>
              <div className="text-[#a4fb0e] text-sm font-medium font-['Bricolage Grotesque'] leading-tight">
                Connect X account to continue
              </div>
              <Button onClick={handleLogin}>Connect X</Button>
            </div>
            {/* <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch h-11 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch px-3.5 py-2.5 bg-white border-[#444444] justify-start items-center gap-3 inline-flex overflow-hidden">
                    <div className="grow shrink basis-0 h-6 justify-center items-center gap-0.5 flex">
                      <input
                        className="grow shrink basis-0 text-[#777777] text-base font-normal font-['Bricolage Grotesque'] leading-snug"
                        placeholder="Enter X username"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex"> */}
            {/* <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch h-11 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch px-3.5 py-2.5 bg-white border-[#444444] justify-start items-center gap-3 inline-flex overflow-hidden">
                    <div className="grow shrink basis-0 h-6 justify-center items-center gap-0.5 flex">
                      <input
                        className="grow shrink basis-0 text-[#777777] text-base font-normal font-['Bricolage Grotesque'] leading-snug"
                        placeholder="Enter your API key"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            {/* <Link
                href="/auto-social-post/config/schedule"
                className="w-[125px] h-11 px-2.5 py-1.5 bg-[#a4fb0e] justify-center items-center flex overflow-hidden"
              >
                <div className="px-1 justify-center items-center gap-2.5 flex">
                  <div className="text-center text-black text-base font-semibold font-['Chakra Petch'] leading-normal">
                    Continue
                  </div>
                </div>
              </Link> */}

            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
