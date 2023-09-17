import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import {
  MdKeyboardArrowDown,
  MdOutlineMenuBook,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { ImLibrary } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const linksNavbar = [
    {
      id: 1,
      text: "صفحه اصلی",
      icon: <AiOutlineHome className="text-[18px]" />,
    },
    {
      id: 3,
      text: "منو",
      icon: <MdOutlineMenuBook className="text-[18px]" />,
      underMenu: ["غذای اصلی", "پیش غذا", "دسر", "نوشیدنی"],
    },
    {
      id: 2,
      text: "شعبه",
      icon: <ImLibrary className="text-[18px]" />,
      underMenu: ["اکباتان", "چالوس", "اقدسیه", "ونک"],
    },
    {
      id: 4,
      text: "اعطای نمایندگی",
      icon: <MdOutlineRealEstateAgent className="text-[18px]" />,
    },
    { id: 5, text: "درباره ما", icon: <FiUsers className="text-[18px]" /> },
    { id: 6, text: "تماس باما", icon: <LuPhoneCall className="text-[18px]" /> },
  ];

  return (
    <div className="w-full py-[8px] md:px-[54px] md:py-[16px]">
      <div className="flex items-center justify-between overflow-x-hidden">
        <div
          className="md:hidden cursor-pointer pr-[20px] text-primary text-[24px]"
          onClick={() => setIsShowMenu(true)}
        >
          <BiMenu />
        </div>
        <div className={`${isShowMenu ? "hidden" : "flex"} md:hidden`}></div>
        <Link href="/">
          <Image
            width={100}
            height={50}
            alt="logo image"
            src="/Images/Logo.png"
          />
        </Link>

        <div
          onClick={() => setIsShowMenu(false)}
          className={`${
            isShowMenu &&
            "w-[100%] h-[100vh] flex closeMenu absolute top-0 left-0 z-40 duration-300"
          } duration-300 transition`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`gap-2 w-[256px] md:w-fit z-50 md:gap-4 flex flex-col md:bg-white md:text-[#717171] text-white duration-500 transition md:flex-row fixed h-[100vh] md:h-fit md:bg-none top-0 bg-white md:relative md:translate-x-0 ${
              isShowMenu
                ? "translate-x-0 right-0 top-0"
                : "translate-x-[100%] right-0 top-0"
            }`}
          >
            <div
              className={`bg-menueImage bg-center w-[100%] h-[94px] md:hidden`}
            >
              <img
                src="./Images/LogoWhite.png"
                className="w-[63px] h-[30px] mt-[32px] mr-[18px] right-7"
                alt=""
              />
            </div>
            {linksNavbar.map((item) => (
              <>
                <div className="md:text-primary group px-[16px] md:px-0 link-navbar text-black">
                  <Link
                    href="/"
                    className="flex items-center gap-2 mt-[8px] border-b md:border-none border-gray-4 pb-1"
                  >
                    <div className={isShowMenu ? "block" : "hidden"}>
                      {item.icon}
                    </div>
                    <div
                      onClick={() => setIsShowMenu(false)}
                      className="flex items-center h-[22px] w-full "
                    >
                      {item.text}
                      {item.underMenu && <MdKeyboardArrowDown />}
                    </div>
                  </Link>
                  {item.underMenu && (
                    <>
                      <div className="hidden  items-start bottom-0 group-hover:flex flex-col bg-white gap-1 p-2 justify-center">
                        {item.underMenu?.map((item) => (
                          <div className="flex items-center flex-row-reverse">
                            <div>
                              <Link
                                onClick={() => setIsShowMenu(false)}
                                href="/"
                                className="text-gray-7 hover:text-primary pb-2 text-[12px] w-full"
                              >
                                {item}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="pl-[20px] flex items-center gap-2">
          <Link
            className="text-[24px] hover:bg-primary duration-300 bg-tint-1 p-1 rounded-8 hidden md:block text-primary"
            href="/"
          >
            <BiSearchAlt className="hover:text-white duration-300" />
          </Link>
          <Link
            className="text-[24px] hover:bg-primary duration-300 bg-tint-1 p-1 rounded-8 text-primary"
            href="/"
          >
            <HiOutlineShoppingCart className=" hover:text-white duration-300" />
          </Link>
          <Link
            className="text-[24px] hover:bg-primary duration-300 bg-tint-1 p-1 rounded-8 text-primary"
            href="/"
          >
            <AiOutlineUser className="duration-300 hover:text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
