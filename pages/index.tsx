import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import SliderLanding from "@/components/Slider-Landing";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import ModalImage from "@/components/ModalImage";
import SearchBox from "@/components/SearchBox";


export default function Home() {
  const [isActiveBranc, setIsActiveBranch] = useState<number>();
  const [isShowImage, setIsShowImage] = useState<boolean>(false);
  const [srcImage, setSrcImage] = useState<string>("");

  const menufood = [
    { id: 1, title: "نوشیدنی", img: "./Images/menue/image1.png" },
    { id: 2, title: "دسر", img: "./Images/menue/image2.png" },
    { id: 3, title: "پیش غدا ", img: "./Images/menue/image3.png" },
    { id: 4, title: "غدای اصلی", img: "./Images/menue/image4.png" },
  ];

  const branchs = [
    {
      id: 1,
      img: "./Images/branch/ekbatan.png",
      nameBrach: "شعبه اکباتان",
      location: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
    },
    {
      id: 2,
      img: "./Images/branch/chalos.png",
      nameBrach: "شعبه چالوس",
      location:
        "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
    },
    {
      id: 3,
      img: "./Images/branch/agdaseie.png",
      nameBrach: "شعبه اقدسیه",
      location: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
    },
    {
      id: 4,
      img: "./Images/branch/vanak.png",
      nameBrach: "شعبه ونک",
      location: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
    },
  ];


  return (
    <div className="">
      <Layout>
        <SliderLanding />

        {/* Search box */}
        <div className="md:hidden my-5 px-[20px]">
          <SearchBox />
        </div>

        {/* Resturan menu setion */}
        <div className="mt-7">
          <p className="text-center text-gray-8 font-bold text-[16px] md:text-[24px]">
            منوی رستوران
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-2 my-5 gap-7 md:gap-0 w-[100%]">
            {menufood.map((food) => (
              <div key={crypto.randomUUID()}>
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

        <div className="bg-aboutImage flex flex-col pb-5 md:pb-0 px-[20px] md:flex-row items-center justify-around w-full h-[339px] mx-auto my-5 bg-cover bg-center md:-mt-60">
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
            <button className="border hover:bg-primary py-1 hover:border-primary duration-200 flex items-center w-[152px] justify-center my-5 mr-auto rounded-4 gap-1 border-white bg-transparent">
              اطلاعات بیشتر
              <MdKeyboardArrowLeft className="text-[16px]" />
            </button>
          </div>
          <div className="flex items-center justify-around gap-5 md:gap-6 flex-col text-white w-full md:w-[50%]">
            <div className="flex items-center justify-around w-full">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="w-[24px] md:w-[48px]"
                  src="./Images/logos/user.png"
                  alt=""
                />
                <p>پرسنلی محرب و حرفه ای</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  className="w-[24px] md:w-[48px]"
                  src="./Images/logos/diagram.png"
                  alt=""
                />
                <p>کیفیت بالای غذا ها</p>
              </div>
            </div>
            <div className="flex items-center justify-around w-full">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="w-[24px] md:w-[48px]"
                  src="./Images/logos/home-wifi.png"
                  alt=""
                />
                <p>محیطی دلنشین و آرام</p>
              </div>
              <div className="flex flex-col items-center gap-2l">
                <img
                  className="w-[24px] md:w-[48px]"
                  src="./Images/logos/menu-board.png"
                  alt=""
                />
                <p>منوی متنوع</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <p className="font-bold text-[16px] md:text-[24px] pb-2 text-center ">
            ترخینه گردی
          </p>

          <div className="flex flex-col md:flex-row my-5 justify-center items-center gap-5 px-[20px]">
            {branchs.map((branch) => (
              <div key={crypto.randomUUID()}>
                <div
                  onClick={() => setIsActiveBranch(branch.id)}
                  className={`flex md:flex-col h-[80px] relative w-[380px] md:w-[290px] lg:w-[240px] xl:w-[300px] cursor-pointer md:h-[300px] lg:h-[334px] rounded-4 border border-gray-4 ${
                    branch.id == isActiveBranc && "shadow-drop-shadow-6"
                  }`}
                >
                  <div
                    style={{ backgroundImage: `url(${branch.img})` }}
                    className={`rounded-t-4 bg-cover md:w-full ${
                      branch.id === isActiveBranc &&
                      "md:h-[170px] xl:h-[200px] lg:h-[200px]"
                    } w-[190px] bg-clip-content lg:w-[240px] xl:w-[300px] h-[80px] md:h-[170px] bg-center lg:h-[230px]`}
                  >
                    <div
                      className={`flex items-center justify-center w-full h-full ${
                        branch.id == isActiveBranc ? "flex" : "hidden"
                      }`}
                    >
                      {/*Circel backg to image*/}
                      <div className="z-40 absolute h-full flex items-center justify-center">
                        <div className="circleImage2 absolute w-[50px] h-[50px] bg-white rounded-full"></div>
                      </div>

                      <div className="absolute z-30 h-full flex items-center justify-center">
                        <div className="circleImage absolute w-[70px] h-[70px] bg-white rounded-full z-50"></div>
                      </div>

                      <div className="w-full h-full items-center bg-transparent flex justify-center">
                        <img
                          onClick={() => {
                            setIsShowImage(true);
                            setSrcImage(branch.img);
                          }}
                          src="./Images/logos/logoImage.png"
                          className={`w-[32px] h-[32px] absolute z-50 ${
                            branch.id == isActiveBranc ? "block" : "hidden"
                          }`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`rounded-r-4 md:rounded-t-4 md:rounded-r-none top-0 absolute md:w-full w-[190px] lg:w-[240px] xl:w-[300px] h-[80px] bg-center lg:h-[230px] ${
                      branch.id == isActiveBranc
                        ? "block opacity-[0.7] bg-black md:h-[170px] xl:h-[200px] lg:h-[200px]"
                        : "hidden"
                    }`}
                  ></div>
                  <div className="flex flex-col items-center justify-center w-1/2 md:w-full px-[4px] py-2">
                    <p className="text-[14px] xl:text-[20px] md:text-[18px]">
                      {branch.nameBrach}
                    </p>
                    <p className="text-[10px] md:text-[12px] xl:text-[14px] text-center">
                      {branch.location}
                    </p>
                    {isActiveBranc == branch.id && (
                      <Link
                        href="/"
                        className="border hidden px-[8px] py-[5px] mx-auto md:flex items-center w-[128px] justify-center my-2 text-[12px] mr-auto rounded-4 gap-1 border-shade-2 bg-transparent"
                      >
                        صفحه شعبه
                        <MdKeyboardArrowLeft className="text-[16px]" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
      {isShowImage && <ModalImage setShow={setIsShowImage} img={srcImage} />}
    </div>
  );
}
