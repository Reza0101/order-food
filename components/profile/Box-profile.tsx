import { AiOutlineUser } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { RxExit } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/router";

const BoxProfile = () => {
  const { pathname } = useRouter();
  console.log(pathname);

  const linkProfile = [
    {
      id: 1,
      text: "پروفایل",
      route: "/profile",
      icon: <AiOutlineUser className="text-[24px]" />,
    },
    {
      id: 2,
      text: "پیگیری سفارشات",
      route: "/ordersTrack",
      icon: <MdPayment className="text-[24px]" />,
    },
    {
      id: 3,
      text: "علاقه مندی ها",
      route: "/favoites",
      icon: <BiSolidUser className="text-[24px]" />,
    },
    {
      id: 4,
      text: "آدرس های من",
      route: "/address",
      icon: <GoLocation className="text-[24px]" />,
    },
  ];

  return (
    <div className="border m-5 w-[280px] h-[342px] border-gray-4 rounded-4 p-2">
      <div className="flex my-4 items-center gap-3 justify-start">
        <img src="./Images/profile.png" className="w-[80px]" alt="" />
        <div className="flex flex-col gap-2">
          <p className="text-[16px]">سردار وظیفه</p>
          <p className="text-[12px]">09145566268</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-3 mt-5">
        {linkProfile.map((item) => (
          <div
            className={`flex items-center gap-1 ${
              item.route === pathname &&
              "border-primary text-primary font-[700]"
            }`}
          >
            {item.icon}
            <Link href={`/profile${item.route}`}>{item.text}</Link>
          </div>
        ))}
        <Link className="flex items-center gap-1 text-error" href="/">
          <RxExit className="rotate-180" />
          <p>خروج</p>
        </Link>
      </div>
    </div>
  );
};

export default BoxProfile;
