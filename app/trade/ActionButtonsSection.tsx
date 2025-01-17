import React from "react";

import PnLSection from "./PnLSection";
import ActionButtonsSection from "./ActionButtonsSection";
import BalanceSection from "./BalanceSection";

const Sidebar = () => {
  return (
    <div className="h-full flex-col justify-start items-start flex w-full">
      <BalanceSection />
      <PnLSection />
      <ActionButtonsSection />
    </div>
  );
};

export default Sidebar;
