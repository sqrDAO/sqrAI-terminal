import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

export const PostCard = ({
  twitterName,
  twitterUsername,
  text,
  imageUrl,
  time,
  index,
}) => {
  return (
    <div className="bg-[#111111] border-b border-[#444444] flex-col justify-start items-end flex w-full">
      <div className="self-stretch px-5 py-7 justify-start items-start inline-flex">
        <div className="grow shrink basis-0 pl-2.5 pr-8 justify-start items-start gap-3 flex">
          {/* <Image
          className="w-[40px] h-[40px] rounded-full"
          width={40}
          height={40}
          alt=""
          src={img}
        /> */}
          <img
            className="w-[40px] h-[40px]  rounded-full"
            src={imageUrl || "https://via.placeholder.com/22x22"}
            alt={twitterName}
          />
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="self-stretch justify-start items-center gap-1.5 inline-flex">
              <div className="text-white text-base font-bold font-bricolage leading-snug">
                {twitterName}
              </div>
              <div className="text-[#999999] text-base font-normal font-bricolage leading-snug">
                {twitterUsername}
              </div>
              <div className="text-[#999999] text-base font-normal font-bricolage leading-snug">
                ·
              </div>
              <div className="text-[#a4fb0e] text-base font-normal font-bricolage leading-snug">
                {new Date(time).toLocaleString()}
              </div>
            </div>
            <div
              className="self-stretch text-white text-base font-normal font-bricolage leading-snug"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
        {/* <div className="h-10 px-2.5 justify-center items-center gap-2.5 flex">
        <div className="grow shrink basis-0 text-right text-[#999999] text-sm font-semibold font-bricolage leading-tight">
          {status}
        </div>
      </div> */}
      </div>
      {/* <div className="self-stretch justify-start items-start inline-flex">
      <div className="grow shrink basis-0 h-11 px-2.5 py-1.5 bg-[#a4fb0e] justify-center items-center flex overflow-hidden">
        <div className="px-1 justify-center items-center gap-2.5 flex">
          <div className="text-center text-black text-base font-semibold font-chakra leading-normal">
            Save
          </div>
        </div>
      </div>
      <div className="grow shrink basis-0 h-11 px-2.5 py-1.5 border-t border-b border-[#dcff9f] justify-center items-center flex overflow-hidden">
        <div className="px-1 justify-center items-center gap-2.5 flex">
          <div className="text-center text-[#a4fb0e] text-base font-semibold font-chakra leading-normal">
            Edit
          </div>
        </div>
      </div>
      <div className="w-[148px] h-11 px-2.5 py-1.5 border-l border-t border-b border-[#dcff9f] justify-center items-center flex overflow-hidden">
        <div className="px-1 justify-center items-center gap-2.5 flex">
          <div className="text-center text-white text-base font-semibold font-chakra leading-normal">
            Discard
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};
