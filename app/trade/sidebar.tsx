"use client";

import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <>
      <div className="md:hidden absolute top-6 left-[150px] z-20 cursor-pointer">
        <Image
          onClick={() => {
            setIsSidebarVisible(!isSidebarVisible);
          }}
          src={"/icons/menu-dot-icon.svg"}
          alt={""}
          width={22}
          height={22}
        ></Image>
      </div>
      <div
        className={`md:block md:relative ${
          isSidebarVisible
            ? "block transition-all absolute top-[74px] left-0 z-50"
            : "hidden"
        }`}
      >
        <div className="w-80 h-[calc(100vh_-77px)] pt-3 border-r border-[#dcff9f] flex-col justify-start items-start gap-3 inline-flex bg-black relative z-[100] overflow-hidden">
          <div className="h-[238px] flex-col justify-start items-start flex w-full">
            <div className="self-stretch h-[54px] p-4 bg-black flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.9998 2.5H3.33317H1.6665V4.16667V15.8333V17.5H3.33317H14.9998H16.6665V15.8333V14.1667L18.3332 14.1667V12.5V7.5V5.83333H16.6665V4.16667V2.5H14.9998ZM14.9998 14.1667V15.8333H3.33317V4.16667H14.9998V5.83333H9.99984H8.33317V7.5V12.5V14.1667L9.99984 14.1667H14.9998ZM16.6665 12.5H14.9998H9.99984V7.5H14.9998H16.6665V12.5ZM13.3332 9.16667H11.6665V10.8333H13.3332V9.16667Z"
                      fill="#a4fb0e"
                    />
                  </svg>
                  <div className="text-[#a4fb0e] text-base font-medium font-['Bricolage Grotesque'] leading-snug">
                    Balance
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[90px] px-4 pt-1 pb-5 bg-black border-b border-[#444444] flex-col justify-start items-start gap-2 flex">
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="text-white text-3xl font-medium font-['Chakra Petch'] leading-[37.50px]">
                  $
                </div>
                <div className="text-white text-3xl font-medium font-['Chakra Petch'] leading-[37.50px]">
                  20,000.01
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-1 inline-flex">
                <div className="text-center text-[#999999] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                  Today’s realized PnL
                </div>
                <div className="text-center text-[#a4fb0e] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                  $50065.05 (50.05%)
                </div>
              </div>
            </div>
            <div className="self-stretch py-3 bg-black border-b border-[#dcff9f] justify-between items-start inline-flex">
              <div className="grow shrink basis-0 p-2 flex-col justify-start items-center gap-2 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.83333 2.16602H19.8333V4.33268H6.83333V2.16602ZM4.66667 6.49935V4.33268H6.83333V6.49935H4.66667ZM4.66667 19.4993V6.49935H2.5V19.4993H4.66667ZM6.83333 21.666V19.4993H4.66667V21.666H6.83333ZM19.8333 21.666V23.8327H6.83333V21.666H19.8333ZM22 19.4993V21.666H19.8333V19.4993H22ZM22 6.49935H24.1667V19.4993H22V6.49935ZM22 6.49935V4.33268H19.8333V6.49935H22ZM12.25 5.41602H14.4167V7.58268H17.6667V9.74935H14.4167H12.25H11.1667V11.916H15.5H17.6667V14.0827V16.2493V18.416H15.5H14.4167V20.5827H12.25V18.416H9V16.2493H12.25H14.4167H15.5V14.0827H11.1667H9V11.916V9.74935V7.58268H11.1667H12.25V5.41602Z"
                    fill="#999999"
                  />
                </svg>
                <div className="text-center text-[#999999] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                  Deposit
                </div>
              </div>
              <div className="grow shrink basis-0 p-2 flex-col justify-start items-center gap-2 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.9167 5.4166V3.25L14.0833 3.25V5.4166H16.2501V7.58327L18.4167 7.58327V9.74993H16.25V7.58327L14.0833 7.58327V18.4167H11.9167L11.9167 7.58327H9.75013V9.74993H7.58347V7.58327H9.7501V5.4166H11.9167ZM3.25 16.25V20.5833L3.25 22.7499L3.25 22.75H5.41667V22.7499L20.5833 22.7499V22.75H22.75L22.75 22.7499V20.5833L22.75 16.25H20.5833V20.5833H5.41667L5.41667 16.25H3.25Z"
                    fill="#999999"
                  />
                </svg>
                <div className="text-center text-[#999999] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                  Withdraw
                </div>
              </div>
              <div className="grow shrink basis-0 p-2 flex-col justify-start items-center gap-2 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.2503 3.25H6.08366V5.41667H3.91699V20.5833H6.08366V22.75H21.2503V20.5833H23.417V5.41667H21.2503V3.25ZM21.2503 5.41667V20.5833H6.08366V5.41667H21.2503ZM12.5837 7.58333H14.7503V14.0833H19.0837V16.25L14.7503 16.25H12.5837V7.58333Z"
                    fill="#999999"
                  />
                </svg>
                <div className="text-center text-[#999999] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                  History
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1010px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-[54px] p-4 bg-black flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="w-5 h-5 relative">
                    <div className="w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start flex overflow-hidden">
                      <img
                        className="w-[18.33px] h-[8.33px]"
                        src="https://via.placeholder.com/18x8"
                      />
                    </div>
                    <div className="w-5 h-5 left-0 top-0 absolute bg-[#a4fb0e]" />
                  </div>
                  <div className="text-[#a4fb0e] text-base font-medium font-['Bricolage Grotesque'] leading-snug">
                    Tradebot log
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[604px] px-4 flex-col justify-start items-start flex">
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-2.5 h-2.5 bg-[#a4fb0e] rounded-full border border-[#dcff9f]" />
                </div>
                <div className="grow shrink basis-0 pt-2 pb-4 flex-col justify-center items-center inline-flex">
                  <div className="self-stretch text-[#a4fb0e] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    10:10 PM{" "}
                  </div>
                  <div className="self-stretch text-[#c1c1c1] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-2.5 h-2.5 rounded-full border border-[#dcff9f]" />
                </div>
                <div className="grow shrink basis-0 pt-2 pb-4 flex-col justify-center items-center inline-flex">
                  <div className="self-stretch text-[#a4fb0e] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    19:12 PM yesterday
                  </div>
                  <div className="self-stretch text-[#c1c1c1] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eget maximus lacus. Vestibulum tincidunt eu arcu
                    ut rhoncus. Nulla a lacinia tortor. Morbi suscipit tortor in
                    tempor aliquet. Ut lectus orci, aliquet suscipit odio eu,
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-2.5 h-2.5 rounded-full border border-[#dcff9f]" />
                </div>
                <div className="grow shrink basis-0 pt-2 pb-4 flex-col justify-center items-center inline-flex">
                  <div className="self-stretch text-[#a4fb0e] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    07:32 AM 24/12/2024
                  </div>
                  <div className="self-stretch text-[#c1c1c1] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    Lorem ipsum dolor sit amet,{" "}
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-2.5 h-2.5 rounded-full border border-[#dcff9f]" />
                </div>
                <div className="grow shrink basis-0 pt-2 pb-4 flex-col justify-center items-center inline-flex">
                  <div className="self-stretch text-[#a4fb0e] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    07:32 AM 24/12/2024
                  </div>
                  <div className="self-stretch text-[#c1c1c1] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-2.5 h-2.5 rounded-full border border-[#dcff9f]" />
                </div>
                <div className="grow shrink basis-0 pt-2 pb-4 flex-col justify-center items-center inline-flex">
                  <div className="self-stretch text-[#a4fb0e] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    07:32 AM 24/12/2024
                  </div>
                  <div className="self-stretch text-[#c1c1c1] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum eget maximus lacus. Vestibulum tincidunt eu arcu
                    ut rhoncus. Nulla a lacinia tortor.{" "}
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="self-stretch flex-col justify-start items-center inline-flex">
                  <div className="w-2.5 h-2.5 rounded-full border border-[#dcff9f]" />
                </div>
                <div className="grow shrink basis-0 pt-2 pb-4 flex-col justify-center items-center inline-flex">
                  <div className="self-stretch text-[#a4fb0e] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    07:32 AM 24/12/2024
                  </div>
                  <div className="self-stretch text-[#c1c1c1] text-sm font-normal font-['Bricolage Grotesque'] leading-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
