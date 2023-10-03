import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUser, AiOutlineHome } from "react-icons/ai";
import { MdOutlineMenuBook, MdOutlineRealEstateAgent } from "react-icons/md";
import { ImLibrary } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import SearchModal from "./SearchModal";
import { useRouter } from "next/router";
import { MdPayment } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [isShowSearchBox, setIsShowSearchBox] = useState<boolean>(false);
  const { pathname } = useRouter();
  const [showProfileAccordion, setShowProfileAccordion] = useState(false);

  const linksNavbar = [
    {
      id: 1,
      text: "صفحه اصلی",
      route: "/",
      icon: <AiOutlineHome className="text-[18px]" />,
    },
    {
      id: 3,
      text: "منو",
      route: "/menu",
      icon: <MdOutlineMenuBook className="text-[18px]" />,
    },
    {
      id: 2,
      text: "شعبه",
      route: "/branch",
      icon: <ImLibrary className="text-[18px]" />,
    },
    {
      id: 4,
      isActive: true,
      text: "اعطای نمایندگی",
      route: "/franchise",
      icon: <MdOutlineRealEstateAgent className="text-[18px]" />,
    },
    {
      id: 5,
      isActive: true,
      text: "درباره ما",
      route: "/about-us",
      icon: <FiUsers className="text-[18px]" />,
    },
    {
      id: 6,
      isActive: true,
      text: "تماس باما",
      route: "/contact-us",
      icon: <LuPhoneCall className="text-[18px]" />,
    },
  ];

  const linkProfile = [
    {
      id: 1,
      text: "پروفایل",
      url: "/profile",
      route: "/",
      icon: <AiOutlineUser className="text-[14px]" />,
    },
    {
      id: 2,
      text: "پیگیری سفارشات",
      url: "/profile/ordersTrack",
      route: "/ordersTrack",
      icon: <MdPayment className="text-[14px]" />,
    },
    {
      id: 3,
      text: "علاقه مندی ها",
      url: "/profile/favoites",
      route: "/favoites",
      icon: <BiSolidUser className="text-[14px]" />,
    },
    {
      id: 4,
      text: "آدرس های من",
      url: "/profile/address",
      route: "/address",
      icon: <GoLocation className="text-[14px]" />,
    },
  ];
  return (
    <div className="w-full py-[8px] md:px-[54px] md:py-[16px]">
      <div className="flex items-center justify-between overflow-x-hidden">
        <div
          className="sm:hidden cursor-pointer pr-[20px] text-primary text-[24px]"
          onClick={() => setIsShowMenu(true)}
        >
          <BiMenu />
        </div>
        <div className={`${isShowMenu ? "hidden" : "flex"} sm:hidden`}></div>
        <Link href="/">
          <Image
            width={100}
            height={50}
            alt="logo image"
            src="/Images/logos/Logo.png"
          />
        </Link>

        <div
          onClick={() => setIsShowMenu(false)}
          className={`${
            isShowMenu &&
            "w-[100%] h-[100%] sm:bg-white flex closeMenu z-50 sm:static sm:justify-center top-0 left-0 z-40 duration-300"
          } duration-300 transition`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`gap-2 w-[256px] sm:w-fit z-50 sm:gap-4 flex flex-col sm:bg-white sm:text-[#717171] text-white duration-500 transition sm:flex-row fixed sm:static h-[100%] sm:h-fit sm:bg-none top-0 bg-white sm:translate-x-0 ${
              isShowMenu
                ? "translate-x-0 right-0 top-0"
                : "translate-x-[100%] right-0 top-0"
            }`}
          >
            <div
              className={`bg-menueImage bg-center w-[100%] h-[94px] sm:hidden`}
            >
              <img
                src="./Images/logos/LogoWhite.png"
                className="w-[63px] h-[30px] mt-[32px] mr-[18px] right-7"
                alt=""
              />
            </div>
            {linksNavbar.map((item) => (
              <>
                <div
                  className={`sm:text-primary group px-[16px] sm:px-0 link-navbar text-black ${
                    item.route === pathname && "text-primary font-bold"
                  }`}
                >
                  <Link
                    href={item.route}
                    className="flex items-center gap-2 mt-[8px] border-b sm:border-none border-gray-4 pb-1"
                  >
                    <div
                      className={`${isShowMenu ? "block" : "hidden"} sm:hidden`}
                    >
                      {item.icon}
                    </div>
                    <div
                      onClick={() => setIsShowMenu(false)}
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
          <div
            className="text-[24px] cursor-pointer hover:bg-primary duration-300 bg-tint-1 p-1 rounded-8 hidden md:block text-primary"
          >
            <BiSearchAlt
              onClick={() => setIsShowSearchBox(true)}
              className="hover:text-white duration-300"
            />
          </div>
          <Link
            className="text-[24px] hover:bg-primary duration-300 bg-tint-1 p-1 rounded-8 "
            href="/cart"
          >
            <HiOutlineShoppingCart className=" hover:text-white text-primary duration-300" />
          </Link>
          <div
            onClick={() => setShowProfileAccordion((prev) => !prev)}
            className={`text-[24px] flex items-center cursor-pointer hover:bg-primary duration-300 bg-tint-1 p-1 rounded-8 text-primary`}
          >
            <AiOutlineUser className="duration-300 hover:text-white" />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`absolute bg-white rounded-4 md:left-12 p-2 left-1 shadow-drop-shadow-4 top-10 md:top-12 z-50 text-center text-[12px] flex-col gap-3 items-start ${
              showProfileAccordion ? "flex" : "hidden"
            }`}
          >
            {linkProfile.map((item) => (
              <Link
                href={item.url}
                className={`flex hover:text-primary items-center cursor-pointer gap-1 ${
                  item.url === pathname && "text-primary font-bold"
                }`}
              >
                {item.icon}
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
          <div
            onClick={() => setShowProfileAccordion(false)}
            className={` w-[100%] h-[100%] z-20 absolute top-0 right-0 
              ${showProfileAccordion ? "block" : "hidden"}
            `}
          ></div>
        </div>
      </div>
      {isShowSearchBox && <SearchModal setShow={setIsShowSearchBox} />}
    </div>
  );
};

export default Header;
