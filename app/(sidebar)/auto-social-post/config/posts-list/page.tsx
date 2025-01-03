"use client";
import Image from "next/image";
import Link from "next/link";
import PaginationControls from "../../PaginationControls";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { PostCard } from "./components/PostCard";

const Index = () => {
  const { publicKey } = useWallet();
  const [data, setData] = useState([]);
  const getPost = async () => {
    try {
      const res = await fetch(
        `/api/twitter/posts-list?publicKey=${publicKey?.toString()}`,
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
    if (publicKey) {
      getPost();
    }
  }, [publicKey]);
  return (
    <div className="w-full px-6 pt-6 flex-col justify-start items-center inline-flex h-[calc(100vh_-77px)] overflow-auto">
      <div className="self-stretch h-[180px] pb-16 flex-col justify-start items-start gap-8 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch text-white text-3xl font-semibold font-chakra leading-[37.50px]">
              Auto generate social post
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
            href="#"
            className="px-4 py-3 border-b-2 border-[#a4fb0e] justify-center items-center gap-2.5 flex"
          >
            <div className="text-[#a4fb0e] text-base font-semibold font-bricolage leading-snug">
              Posts list
            </div>
          </Link>
          <Link
            href="/auto-social-post/config/schedule"
            className="px-4 py-3 justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-semibold font-bricolage leading-snug">
              Schedule
            </div>
          </Link>
          <Link
            href="/auto-social-post/config/setting"
            className="px-4 py-3 justify-center items-center gap-2.5 flex"
          >
            <div className="text-white text-base font-semibold font-bricolage leading-snug">
              Setting
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[920px] flex-col justify-start items-start gap-8 inline-flex mx-auto my-10 border-2 border-[#dcff9f]">
        <div className="self-stretch pb-5 bg-black flex-col justify-center items-start gap-5 flex">
          <div className="self-stretch h-[842px] flex-col justify-start items-start flex">
            {data?.map((item: any) => (
              <PostCard
                name={item.twitterName}
                content={item.text}
                img={item.imageUrl}
              />
            ))}
          </div>
          {/* <PaginationControls /> */}
        </div>
      </div>
    </div>
  );
};

export default Index;
