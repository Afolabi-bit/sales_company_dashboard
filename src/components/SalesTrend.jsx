import React from "react";
import { barData } from "../data";

const BarAndMonth = ({ month, height, containerHeight, id }) => {
  let h = height.slice(0, -2);
  let c = containerHeight.slice(0, -2);

  let value = Math.floor((h / c) * 50000).toString();

  let left = value.slice(0, -3);
  let right = value.slice(2);

  value = `$${left}.${right}`;

  let m = new Date().getMonth();

  return (
    <div className="bar-wrapper flex flex-col gap-[5px] items-center cursor-pointer ">
      <div className=" h-[255px] flex items-end">
        <div
          style={{
            height: `${height}`,
          }}
          className={
            id == m ? "w-[30px] relative active-month" : "w-[30px] relative"
          }
        >
          {/* Tooltip */}
          <div className="tooltip absolute opacity-0 top-[-34px] left-[50%] translate-x-[-50%] w-[80px] h-[32px]">
            <img
              src="https://res.cloudinary.com/dkpoealta/image/upload/v1706284897/Combined_Shape_x4ml7j.svg"
              alt="tooltip"
              className="w-[80px] h-[32px]"
            />
            <span className="absolute top-[5px] left-[50%] translate-x-[-50%] text-white z-30 text-[12px] font-medium leading-normal inter ">
              {value}
            </span>
          </div>

          <img
            className="light absolute top-0 left-0"
            src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102307/asset/bar_2_pwkhxg.svg"
            alt="bar"
          />
          <img
            className="dark absolute top-0 left-0 opacity-0 "
            src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102307/asset/bar_gduntn.svg"
            alt="bar"
          />
        </div>
      </div>

      <p className="text-[14px] font-semibold text-[#525252] leading-[22px] ">
        {month}
      </p>
    </div>
  );
};

const SalesTrend = () => {
  return (
    <section className="w-[806px] h-[374px] flex-shrink-0 bg-white rounded-[14px] border-m py-[15px] px-[17px]">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <h2 className="text-[#26282C] text-[18px] font-[600] leading-[26px] ">
          Sales Trends
        </h2>

        <div className="flex items-center">
          <p className="text-[14px] font-medium leading-[22px] mr-[10px] ">
            Short by:
          </p>
          <button className="border-m flex gap-[10px] items-center py-[6px] px-[12px] rounded-[20px] bg-white ">
            <span className="text-[12px] leading-[16px]  ">Weekly</span>
            <img
              src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102307/asset/Arrow_-_Down_2_gezvup.svg"
              alt="icon"
            />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="mt-[20px] flex flex-col gap-[10px] items-end ">
        {/* Chart wrapper */}
        <div className="flex gap-[20px]">
          <div className="inline-flex flex-col justify-between items-start h-[255px] shrink-0 opacity-[0.56] ">
            <p className="text-[12px] font-semibold leading-[16px]">50.00</p>
            <p className="text-[12px] font-semibold leading-[16px]">40.00</p>
            <p className="text-[12px] font-semibold leading-[16px]">30.00</p>
            <p className="text-[12px] font-semibold leading-[16px]">20.0</p>
            <p className="text-[12px] font-semibold leading-[16px]">10.00</p>
            <p className="text-[12px] font-semibold leading-[16px]">5.000</p>
            <p className="text-[12px] font-semibold leading-[16px]">0</p>
          </div>

          <div className="relative w-[696px] h-full ">
            {/* Background lines */}
            <div className="absolute top-0 left-0 flex flex-col justify-between h-[255px] w-full items-start shrink-[0] ">
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Line_eswzln.svg"
                alt="line-icon"
              />
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Line_eswzln.svg"
                alt="line-icon"
              />
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Line_eswzln.svg"
                alt="line-icon"
              />
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Line_eswzln.svg"
                alt="line-icon"
              />
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Line_eswzln.svg"
                alt="line-icon"
              />
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Line_eswzln.svg"
                alt="line-icon"
              />
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Line_eswzln.svg"
                alt="line-icon"
              />
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Line_eswzln.svg"
                alt="line-icon"
              />
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Line_eswzln.svg"
                alt="line-icon"
              />
            </div>

            {/* bars */}
            <div className="absolute top-0 left-0 flex justify-between h-[283px] w-full items-end  ">
              {barData.map((bar, index) => {
                return <BarAndMonth {...bar} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesTrend;
