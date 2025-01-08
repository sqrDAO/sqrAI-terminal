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
    <div className="bg-black border-b border-[#444444] flex-col justify-start items-end flex w-full">
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
              <div className="text-white text-base font-bold font-bricolage leading-snug flex gap-1">
                {twitterName}{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                >
                  <path
                    d="M17.1878 9.00014C17.173 8.47159 17.0119 7.95695 16.7214 7.51432C16.4318 7.0725 16.0243 6.71905 15.5449 6.49486C15.7273 5.99823 15.7658 5.46068 15.6594 4.94277C15.5522 4.42405 15.3019 3.94623 14.9378 3.5625C14.5532 3.19841 14.0762 2.94886 13.5575 2.84086C13.0396 2.7345 12.502 2.77295 12.0054 2.95541C11.782 2.47514 11.4294 2.06686 10.9868 1.77723C10.5441 1.48759 10.0295 1.32559 9.50014 1.3125C8.97159 1.32641 8.45859 1.48677 8.01677 1.77723C7.57495 2.06768 7.22395 2.47595 7.00223 2.95541C6.50477 2.77295 5.96559 2.73286 5.44605 2.84086C4.9265 2.94723 4.44786 3.19759 4.06332 3.5625C3.69923 3.94705 3.4505 4.42568 3.34495 4.94359C3.23859 5.4615 3.2795 5.99905 3.46277 6.49486C2.9825 6.71905 2.57341 7.07168 2.28214 7.5135C1.99086 7.95532 1.82805 8.47077 1.8125 9.00014C1.82886 9.5295 1.99086 10.0441 2.28214 10.4868C2.57341 10.9286 2.9825 11.282 3.46277 11.5054C3.2795 12.0012 3.23859 12.5388 3.34495 13.0567C3.45132 13.5754 3.69923 14.0532 4.0625 14.4378C4.44705 14.8002 4.92486 15.049 5.44277 15.1561C5.96068 15.2641 6.49823 15.2249 6.99486 15.0449C7.21905 15.5243 7.57168 15.9318 8.01432 16.2222C8.45614 16.5119 8.97159 16.673 9.50014 16.6878C10.0295 16.6747 10.5441 16.5135 10.9868 16.2239C11.4294 15.9342 11.782 15.5251 12.0054 15.0457C12.4996 15.2412 13.0412 15.2879 13.5624 15.1799C14.0828 15.0719 14.5606 14.8141 14.937 14.4378C15.3133 14.0614 15.5719 13.5836 15.6799 13.0624C15.7879 12.5412 15.7412 11.9996 15.5449 11.5054C16.0243 11.2812 16.4318 10.9286 16.7222 10.486C17.0119 10.0441 17.173 9.52868 17.1878 9.00014ZM8.40541 12.1501L5.59986 9.34541L6.65777 8.28014L8.35304 9.97541L11.953 6.05305L13.0551 7.0725L8.40541 12.1501Z"
                    fill="#A4FB0E"
                  />
                </svg>
              </div>
              <div className="text-[#999999] text-base font-normal font-bricolage leading-snug">
                @{twitterUsername}
              </div>
              <div className="text-[#999999] text-base font-normal font-bricolage leading-snug">
                ·
              </div>
              <div className="text-[#a4fb0e] text-base font-normal font-bricolage leading-snug">
                {new Date(time).toLocaleString()}
              </div>
            </div>
            <div className="self-stretch text-white text-base font-normal font-bricolage leading-snug">
              {text.includes("\\n")
                ? text.split("\\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))
                : text}
            </div>
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
