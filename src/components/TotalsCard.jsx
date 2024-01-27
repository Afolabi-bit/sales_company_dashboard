import React from "react";

const TotalsCard = ({ card }) => {
  return (
    <div className=" h-[182px] p-[10px] items-center inline-flex flex-col justify-between rounded-[14px] border-m bg-white w-[calc(50%_-_5px)] lg:w-[197px] ">
      <div className="w-full flex justify-between items-center">
        <img src={card.icon} alt="icon" />
        <img
          src={
            card.status == "danger"
              ? "https://res.cloudinary.com/dkpoealta/image/upload/v1706102313/asset/Group_3_1_kuajby.svg"
              : "https://res.cloudinary.com/dkpoealta/image/upload/v1706102314/asset/Group_3_yvkprq.svg"
          }
          alt="icon"
          className="scale-[0.7] lg:scale-[1]"
        />
      </div>

      {/*  */}
      <div className="text-left w-full">
        <p className=" font-[500] md:text-[15px] lg:text-[18px]">
          {card.title}
        </p>
        <h3 className=" font-[600] md:text-[24px] lg:text-[24px]">
          {card.data}
        </h3>
      </div>

      {/*  */}
      <div className="flex items-center">
        <span
          className={
            card.status == "danger"
              ? "text-[#ed544e] bg-[#ED544E1F] flex justify-center items-center gap-[4px] px-[8px] py-[4px] rounded-[1000px] "
              : "text-[#34CAA5] bg-[#34CAA51F] flex justify-center items-center gap-[4px] px-[8px] py-[4px] rounded-[1000px] "
          }
        >
          <img
            src={
              card.status == "danger"
                ? "https://res.cloudinary.com/dkpoealta/image/upload/v1706102319/asset/trending-up_insmnr.svg"
                : "https://res.cloudinary.com/dkpoealta/image/upload/v1706102319/asset/trending-up_1_yonhyl.svg"
            }
            alt="icon"
            className="scale-[0.8] lg:scale-[1]"
          />
          {"  "}
          <span className=" font-[500] text-[10px] lg:text-[12px]">23.5%</span>
        </span>
        {"  "}
        <span className="ml-[2px]  inter text-[#606060] text-[8px] md:text-[10px] lg:text-[11px]">
          {" "}
          vs. previous month
        </span>
      </div>
    </div>
  );
};

export default TotalsCard;
