import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const pagesLink = [
    { id: 1, text: "محصولات" },
    { id: 2, text: "کاربران" },
    { id: 3, text: "کد تخفیف" },
    { id: 4, text: "فروش سایت" },
  ];
  return (
    <>
      <div
        className={`md:p-[5px]  absolute z-50 bg-white md:relative shadow-drop-shadow-4 h-[100vh] md:translate-x-[0] duration-300 ${
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
              <p className="cursor-pointer hover:text-primary hover:font-bold">
                {item.text}
              </p>
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
