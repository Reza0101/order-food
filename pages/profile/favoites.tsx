import Layout from "@/components/Layout";
import SearchBox from "@/components/SearchBox";
import BoxProfile from "@/components/profile/Box-profile";
import Link from "next/link";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import BoxFood from "@/components/Box-food";

const favoites = () => {
  const listFood = ["همه", "غذای اصلی", "پیش غذا", "دسر", "نوشیدنی"];
  const [activeFoodList, setActiveFoodList] = useState("همه");
  const nonIranianFood = [
    {
      id: 1,
      like: true,
      img: "/Images/non-iranian-food/pastasabzigat.png",
      name: "پاستا سبزیجات",
      price: 175000,
      discount: 20,
      star: 5,
      compounds: "پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده",
    },
    {
      id: 2,
      like: true,
      img: "/Images/non-iranian-food/pastabelonez.png",
      name: "پاستا بلونز",
      price: 170000,
      discount: 17,
      star: 4,
      compounds:
        "اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون",
    },
    {
      id: 3,
      like: true,
      img: "/Images/non-iranian-food/ratatoi.png",
      name: "راتاتویی",
      price: 180000,
      discount: 35,
      star: 4,
      compounds:
        "بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان",
    },
    {
      id: 4,
      like: true,
      img: "/Images/non-iranian-food/lazania.png",
      name: "لازانیا",
      price: 150000,
      star: 5,
      compounds:
        "لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان",
    },
    {
      id: 5,
      like: true,
      img: "/Images/non-iranian-food/soshi.png",
      name: "سوشی",
      price: 100000,
      discount: 15,
      star: 4,
      compounds:
        "جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا",
    },
    {
      id: 6,
      like: true,
      img: "/Images/non-iranian-food/pakorasabzigat.png",
      name: "پاکورا سبزیجات",
      price: 125000,
      discount: 8,
      star: 4,
      compounds: "گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده",
    },
    {
      id: 7,
      like: true,
      img: "/Images/non-iranian-food/kalozeesfenag.png",
      name: "کالوزه اسفناج",
      price: 19000,
      discount: 17,
      star: 5,
      compounds:
        "اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون",
    },
    {
      id: 8,
      like: true,
      img: "/Images/non-iranian-food/palakpanir.png",
      name: "پالاک پنیر",
      price: 200000,
      discount: 15,
      star: 4,
      compounds: "پنیر، اسفناج، گوجه، پیاز، سیر ",
    },
  ];
  return (
    <Layout>
      <div className="px-[20px] md:px-[60px] lg:px-[80px] flex items-start gap-5">
        <div className="hidden md:block mt-5">
          <BoxProfile />
        </div>
        <div className="rounded-4 border border-gray-4 p-5 w-full my-5">
          {/* empty address */}

          {/* not empty address */}
          <div className="flex pb-2 items-center justify-center md:justify-between">
            <p className="text-[12px] md:text-[20px]">علاقه مندی ها</p>
          </div>
          <hr />
          <div className="flex items-center mt-5 justify-center gap-3">
            <div className="items-end gap-2 hidden xl:flex">
              {listFood.map((item) => (
                <div
                  onClick={() => setActiveFoodList(item)}
                  className={`flex text-[12px] p-1 cursor-pointer items-center gap-1 rounded-8 ${
                    item === activeFoodList ? "bg-tint-1" : "bg-gray-3"
                  }`}
                >
                  <TiTick
                    className={`${
                      item === activeFoodList ? "block" : "hidden"
                    }`}
                  />
                  <p>{item}</p>
                  <IoIosArrowBack
                    className={`${
                      item === activeFoodList ? "hidden" : "block"
                    }`}
                  />
                </div>
              ))}
            </div>
            <SearchBox />
          </div>
          {/* empty page */}
          <div className="flex w-full h-[350px] items-center justify-center">
            <img
              className="w-[200px] absolute h-[190px] mx-auto"
              src="/Images/empty-page.png"
              alt=""
            />
            <div className="flex absolute px-[10px] z-40 flex-col text-center gap-3 text-[12px] items-center">
              <p>
                شما در حال حاضر هیچ محصولی را به علاقه‌مندی‌ها اضافه نکرده‌اید!
              </p>
              <p className="rounded-4 border border-primary py-1 px-3">
                <Link href="/menu">منوی رستوران</Link>
              </p>
            </div>
          </div>

          {/* item favoites */}

          <div className="flex items-center justify-center gap-5 flex-wrap">
            {nonIranianFood.map((item) => (
              <BoxFood {...item} />
            ))}
          </div>
          {/* match notefound */}

          <div>
            <p className="text-center my-5">موردی با این مشخصات پیدا نکردیم!</p>
            <img
              src="/Images/Matchnotfound.png"
              className="w-[280px] md:w-[450px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default favoites;
