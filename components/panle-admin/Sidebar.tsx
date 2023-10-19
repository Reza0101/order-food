import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const pagesLink = [
    { id: 1, text: "غذا ها", route: '/panel-admin/products' },
    { id: 2, text: "کاربران", route: '/panel-admin/users' },
    { id: 3, text: "کد تخفیف", route: '/panel-admin/' },
    { id: 4, text: "فروش سایت", route: '/panel-admin/' },
  ];
  return (
    <>
      <div
        className={`md:p-[5px]  absolute z-50 bg-white sm:w-max md:relative shadow-drop-shadow-4 h-[100vh] md:translate-x-[0] duration-300 ${
          showSidebar
            ? "translate-x-0 p-[5px]"
            : "translate-x-[100%] w-0"
        }`}
      >
        <p
          onClick={() => setShowSidebar((prev) => !prev)}
          className={`absolute top-20 md:hidden cursor-pointer right-9 ${
            showSidebar && "hidden"
          }`}
        >
          <GiHamburgerMenu />
        </p>

        <div className="p-2">
          <img src="/Images/Logos/logo.png" className="my-5 mx-auto" alt="" />
          <div
            className={`flex flex-col items-start px-[10px] text-[18px] mt-10 gap-4 ${
              showSidebar ? "flex" : "hidden"
            } md:flex`}
          >
            {pagesLink.map((item) => (
              <Link key={crypto.randomUUID()} onClick={() => setShowSidebar(false)} href={item.route}  className="cursor-pointer hover:text-primary hover:font-bold">
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`md:hidden w-[100%] h-[100%] absolute bg-black opacity-[.5] ${
          !showSidebar && "hidden"
        }`}
      ></div>
    </>
  );
};
export default Sidebar;
