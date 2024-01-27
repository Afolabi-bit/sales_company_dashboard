import React from "react";
import { topPlatforms } from "../data";
import PlatformProgress from "./PlatformProgress";

const TopPlatforms = () => {
  return (
    <div className="w-full p-[10px] border-m lg:w-[404px] h-[494px] bg-white inline-flex flex-col items-start gap-[20px] md:pl-[16px] md:pt-[16px] md:pr-[32px] md:pb-[20px] rounded-[8px] md:w-[calc(50%_-_9px)]">
      {/* Heading */}
      <div className="flex justify-between w-full">
        <h3 className="text-[15px] md:text-[18px] font-semibold leading-[26px]">
          Top Platforms
        </h3>
        <button className="text-[13px] md:text-[18px] font-medium leadiing-[26px] text-[#34caa5] leading-[26px] py-[3px] px-[10px] rounded-[27px] text-center hover:bg-[#34CAA51F] transition">
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
  );
};

export default TopPlatforms;
