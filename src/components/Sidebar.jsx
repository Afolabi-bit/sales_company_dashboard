import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-[80px] relative flex flex-col py-[20px] gap-[10px] items-center shrink-0 border-r-[1px] border-r-[border] bg-[var(--sidebar-bg)]  md:h-[1432px] lg:h-[876px]">
      <div className="flex flex-col gap-[256px] items-center self-stretch relative h-full">
        <div
          id="btn-wrapper"
          className="flex flex-col  items-center self-stretch gap-[25px] lg:gap-[20px]"
        >
          <button className="logo">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102321/asset/vector_hf8x4v.png"
              }
              alt="logo"
            />
          </button>

          <button className="relative  hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102329/asset/vuesax_bulk_category_i7u1ql.svg"
              }
              alt="logo"
            />
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102320/asset/Vector_1_cnrc3k.svg"
              }
              alt=""
              className="absolute right-0 top-[50%] translate-y-[-50%]"
            />
          </button>

          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102327/asset/vuesax_broken_trend-up_fnbz2s.svg"
              }
              alt="logo"
            />
          </button>

          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102325/asset/vuesax_broken_profile-2user_rg0tos.svg"
              }
              alt="logo"
            />
          </button>

          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102322/asset/vuesax_broken_box_yldp8f.svg"
              }
              alt="logo"
            />
          </button>

          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102323/asset/vuesax_broken_discount-shape_du1shb.svg"
              }
              alt="logo"
            />
          </button>

          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102324/asset/vuesax_broken_info-circle_xrri9h.svg"
              }
              alt="logo"
            />
          </button>

          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
            <div className="bg-[var(--green)] w-[30px] px-[7.5px] py-[6.5px] rounded-[94px] items-center h-[30px] ">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102307/asset/brightness_1_crjkki.svg"
                }
                alt="logo"
              />
            </div>
          </button>

          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102316/asset/moon_1_mgtyfy.svg"
              }
              alt="logo"
            />
          </button>
        </div>

        <div className="flex flex-col gap-[20px] items-center w-full absolute md:bottom-[56px]">
          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-0">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102322/asset/vuesax_broken_arrow-right_e7b8ju.svg"
              }
              alt=""
            />
          </button>

          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-0">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102323/asset/vuesax_broken_discount-shape_du1shb.svg"
              }
              alt=""
            />
          </button>

          <button className=" hover:bg-[#edf2f7] transition py-[10px] lg:py-0">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102324/asset/vuesax_broken_logout_n3jfik.svg"
              }
              alt=""
            />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
