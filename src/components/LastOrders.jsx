import React from "react";
import { orders } from "../data";

const Orders = ({ url, name, date, amount, status }) => {
  return (
    <div className="flex justify-between items-center self-stretch pt-[10px] border-t-[1px] border-[#EDF2F6]">
      {/* Profile-pic and Name */}
      <div className="w-[35%] lg:w-[216px] flex items-center gap-[5px] md:gap-[10px] md:w-[190px] ">
        <div className="w-[20px] h-[20px] md:w-[32px] md:h-[32px] rounded-[33px]">
          <img
            src={url}
            alt="profile-picture"
            className="w-full h-full object-contain object-center"
          />
        </div>
        <p className=" text-[8px] lg:text-[16px] font-medium leading-[24px] text-[#3A3F51] md:text-[14px]">
          {name}
        </p>
      </div>

      {/* Date */}
      <div className="w-1/5 lg:w-[116px] md:w-[90px] ">
        <p className="text-[6px] lg:text-[16px] leading-[24px] text-[#737373] md:text-[12px] ">
          {date}
        </p>
      </div>

      {/* Amount */}
      <div className="w-1/5 lg:w-[120px] md:w-[100px]">
        <p className="text-[8px] lg:text-[16px] font-medium leading-[24px] text-[#0D062D] md:text-[14px] ">
          ${amount}
        </p>
      </div>

      {/* Status */}
      <div className="w-1/5 lg:w-[95px] md:w-[80px]">
        {status == "Paid" ? (
          <p className="text-[10px] lg:text-[16px] leading-[24px] text-[#34caa5] md:text-[14px] ">
            {status}
          </p>
        ) : (
          <p className="text-[10px] lg:text-[16px] leading-[24px] text-[#ED544E] md:text-[14px] ">
            {status}
          </p>
        )}
      </div>

      {/* Invoice */}
      <button className="w-1/5 py-[3px] md:w-[80px] md:py-[5px] translate-x-[-5px] rounded-[5px] flex gap-[6px] justify-center items-center hover:bg-[#edf2f7] transition">
        <img
          src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102331/asset/vuesax_outline_document-download_tscoer.svg"
          alt="download-icon"
        />
        <span className="text-[#0D062D] text-[8px] md:text-[14px] leading-[22px] font-normal">
          View
        </span>
      </button>
    </div>
  );
};

const LastOrders = () => {
  return (
    <section className="p-[10px] h-[422px] bg-white rounded-[14px] border-m md:py-[15px] md:px-[17px] w-full lg:max-w-[806px]">
      {/* Heading */}
      <div className="flex flex-col gap-[14px]">
        {/* Heading */}
        <div className="flex items-center justify-between">
          <h2 className="text-[#26282C] text-[15px] md:text-[18px] font-[600] leading-[26px] ">
            Last Orders
          </h2>

          <button className="text-[#34caa5] text-[13px] md:text-[18px] font-medium leading-[26px] py-[3px] px-[10px] rounded-[27px] text-center hover:bg-[#34CAA51F] transition">
            See All
          </button>
        </div>

        {/* Column Headings */}
        <div className="flex  justify-between items-start mb-[14px] w-full ">
          <p className="text-[11px] w-[35%] md:text-[16px] font-medium leading-[24px] text-[#9ca4ab]  lg:w-[216px]  md:w-[190px] ">
            Name
          </p>
          <p className="text-[11px] w-1/5 md:text-[16px] font-medium leading-[24px] text-[#9ca4ab] lg:w-[116px]  md:w-[90px]">
            Date
          </p>
          <p className="text-[11px] w-1/5 md:text-[16px] font-medium leading-[24px] text-[#9ca4ab] lg:w-[120px]  md:w-[100px]">
            Amount
          </p>
          <p className="text-[11px] w-1/5 md:text-[16px] font-medium leading-[24px] text-[#9ca4ab] lg:w-[95px]  md:w-[80px]">
            Status
          </p>
          <p className="text-[11px] w-1/5 md:text-[16px] font-medium leading-[24px] text-[#9ca4ab] lg:w-[80px]  md:w-[80px]">
            Invoice
          </p>
        </div>
      </div>

      {/* Orders */}
      <div className="flex flex-col gap-[16px]">
        {orders.map((order, index) => {
          return <Orders key={index} {...order} />;
        })}
      </div>
    </section>
  );
};

export default LastOrders;
