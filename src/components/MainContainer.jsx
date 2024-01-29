import React from "react";
import Widget from "./Widget";
import AnimatedProgressBar from "./AnimatedProgressBar";
import CustomerWidget from "./CustomerWidget";
import ChatsWidget from "./ChatsWidget";
import TopStatesWidget from "./TopStatesWidget";
import NewDealsWidget from "./NewDealsWidget";
import FirstRowWidgetContainer from "./FirstRowWidgetContainer";
import TopMonth from "./TopMonth";
import TopYear from "./TopYear";
import TopBuyer from "./TopBuyer";
import GraphWidget from "./GraphWidget";

const MainConatiner = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <FirstRowWidgetContainer />
      <div className="w-full flex gap-4">
        <CustomerWidget />
        <div className="w-1/2 flex flex-col gap-4">
          <GraphWidget />
          <div className="w-full flex gap-4">
            <TopMonth title={'Top month'} />
            <TopYear title={'Top year'} />
            <TopBuyer title={'Top buyer'} />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="flex w-7/12 gap-4">
          <ChatsWidget />
          <TopStatesWidget />
        </div>
        <div className="w-5/12">
          <NewDealsWidget />
        </div>
      </div>
    </div>
  );
};

export default MainConatiner;
