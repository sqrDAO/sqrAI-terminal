import React from "react";
import PositionsContent from "./PositionsContent";
import OpenOrdersContent from "./OpenOrdersContent";
import TradesContent from "./TradesContent";
import HistoryContent from "./HistoryContent";

const TabContent: React.FC<{ selectedTab: string }> = ({ selectedTab }) => {
  return (
    <div className="self-stretch flex-col justify-start items-start flex">
      <div className="self-stretch px-5 py-2.5 flex-col justify-start items-start flex text-white">
        {selectedTab === "Positions" && <PositionsContent />}
        {selectedTab === "Open Orders (5)" && <OpenOrdersContent />}
        {selectedTab === "Trades" && <TradesContent />}
        {selectedTab === "History" && <HistoryContent />}
      </div>
    </div>
  );
};

export default TabContent;
