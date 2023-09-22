import Layout from "@/components/Layout";
import SliderLanding from "./../components/Slider-Landing";
import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import BoxFoodMenu from "@/components/Box-food-menu";

const menu = () => {
  const [filterFoodList, setFilterFoodList] = useState("غذای اصلی");
  const foodListName = ["غذای اصلی", "پیش غذا", "دسر", "نوشیدنی"];
  const typesFood = [
    "اقتصادی ترین",
    "پرفروش ترین",
    "ساندویچ ها",
    "پیتزا ها",
    "غذا های غیر ایرانی",
    "غذا های ایرانی",
  ];

  const iranianFood = [
    {
      id: 1,
      img: "/Images/iranianFood/kofteBerengi.png",
      name: "کوفته برنجی",
      price: 180000,
      discount: 35,
      star: 2,
      compounds: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
    },
    {
      id: 2,
      img: "/Images/iranianFood/kashkBademgan.png",
      name: "کشک بادمجان",
      price: 95000,
      star: 5,
      compounds: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز",
    },
    {
      id: 3,
      img: "/Images/iranianFood/mirzagasemi.png",
      name: "میرزا قاسمی",
      price: 165000,
      discount: 10,
      star: 5,
      compounds: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی",
    },
    {
      id: 4,
      img: "/Images/iranianFood/baglagotog.png",
      name: "باقلاتوق",
      price: 180000,
      discount: 30,
      star: 4,
      compounds: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ",
    },
    {
      id: 5,
      img: "/Images/iranianFood/felafel.png",
      name: "فلافل",
      price: 80000,
      star: 3,
      compounds: "نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی",
    },
    {
      id: 6,
      img: "/Images/iranianFood/kalegosh.png",
      name: "کله جوش",
      price: 210000,
      discount: 5,
      star: 4,
      compounds: "کشک، گردو، پیاز، نعناع خشک",
    },
    {
      id: 7,
      img: "/Images/iranianFood/boranibademgan.png",
      name: "بورانی بادمجان",
      price: 170000,
      discount: 22,
      star: 5,
      compounds: "بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو",
    },
    {
      id: 8,
      img: "/Images/iranianFood/bademganshekampor.png",
      name: "بادمجان شکم پر",
      price: 150000,
      discount: 18,
      star: 4,
      compounds: "بادمجان، پیاز، گوجه فرنگی	، سبزی خشک",
    },
    {
      id: 9,
      img: "/Images/iranianFood/dolmebargkalam.png",
      name: "دلمه برگ کلم",
      price: 22000,
      discount: 8,
      star: 5,
      compounds: "کلم برگ، برنج، لپه پخته، پیاز، سبزی معطر	",
    },
    {
      id: 10,
      img: "/Images/iranianFood/dolmebargmo.png",
      name: "دلمه برگ مو",
      price: 195000,
      star: 2,
      compounds: "پیاز، برنج، لپه، سبزی دلمه، سرکه",
    },
    {
      id: 11,
      img: "/Images/iranianFood/kokosabzi.png",
      name: "کوکو سبزی",
      price: 300000,
      discount: 10,
      star: 5,
      compounds: "تخم مرغ، گردو، سیر، آرد، روغن مایع سبزی کوکویی",
    },
    {
      id: 12,
      img: "/Images/iranianFood/kokosibzaminiadas.png",
      name: "کوکو سیب زمینی و عدس",
      price: 135000,
      discount: 20,
      star: 1,
      compounds: "عدس، سیب زمینی، پیاز متوسط، تخم مرغ، پودر سیر، آرد سوخاری",
    },
  ];

  const nonIranianFood = [
    {
      id: 1,
      img: "/Images/non-iranian-food/pastasabzigat.png",
      name: "پاستا سبزیجات",
      price: 175000,
      discount: 20,
      star: 5,
      compounds: "پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده",
    },
    {
      id: 2,
      img: "/Images/non-iranian-food/pastabelonez.png",
      name: "پاستا بلونز",
      price: 170000,
      discount: 17,
      star: 4,
      compounds: "اسپاگتی، گوشت چرخ کرده، هویج، ساقه کرفس، گوجه فرنگی، سیر، پیاز، پنیر پارمزان، روغن زیتون",
    },
    {
      id: 3,
      img: "/Images/non-iranian-food/ratatoi.png",
      name: "راتاتویی",
      price: 180000,
      discount: 35,
      star: 4,
      compounds: "بادمجان، گوجه فرنگی، کدو سبز، پیاز، رب گوجه فرنگی، روغن زیتون، پنیر پارمزان",
    },
    {
      id: 4,
      img: "/Images/non-iranian-food/lazania.png",
      name: "لازانیا",
      price: 150000,
      star: 5,
      compounds: "لازانیا، قارچ، ریحان تازه، جعفری تازه، گوجه فرنگی، پنیر پیتزا، بادمجان",
    },
    {
      id: 5,
      img: "/Images/non-iranian-food/soshi.png",
      name: "سوشی",
      price: 100000,
      discount: 15,
      star: 4,
      compounds: "جلبک دریایی/ نوری، برنج کته، سرکه سفید (یا سرکه برنج)، شکر، نمک دریا",
    },
    {
      id: 6,
      img: "/Images/non-iranian-food/pakorasabzigat.png",
      name: "پاکورا سبزیجات",
      price: 125000,
      discount: 8,
      star: 4,
      compounds: "گرام ماسالا، پودر کاری، سیر له شده، ،گشنیز خرد شده",
    },
    {
      id: 7,
      img: "/Images/non-iranian-food/kalozeesfenag.png",
      name: "کالوزه اسفناج",
      price: 19000,
      discount: 17,
      star: 5,
      compounds: "اسفناج، قارچ، پنیر موزارلا یا پنیر پیتزا، پنیر ریکوتا یا پنیر خامه ای، پیاز، سیر، روغن زیتون",
    },
    {
      id: 8,
      img: "/Images/non-iranian-food/palakpanir.png",
      name: "پالاک پنیر",
      price: 200000,
      discount: 15,
      star: 4,
      compounds: "پنیر، اسفناج، گوجه، پیاز، سیر ",
    },
  ]

  return (
    <>
      <Layout>
        <SliderLanding />
        <div className="px-[20px] md:px-[60px] lg:px-[90px] py-2 flex items-center gap-3 bg-gray-3">
          {foodListName.map((item) => (
            <p key={crypto.randomUUID()}
              className={`${
                filterFoodList === item &&
                "text-primary border-b font border-primary"
              } font-[700] cursor-pointer text-[12px] md:text-[20px]`}
              onClick={() => setFilterFoodList(item)}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="mb-3 mx-[20px] md:px-[60px] mt-2 xl:px-[90px] flex items-start md:items-center justify-between flex-col md:flex-row">
          <div className="flex items-center gap-1 md:gap-4 flex-wrap mt-2">
            {typesFood.map((item) => (
              <div key={crypto.randomUUID()} className="flex items-center bg-gray-3 rounded-8 p-1">
                <p className="w-max text-[10px] md:text-[16px]">{item}</p>
                <IoIosArrowBack />
              </div>
            ))}
          </div>
          <div className="md:hidden mx-auto w-full">
            <SearchBox />
          </div>
        </div>
        <div className="flex justify-end -mb-12 md:-mb-12 mx-[20px] md:ml-[60px] lg:ml-[90px]">
          <div className="flex items-center my-3 p-1 md:p-2 gap-1 text-[12px] border border-primary rounded-4 text-primary px-1 w-fit cursor-pointer">
            <AiOutlineShoppingCart className="w-[16px] h-[16px]" />
            تکمیل خرید
          </div>
        </div>
        <div className="px-[20px] md:px-[60px] lg:px-[90px]">
          <p className="text-[16px] my-2 md:text-[20px] lg:text-[24px] font-[700]">
            غذا های ایرانی
          </p>
          <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2 gap-3">
            {iranianFood.map((item) => (
              <BoxFoodMenu key={item.id} {...item} />
            ))}
          </div>
        </div>

        <div className="px-[20px] md:px-[60px] lg:px-[90px]">
          <p className="text-[16px] my-2 md:text-[20px] lg:text-[24px] font-[700]">
            غذا های غیر ایرانی
          </p>
          <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2 gap-3">
            {nonIranianFood.map((item) => (
              <BoxFoodMenu key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default menu;
