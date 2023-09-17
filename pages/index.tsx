import Layout from "@/components/Layout";
import SliderLanding from "@/components/Slider-Landing";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function Home() {
  const menufood = [
    { id: 1, title: "نوشیدنی", img: "./Images/menue/image1.png" },
    { id: 2, title: "دسر", img: "./Images/menue/image2.png" },
    { id: 3, title: "پیش غدا ", img: "./Images/menue/image3.png" },
    { id: 4, title: "غدای اصلی", img: "./Images/menue/image4.png" },
  ];

  return (
    <div className="">
      <Layout>
        <SliderLanding />
        {/* Resturan menu setion */}
        <div>
          <p className="text-center text-gray-8 font-bold text-[16px] md:text-[24px] mt-[20px]">
            منوی رستوران
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-2 my-8 gap-7 md:gap-0 w-[100%]">
            {menufood.map((food) => (
              <div>
                <img
                  src={food.img}
                  className="w-[120px] mx-auto md:w-[180px] lg:w-[240px] md:h-[180px] lg:h-[240px] h-[120px]"
                  alt=""
                />
                <div className="w-[152px] md:h-[120px] h-[80px] mx-auto bg-primary lg:w-[260px] rounded-4 -mt-16 md:-mt-24 lg:-mt-36 lg:h-[160px] md:w-[220]"></div>
                <p className="rounded-4 text-center p-[5px] -mt-3 bg-white mx-auto shadow-drop-shadow-4 md:py-[8px] md:px-[16px] w-[96px] md:w-[120px] lg:w-[155px]">
                  {food.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About setion */}

        <div className="bg-aboutImage flex flex-col px-[20px] md:flex-row items-center justify-around w-full h-[339px] mx-auto my-5 bg-cover bg-center md:-mt-60">
          <div className="text-white w-full md:w-[50%]">
            <p className="font-bold text-[16px] py-3 md:text-[24px]">
              رستوران های زنجیره ای ترخینه
            </p>
            <p className="text-[10px] md:text-[20px]">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
              ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
              رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
              پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
              شان شما عزیزان ارائه دهیم.
            </p>
            <button className="border flex items-center w-[152px] justify-center my-5 mr-auto rounded-4 gap-1 border-white bg-transparent">
              اطلاعات بیشتر
              <MdKeyboardArrowLeft className="text-[16px]" />
            </button>
          </div>
          <div className="flex items-center justify-around gap-5 md:gap-6 flex-col text-white w-full md:w-[50%]">
            <div className="flex items-center justify-around w-full">
              <div className="flex flex-col items-center gap-2">
                <img className="w-[24px] md:w-[48px]" src="./Images/about/user.png" alt="" />
                <p>پرسنلی محرب و حرفه ای</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img className="w-[24px] md:w-[48px]" src="./Images/about/diagram.png" alt="" />
                <p>کیفیت بالای غذا ها</p>
              </div>
            </div>
            <div className="flex items-center justify-around w-full">
              <div className="flex flex-col items-center gap-2">
                <img className="w-[24px] md:w-[48px]" src="./Images/about/home-wifi.png" alt="" />
                <p>محیطی دلنشین و آرام</p>
              </div>
              <div className="flex flex-col items-center gap-2l">
                <img className="w-[24px] md:w-[48px]" src="./Images/about/menu-board.png" alt="" />
                <p>منوی متنوع</p>
              </div>
            </div>
          </div>
        </div>


        <div>
            <p className="font-bold text-[16px] md:text-[24px] text-center ">ترخینه گردی</p>
        </div>
      </Layout>
    </div>
  );
}
