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
      <section className="flex gap-[18px] p-[18px] justify-between md:flex-col md:w-full ">
        {/* left */}
        <div className="flex flex-col gap-[18px] w-[806px] md:w-full ">
          <SalesTrend />
          <LastOrders />
        </div>

        {/*  */}
        {/*  */}

        {/* Right */}
        <div className="w-[404px] gap-[18px] flex flex-col md:w-full md:flex-row md:justify-between ">
          <TotalsAndAverage />
          <TopPlatforms />
        </div>
      </section>
    </section>
  );
};

export default Main;
