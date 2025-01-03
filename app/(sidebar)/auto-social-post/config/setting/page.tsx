import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

const Index = () => {
  const { publicKey } = useWallet();
  const [data, setData] = useState([]);
  const getAccount = async () => {
    try {
      const res = await fetch(
        `/api/twitter?publicKey=${publicKey?.toString()}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      console.log(`data`, JSON.stringify(data));

      setData(data);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    getAccount();
  }, []);
  return (
    <div className="w-full px-6 pt-6 flex-col justify-start items-center inline-flex">
      <div className="self-stretch h-[180px] pb-16 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-chakra leading-[37.50px]">
              Auto generate social post{" "}
              {/* <span className="text-[10px] font-chakra text-[#A4FB0E]">
                (coming soon)
              </span> */}
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
            href={"/auto-social-post/config/posts-list"}
            className="px-4 py-3 justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-semibold font-bricolage leading-snug">
              Posts list
            </div>
          </Link>
          <Link
            href={"/auto-social-post/config/schedule"}
            className="px-4 py-3 justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-semibold font-bricolage leading-snug">
              Schedule
            </div>
          </Link>
          <Link
            href={"#"}
            className="px-4 py-3 border-b-2 border-[#a4fb0e] justify-center items-center gap-2.5 flex"
          >
            <div className="text-[#a4fb0e] text-base font-semibold font-bricolage leading-snug">
              Setting
            </div>
          </Link>
        </div>
      </div>
      <div className="h-[134px] py-5 bg-black border-2 border-[#dcff9f] flex-col justify-center items-start gap-5 inline-flex mx-auto mt-10">
        <div className="self-stretch h-[94px] flex-col justify-start items-start flex">
          <div className="w-[936px] px-5 py-2.5 border-b border-[#444444] justify-center items-center inline-flex">
            <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">
                User
              </div>
            </div>
            <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">
                Expired At
              </div>
            </div>
            <div className="h-5 px-2.5 justify-center items-center gap-2.5 flex">
              <div className="grow shrink basis-0 opacity-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">
                action
              </div>
            </div>
          </div>
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[936px] px-5 py-4 border-[#444444] justify-center items-center inline-flex"
            >
              <div className="grow shrink basis-0 h-[22px] px-2.5 justify-center items-center gap-2.5 flex">
                <img
                  className="w-[22px] h-[22px] relative rounded-[200px] border border-[#dcff9f]"
                  src={item.image || "https://via.placeholder.com/22x22"}
                  alt={item.twitterName}
                />
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">
                  {item.twitterName}
                </div>
              </div>
              <div className="grow shrink basis-0 h-5 px-2.5 justify-center items-center gap-2.5 flex">
                <div className="grow shrink basis-0 text-[#999999] text-sm font-semibold font-bricolage leading-tight">
                  {item.expiredAt}
                </div>
              </div>
              {/* <div className="h-5 px-2.5 justify-end items-center gap-3 flex">
                <div className="w-5 h-5 relative origin-top-left rotate-90">
                  <div className="w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start flex overflow-hidden" />
                  <div className="w-5 h-5 left-0 top-0 absolute bg-white" />
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
