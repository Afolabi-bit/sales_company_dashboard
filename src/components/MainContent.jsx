import React from "react";
import Header from "./Header";
import SalesTrend from "./SalesTrend";
import LastOrders from "./LastOrders";
import TotalsCard from "./TotalsCard";
import { totalsCardsData, topPlatforms } from "../data";
import PlatformProgress from "./PlatformProgress";

const Main = () => {
  return (
    <section className=" main bg-[var(--main-content-bg)] min-h-screen overflow-hidden ">
      <Header />
      <section className="flex gap-[18px] p-[18px] justify-between">
        {/* left */}
        <div className="flex flex-col gap-[18px] w-[806px] ">
          <SalesTrend />
          <LastOrders />
        </div>

        {/*  */}
        {/*  */}

        {/* Right */}
        <div className="w-[404px] gap-[18px] flex flex-col">
          {/*  */}

          {/* Totals and Average Cards */}
          <div className="flex flex-wrap gap-[10px] w-full ">
            {totalsCardsData.map((card, index) => {
              return <TotalsCard key={index} card={card} />;
            })}
          </div>

          {/*  */}
          {/*  */}

          {/* Top Platform */}
          <div className="w-[404px] h-[494px] bg-white inline-flex flex-col items-start gap-[20px] pl-[16px] pt-[16px] pr-[32px] pb-[20px] rounded-[8px] ">
            {/* Heading */}
            <div className="flex justify-between w-full">
              <h3 className="text-[18px] font-semibold leading-[26px]">
                Top Platforms
              </h3>
              <button className="text-[18px] font-medium leadiing-[26px] text-[#34caa5]">
                See All
              </button>
            </div>

            {/*  */}
            {/*  */}

            <div className="w-full flex flex-col gap-[20px]">
              {topPlatforms.map((platform, index) => {
                return <PlatformProgress {...platform} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Main;
