import React from "react";
import { totalsCardsData } from "../data";
import TotalsCard from "./TotalsCard";

const TotalsAndAverage = () => {
  return (
    <div className="w-full flex flex-wrap gap-[10px] md:w-[calc(50%_-_9px)] h-fit lg:w-full ">
      {totalsCardsData.map((card, index) => {
        return <TotalsCard key={index} card={card} />;
      })}
    </div>
  );
};

export default TotalsAndAverage;
