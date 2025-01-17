import React from "react";

const BalanceSection = () => {
  return (
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
                fillRule="evenodd"
                clipRule="evenodd"
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
    </div>
  );
};

export default BalanceSection;
