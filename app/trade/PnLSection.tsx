import React from "react";

const PnLSection = () => {
  return (
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
  );
};

export default PnLSection;
