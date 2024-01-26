import React, { useEffect, useState } from "react";

const Header = () => {
  const [date, setDate] = useState({ d: 0, m: "", y: 0 });
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

  return (
    <>
      <header className="flex h-[70px] gap-[18px] self-stretch-0 items-center justify-between px-[18px]">
        <div className="w-[806px] h-full flex justify-between items-center ">
          {/* Search */}
          <h2 className="text-[20px] font-[600] leading-[28px]">Dashboard</h2>
          <form className="h-[48px] w-[333px] pl-[16px] gap-[8px] flex items-center border-m bg-white rounded-[24px]  ">
            <img
              src={
                "https://res.cloudinary.com/dkpoealta/image/upload/v1706102315/asset/Icon_-_Search_sonviw.svg"
              }
              alt="search icon"
            />
            <input
              type="text"
              className="outline-none w-full pr-[10px] border-none bg-transparent "
              placeholder="Search"
            />
          </form>
        </div>

        {/* Profile */}
        <div className="w-[404px] h-full flex gap-[15px] items-center cursor-pointer ">
          <div className="flex gap-[15px] w-[253px] items-center ">
            {/* Calender */}
            <div className="flex gap-[10px]">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102317/asset/solar_calendar-linear_z4y9iu.svg"
                }
                alt=""
                className="w-[20px] h-[20px]"
              />
              <p className="text-[14px] font-[500] inter ">
                <span>{date.m}</span> <span>{date.d}</span>
                {", "}
                <span>{date.y}</span>
              </p>
            </div>
            <button className="w-[40px] h-[40px] rounded-[27px] border-m p-[11px] flex justify-center items-center gap-[6px] ">
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706211829/solar_bell-outline_zgxjyz.svg"
                }
                alt=""
              />
            </button>
          </div>

          <div className="border-m w-[199px] rounded-[28px] gap-[12px] py-[6px] px-[8px] flex justify-center items-center ">
            <div className="flex items-center gap-[8px] ">
              <div className="h-[38px] w-[38px]">
                <img
                  src={
                    "https://res.cloudinary.com/dkpoealta/image/upload/v1706102317/asset/Rectangle_1061pfp_u4mfcz.png"
                  }
                  alt="profile"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[14px] font-normal text-[var(--profile-name-color)] text-right ">
                  Justin Bergson
                </h3>
                <p className="text-[var(--profile-email-color)] text-[12px] text-right ">
                  Justin@gmail.com
                </p>
              </div>
            </div>
            <button>
              <img
                src={
                  "https://res.cloudinary.com/dkpoealta/image/upload/v1706102307/asset/Arrow_-_Down_2_gezvup.svg"
                }
                alt="dropdown icon"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Horizontal line */}
      <div className="h-[1px] w-full bg-[var(--header-line-bg)] "></div>
    </>
  );
};

export default Header;
