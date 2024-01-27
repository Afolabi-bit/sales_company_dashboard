import React from "react";
import Header from "./Header";
import SalesTrend from "./SalesTrend";
import LastOrders from "./LastOrders";
import TotalsAndAverage from "./TotalsAndAverage";
import TopPlatforms from "./TopPlatforms";

const Main = () => {
  return (
    <section className=" main bg-[var(--main-content-bg)] min-h-screen overflow-hidden md:w-[calc(100%_-_150px)]">
      <Header />
      <section className="flex gap-[18px] p-[18px] justify-between flex-col w-full lg:flex-row ">
        {/* left */}
        <div className="flex flex-col gap-[18px] w-full lg:w-[806px]">
          <SalesTrend />
          <LastOrders />
        </div>

        {/*  */}
        {/*  */}

        {/* Right */}
        <div className=" gap-[18px] flex  w-full flex-row justify-between lg:w-[404px] lg:flex-col">
          <TotalsAndAverage />
          <TopPlatforms />
        </div>
      </section>
    </section>
  );
};

export default Main;
