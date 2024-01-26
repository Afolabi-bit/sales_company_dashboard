import React from "react";

const PlatformProgress = ({ name, amount, growth, progressBg, width }) => {
  return (
    <div className="w-full">
      <h4 className="text-[18px] font-semibold leading-[26px] text-[#22242c] ">
        {name}
      </h4>
      <div className="w-full h-[12px] rounded-[40px] bg-[#f5f5f5] my-[12px] ">
        <p
          style={{
            background: `${progressBg}`,
            width: `${width}px`,
            height: "12px",
            borderRadius: "40px",
          }}
        ></p>
      </div>
      <div className="flex justify-between">
        <p className="text-[18px] font-normal leading-[26px] text-[#525252] ">
          ${amount}
        </p>
        <p className="text-[18px] font-normal leading-[26px] text-[#525252]">
          {growth}
        </p>
      </div>
    </div>
  );
};

export default PlatformProgress;
