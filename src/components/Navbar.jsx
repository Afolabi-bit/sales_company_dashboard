import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [date, setDate] = useState({ d: 0, m: "", y: 0 });
  const [search, setSearch] = useState(false);
  let today;

  function getToday() {
    const dateObject = new Date();
    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    let year = dateObject.getFullYear();

    const monthArray = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    today = {
      d: day,
      m: monthArray[month],
      y: year,
    };
  }
  getToday();

  useEffect(() => {
    setDate((date) => today);
  }, []);

  function openForm() {
    setSearch(true);
  }

  function closeForm() {
    setSearch(false);
  }

  function togglePopup() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active-menu");
    console.log(nav);
  }

  return (
    <nav
      id="nav"
      className="relative nav px-[10px] flex items-center justify-between h-[70px] w-full"
    >
      <a href="#">
        <img
          src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102321/asset/vector_hf8x4v.png"
          alt="logo-icon"
        />
      </a>

      {!search && (
        <div className="flex items-center gap-[10px]">
          <div className="flex gap-[15px] items-center md:w-4/5  lg:w-[253px]">
            <div className="flex gap-[5px] items-center">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102317/asset/solar_calendar-linear_z4y9iu.svg"
                }
                alt=""
                className="w-[20px] h-[20px] scale-[.7]"
              />
              <p className="text-[10px] font-[500] inter ">
                <span>{date.m.slice(0, 3)}</span> <span>{date.d}</span>
                {", "}
                <span>{date.y}</span>
              </p>
            </div>

            <button
              className=" hover:bg-[#edf2f7] transition border-m p-[10px] flex justify-center items-center rounded-[100%] "
              onClick={() => openForm()}
            >
              <img
                src="https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Icon_-_Search_sonviw.svg"
                alt="search-icon"
              />
            </button>

            {/* Notification Button */}
            <button
              onClick={() => setSearch(true)}
              className="w-[40px] h-[40px] rounded-[27px] border-m p-[11px] flex justify-center items-center gap-[6px] cursor-pointer hover:bg-[#edf2f7] transition "
            >
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706211829/solar_bell-outline_zgxjyz.svg"
                }
                alt=""
              />
            </button>
          </div>

          <button
            className="w-[40px] h-[40px] text-right flex justify-center border-m items-center hover:bg-[#edf2f7] transition z-0"
            onClick={() => {
              togglePopup();
            }}
          >
            <img
              src="https://res.cloudinary.com/dkpoealta/image/upload/v1706375932/icons8-menu-50_jaa2ra.png"
              alt="menu"
              className="w-[30px] h-[30px]"
            />
          </button>
        </div>
      )}

      {search && (
        <form className="absolute w-[240px] right-[10px] h-[48px] pr-[16px] gap-[8px] flex items-center border-m bg-white rounded-[24px] ">
          <input
            type="text"
            className="outline-none w-full pl-[13px]  border-none  bg-transparent "
            placeholder="Search"
          />
          <button
            className="w-[32px] h-[32px] px-[10px]"
            onClick={() => closeForm()}
          >
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706374642/icons8-cancel-50_2_xbn4aw.png"
              }
              alt="search icon"
              className="w-full h-full object-cover scale-[1.3] translate-x-[7px]"
            />
          </button>
        </form>
      )}

      {/* Popup */}
      <div className="popup absolute px-[50px] py-[50px] pt-[80px] top-[-1300%] left-0 w-screen h-screen bg-[var(--sidebar-bg)] z-50 flex justify-between  flex-col items-center">
        <button
          className="absolute top-[10px] right-[10px] w-[50px] h-[50px] p-[15px] border-m rounded-[10px] hover:bg-[#edf2f7]"
          onClick={() => {
            togglePopup();
          }}
        >
          <img
            src="https://res.cloudinary.com/dkpoealta/image/upload/v1706374642/icons8-cancel-50_2_xbn4aw.png"
            alt="close-icon"
            className="scale-[1.6]"
          />
        </button>

        <div className="flex flex-col">
          <div className="flex gap-[20px] flex-wrap justify-center">
            <button className="flex justify-center items-center rounded-[10px]  border-m w-[70px] h-[70px] hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102327/asset/vuesax_broken_trend-up_fnbz2s.svg"
                }
                alt="logo"
              />
            </button>

            <button className="flex justify-center items-center rounded-[10px]  border-m w-[70px] h-[70px] hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102325/asset/vuesax_broken_profile-2user_rg0tos.svg"
                }
                alt="logo"
              />
            </button>

            <button className="flex justify-center items-center rounded-[10px]  border-m w-[70px] h-[70px] hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102322/asset/vuesax_broken_box_yldp8f.svg"
                }
                alt="logo"
              />
            </button>

            <button className="flex justify-center items-center  rounded-[10px] border-m w-[70px] h-[70px] hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102323/asset/vuesax_broken_discount-shape_du1shb.svg"
                }
                alt="logo"
              />
            </button>

            <button className="flex justify-center items-center rounded-[10px]  border-m w-[70px] h-[70px] hover:bg-[#edf2f7] transition py-[10px] lg:py-[4px]">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102324/asset/vuesax_broken_info-circle_xrri9h.svg"
                }
                alt="logo"
              />
            </button>
          </div>

          <div className="flex gap-[30px] justify-center mt-[50px]">
            <button className="py-[10px] lg:py-[4px]">
              <div className="bg-[var(--green)] w-[30px] px-[7.5px] py-[6.5px] rounded-[94px] items-center h-[30px] ">
                <img
                  src={
                    "https://res.cloudinary.com/dkpoealta/image/upload/v1706102307/asset/brightness_1_crjkki.svg"
                  }
                  alt="logo"
                />
              </div>
            </button>

            <button className="py-[10px] lg:py-[4px]">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102316/asset/moon_1_mgtyfy.svg"
                }
                alt="logo"
              />
            </button>
          </div>
        </div>

        <div className="flex gap-[10px] ">
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
    </nav>
  );
};

export default Navbar;
