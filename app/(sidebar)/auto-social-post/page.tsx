"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

const Overview = () => {
  // const [scrapeLink, setScrapeLink] = useState("");
  // const [rowPerPage, setRowPerPage] = useState(50);
  const { data: session } = useSession();
  console.log(session);

  const searchParams = useSearchParams();
  const route = useRouter();

  useEffect(() => {
    // /api/auth/callback/twitter?state=6pixzn3o5i&code=T0hSMWx6d09KcE9kRTB2eEo0c2xuN3NUWGRGMHEyUEFYazVNRlVZd2VtQXRSOjE3MzU4MDUwMjgyNTI6MToxOmFjOjE
    const userTwitter = getCookie("userTwitter");
    const state = searchParams.get("state");
    const code = searchParams.get("code");

    if (userTwitter) {
      route.push("/auto-social-post/config/schedule");
      return;
    }

    if (state && code) {
      axios
        .get("/api/auth/callback/twitter", {
          params: {
            state: state,
            code: code,
          },
        })
        .then((response) => {
          setCookie("userTwitter", response?.data);
          route.push("/auto-social-post/config/schedule");
        })
        .catch((error) => {
          console.error("There was an error making the request:", error);
        });
    }
  }, [searchParams]);

  const handleLogin = () => {
    window.location.href = "/api/twitter/auth";
  };
  return (
    <div className="px-6 pt-6 flex-col justify-start items-center inline-flex w-full">
      <div className="self-stretch h-32 pb-16 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-chakra leading-[37.50px]">
              Auto generate social post
              {/* <span className="text-[10px] font-chakra text-[#A4FB0E]">(coming soon)</span> */}
            </div>
            <div className="text-[#999999] text-sm font-medium font-bricolage leading-tight">
              Setting a schedule, AI can create content that matches your writing style and automatically post it to X at the time you choose.
            </div>
          </div>
          <Image className="w-[110px] h-[110px]" width={110} height={110} alt="" src="/imgs/page-3.svg" />
        </div>
      </div>
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-center gap-8 flex w-full md:w-[500px] mx-auto">
        <div className="self-stretch h-48 flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-48 p-5 bg-center border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 flex">
            <div className="self-stretch justify-start items-center gap-5 inline-flex flex-col">
              <div className="flex flex-col gap-[10px] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none">
                  <path
                    d="M26.7822 20.3584L39.6256 5.75H36.5821L25.4302 18.4343L16.5232 5.75H6.25L19.7191 24.9309L6.25 40.25H9.29365L21.0704 26.855L30.4768 40.25H40.75L26.7814 20.3584H26.7822ZM22.6135 25.0998L21.2488 23.1899L10.3903 7.99195H15.0652L23.8281 20.2571L25.1928 22.1671L36.5835 38.11H31.9087L22.6135 25.1006V25.0998Z"
                    fill="white"
                  />
                </svg>
                <div className="text-[#a4fb0e] text-sm font-medium font-bricolage leading-tight">Connect X account to continue</div>
              </div>
              <Button className="w-full " onClick={handleLogin}>
                Connect
              </Button>
            </div>
            {/* <div className="self-stretch px-5 justify-start items-center gap-2.5 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="self-stretch h-11 flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch px-3.5 py-2.5 bg-white border-[#444444] justify-start items-center gap-3 inline-flex overflow-hidden">
                    <div className="grow shrink basis-0 h-6 justify-center items-center gap-0.5 flex">
                      <input className="grow shrink basis-0 text-[#777777] text-base font-normal font-bricolage leading-snug" placeholder="Enter X username" />
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
                      <input className="grow shrink basis-0 text-[#777777] text-base font-normal font-bricolage leading-snug" placeholder="Enter your API key" />
                    </div>
                  </div>
                </div>
              </div> */}
            {/* <Link
                href="/auto-social-post/config/schedule"
                className="w-[125px] h-11 px-2.5 py-1.5 bg-[#a4fb0e] justify-center items-center flex overflow-hidden"
              >
                <div className="px-1 justify-center items-center gap-2.5 flex">
                  <div className="text-center text-black text-base font-semibold font-chakra leading-normal">Continue</div>
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
