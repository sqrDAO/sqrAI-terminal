"use client";
import React, { useState } from "react";
import TradingViewChart from "./chart";
import TabNavigation from "./TabNavigation";
import TabContent from "./TabContent";

const TVChartContainer = () => {
  const [selectedTab, setSelectedTab] = useState("Positions");

  return (
    <div className="flex-col w-full">
      <TradingViewChart />
      <div className="flex-col justify-start items-start gap-4 inline-flex w-full">
        <TabNavigation
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <TabContent selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default TVChartContainer;
