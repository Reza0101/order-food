import { AiOutlineUser } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalExit from "./ModalExit";
import { useSelector } from "react-redux";

const BoxProfile = () => {
  const { pathname } = useRouter();
  const [showModalExit, setShowModalExit] = useState(false);
  const userData = useSelector((state: any) => state.user);
  const data = userData?.data[0]?.data;

  const linkProfile = [
    {
      id: 1,
      text: "پروفایل",
      url: "/profile",
      route: "/",
      icon: <AiOutlineUser className="text-[24px]" />,
    },
    {
      id: 2,
      text: "پیگیری سفارشات",
      url: "/profile/ordersTrack",
      route: "/ordersTrack",
      icon: <MdPayment className="text-[24px]" />,
    },
    {
      id: 3,
      text: "علاقه مندی ها",
      url: "/profile/favoites",
      route: "/favoites",
      icon: <BiSolidUser className="text-[24px]" />,
    },
    {
      id: 4,
      text: "آدرس های من",
      url: "/profile/address",
      route: "/address",
      icon: <GoLocation className="text-[24px]" />,
    },
  ];

  return (
    <>
      <div className="border w-[250px] h-[342px] border-gray-4 rounded-4 p-2">
        <div className="flex my-4 items-center gap-3 justify-start">
          <img src="/Images/profile.png" className="w-[80px]" alt="" />
          <div className="flex flex-col gap-2">
            <p className="text-[12px]">{data?.email}</p>
            <p className="text-[12px]">{data?.role === 'admin' ? 'مدیر' : 'کاربر معمولی'}</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 mt-5">
          {linkProfile.map((item) => (
            <div
              key={crypto.randomUUID()}
              className={`flex items-center gap-1 ${
                item.url === pathname &&
                "border-primary text-primary font-[700]"
              }`}
            >
              {item.icon}
              <Link href={`/profile${item.route}`}>{item.text}</Link>
            </div>
          ))}
          <div
            onClick={() => {
              setShowModalExit(true);
              localStorage.removeItem("rememberFood");
            }}
            className="flex cursor-pointer items-center gap-1 text-error"
          >
            <RxExit className="rotate-180" />
            <p>خروج</p>
          </div>
        </div>
      </div>
      {showModalExit && <ModalExit setShow={setShowModalExit} />}
    </>
  );
};

export default BoxProfile;
