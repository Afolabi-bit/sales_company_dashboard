import React from "react";

const TotalsCard = ({ card }) => {
  return (
    <div className="w-[197px] h-[182px] p-[10px] items-center inline-flex flex-col justify-between rounded-[14px] border-m bg-white ">
      <div className="w-full flex justify-between items-center">
        <img src={card.icon} alt="icon" />
        <img
          src={
            card.status == "danger"
              ? "https://res.cloudinary.com/dkpoealta/image/upload/v1706102313/asset/Group_3_1_kuajby.svg"
              : "https://res.cloudinary.com/dkpoealta/image/upload/v1706102314/asset/Group_3_yvkprq.svg"
          }
          alt=""
        />
      </div>

      {/*  */}
      <div className="text-left w-full">
        <p className="text-[18px] font-[500] ">{card.title}</p>
        <h3 className="text-[24px] font-[600]">{card.data}</h3>
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
          />
          {"  "}
          <span className="text-[12px] font-[500]">23.5%</span>
        </span>
        {"  "}
        <span className="ml-[2px] text-[11px] inter text-[#606060]">
          {" "}
          vs. previous month
        </span>
      </div>
    </div>
  );
};

export default TotalsCard;
