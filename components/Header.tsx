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
import SearchModal from "./SearchModal";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [isShowSearchBox, setIsShowSearchBox] = useState<boolean>(false) 


  const linksNavbar = [
    {
      id: 1,
      text: "صفحه اصلی",
      isActive: true,
      icon: <AiOutlineHome className="text-[18px]" />,
    },
    {
      id: 3,
      text: "منو",
      icon: <MdOutlineMenuBook className="text-[18px]" />,
    },
    {
      id: 2,
      text: "شعبه",
      icon: <ImLibrary className="text-[18px]" />,
    },
    {
      id: 4,
      isActive: true,
      text: "اعطای نمایندگی",
      icon: <MdOutlineRealEstateAgent className="text-[18px]" />,
    },
    {
      id: 5,
      isActive: true,
      text: "درباره ما",
      icon: <FiUsers className="text-[18px]" />,
    },
    {
      id: 6,
      isActive: true,
      text: "تماس باما",
      icon: <LuPhoneCall className="text-[18px]" />,
    },
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
            "w-[100%] h-[100%] flex closeMenu md:static top-0 left-0 z-40 duration-300"
          } duration-300 transition`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`gap-2 w-[256px] md:w-fit z-50 md:gap-4 flex flex-col md:bg-white md:text-[#717171] text-white duration-500 transition md:flex-row fixed md:static h-[100%] md:h-fit md:bg-none top-0 bg-white md:translate-x-0 ${
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
                      onClick={() => item.isActive && setIsShowMenu(false)}
                      className="flex items-center h-[22px] w-full "
                    >

                      {item.text}
                    </div>
                  </Link>
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
            <BiSearchAlt onClick={() => setIsShowSearchBox(true)} className="hover:text-white duration-300" />
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
      {
        isShowSearchBox && <SearchModal setShow={setIsShowSearchBox} />
      }
    </div>
  );
};

export default Header;
