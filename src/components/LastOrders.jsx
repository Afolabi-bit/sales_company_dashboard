import React from "react";
import { orders } from "../data";

const Orders = ({ url, name, date, amount, status }) => {
  return (
    <div className="flex justify-between items-center self-stretch pt-[10px] border-t-[1px] border-[#EDF2F6]">
      {/* Profile-pic and Name */}
      <div className="w-[216px] flex items-center gap-[10px]">
        <div className="w-[32px] h-[32px] rounded-[33px]">
          <img src={url} alt="profile-picture" className="w-full h-full" />
        </div>
        <p className="text-[16px] font-medium leading-[24px] text-[#3A3F51]">
          {name}
        </p>
      </div>

      {/* Date */}
      <div className="w-[116px]">
        <p className="text-[16px] leading-[24px] text-[#737373]">{date}</p>
      </div>

      {/* Amount */}
      <div className="w-[120px]">
        <p className="text-[16px] font-medium leading-[24px] text-[#0D062D]">
          ${amount}
        </p>
      </div>

      {/* Status */}
      <div className="w-[95px]">
        {status == "Paid" ? (
          <p className="text-[16px] leading-[24px] text-[#34caa5]">{status}</p>
        ) : (
          <p className="text-[16px] leading-[24px] text-[#ED544E]">{status}</p>
        )}
      </div>

      {/* Invoice */}
      <button className="w-[80px] flex gap-[6px] items-center">
        <img
          src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102331/asset/vuesax_outline_document-download_tscoer.svg"
          alt="download-icon"
        />
        <span className="text-[#0D062D] text-[14px] leading-[22px] font-normal">
          View
        </span>
      </button>
    </div>
  );
};

const LastOrders = () => {
  return (
    <section className="max-w-[806px] h-[422px] bg-white rounded-[14px] border-m py-[15px] px-[17px]">
      {/* Heading */}
      <div className="flex flex-col gap-[14px]">
        <div className="flex items-center justify-between">
          <h2 className="text-[#26282C] text-[18px] font-[600] leading-[26px] ">
            Last Orders
          </h2>

          <button className="text-[#34caa5] text-[18px] font-medium leading-[26px] text-center ">
            See All
          </button>
        </div>
        <div className="flex w-[766px] justify-between items-start mb-[14px]">
          <p className="text-[16px] font-medium leading-[24px] text-[#9ca4ab] w-[216px]">
            Name
          </p>
          <p className="text-[16px] font-medium leading-[24px] text-[#9ca4ab] w-[116px]">
            Date
          </p>
          <p className="text-[16px] font-medium leading-[24px] text-[#9ca4ab] w-[120px]">
            Amount
          </p>
          <p className="text-[16px] font-medium leading-[24px] text-[#9ca4ab] w-[95px]">
            Status
          </p>
          <p className="text-[16px] font-medium leading-[24px] text-[#9ca4ab] w-[80px]">
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
