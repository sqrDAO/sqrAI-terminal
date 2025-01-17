import React from "react";

interface TabNavigationProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  selectedTab,
  setSelectedTab,
}) => {
  const tabs = ["Positions", "Open Orders (5)", "Trades", "History"];

  return (
    <div className="self-stretch border-b border-[#dcff9f] justify-start items-center gap-4 inline-flex">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`px-4 py-3 justify-center items-center gap-2.5 flex cursor-pointer ${
            selectedTab === tab
              ? "border-b-2 border-[#a4fb0e] text-[#a4fb0e]"
              : "text-white"
          }`}
          onClick={() => setSelectedTab(tab)}
        >
          <div className="text-base font-semibold font-['Bricolage Grotesque'] leading-snug">
            {tab}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabNavigation;
