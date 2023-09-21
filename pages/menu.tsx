import Layout from "@/components/Layout";
import SliderLanding from "./../components/Slider-Landing";
import { useState } from "react";
import SearchBox from "@/components/SearchBox";
import { IoIosArrowBack } from "react-icons/io";

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

  return (
    <>
      <Layout>
        <SliderLanding />
        <div className="px-[20px] md:px-[60px] lg:px-[90px] py-2 flex items-center gap-3 bg-gray-3">
          {foodListName.map((item) => (
            <p
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
        <div className="mb-3 mx-[20px] md:px-[60px] xl:px-[90px] flex items-start md:items-center justify-between flex-col md:flex-row">
          <div className="flex items-center gap-1 md:gap-4 flex-wrap mt-2">
            {typesFood.map((item) => (
              <div className="flex items-center bg-gray-3 rounded-8 p-1">
                <p className="w-max text-[10px] md:text-[16px]">{item}</p>
                <IoIosArrowBack />
              </div>
            ))}
          </div>
          <div className="md:hidden mx-auto">

          <SearchBox />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default menu;
