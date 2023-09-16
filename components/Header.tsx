import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu, BiSearchAlt } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

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
            className={`gap-2 z-50 md:gap-4 flex flex-col md:bg-white md:text-[#717171] text-white p-[20px] duration-500 transition md:flex-row fixed h-[100vh] md:h-fit md:bg-none top-0 bg-tint-7 md:relative pt-5 md:translate-x-0 ${
              isShowMenu
                ? "translate-x-0 right-0 top-0"
                : "translate-x-[100%] right-0 top-0"
            }`}
          >
            <Link
              href="/"
              className="text-white md:text-primary font-bold link-navbar"
            >
              صفحه اصلی
            </Link>
            <Link className="flex link-navbar items-center" href="/">
              شعبه
              <MdKeyboardArrowDown />
            </Link>
            <Link className="flex link-navbar items-center" href="/">
              منو
              <MdKeyboardArrowDown />
            </Link>
            <Link className="link-navbar" href="/">
              اعطای نمایندگی
            </Link>
            <Link className="link-navbar" href="/">
              درباره ما
            </Link>
            <Link className="link-navbar" href="/">
              تماس با ما
            </Link>
          </div>
        </div>

        <div className="pl-[20px] flex items-center gap-2">
          <Link
            className="text-[24px] duration-300 bg-tint-1 p-1 rounded-8 hidden md:block text-primary"
            href="/"
          >
            <BiSearchAlt className="icon-navbar duration-300" />
          </Link>
          <Link
            className="text-[24px] duration-300 bg-tint-1 p-1 rounded-8 text-primary"
            href="/"
          >
            <HiOutlineShoppingCart className="icon-navbar duration-300" />
          </Link>
          <Link
            className="text-[24px] duration-300 bg-tint-1 p-1 rounded-8 text-primary"
            href="/"
          >
            <AiOutlineUser className="icon-navbar duration-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
