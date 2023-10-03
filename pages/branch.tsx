import Layout from "@/components/Layout";
import SliderNavbar from "@/components/Slider-Landing";
import SliderBox from "@/components/Slider-food";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

const branch = () => {
  const starImageSrc = [
    "./Images/star/Rate1.png",
    "./Images/stare/Rate2.png",
    "./Images/star/Rate3.png",
    "./Images/star/Rate4.png",
    "./Images/star/Rate5.png",
  ];
  const specialOffer = [
    {
      id: 1,
      img: "/Images/dolme.png",
      name: "دلمه برگ کلم",
      price: 220000,
      score: 8,
      votes: 52,
      star: 5,
      like: true,
    },
    {
      id: 2,
      img: "/Images/bademgan.png",
      name: "بادمجان شکم پر",
      price: 150000,
      score: 18,
      votes: 32,
      star: 4,
      like: false,
    },
    {
      id: 3,
      img: "/Images/kazone.png",
      name: "کالزونه اسفناج",
      price: 190000,
      score: 17,
      votes: 62,
      star: 5,
      like: false,
    },
    {
      id: 4,
      img: "/Images/pizza.png",
      name: "پیتزا قارچ",
      price: 215000,
      score: 25,
      discount: 33,
      star: 3,
      like: false,
    },
  ];
  const popularFood = [
    {
      id: 1,
      img: "/Images/dolme.png",
      name: "پنینی اسفناج",
      price: 210000,
      score: 15,
      votes: 20,
      star: 3,
      like: false,
    },
    {
      id: 1,
      img: "/Images/dolme.png",
      name: "پیتزا بیرونی",
      price: 100000,
      votes: 51,
      star: 4,
      like: false,
    },
    {
      id: 1,
      img: "/Images/dolme.png",
      name: "راتاتویی",
      price: 180000,
      score: 45,
      votes: 43,
      star: 4,
      like: true,
    },
    {
      id: 1,
      img: "/Images/dolme.png",
      name: "بورانی بادمجان",
      price: 170000,
      score: 22,
      votes: 75,
      star: 5,
      like: false,
    },
  ];
  const noneIranianFood = [
    {
      id: 1,
      img: "/Images/soshi.png",
      name: "سوشی",
      price: 85000,
      score: 15,
      votes: 70,
      star: 4,
      like: true,
    },
    {
      id: 2,
      img: "/Images/ratatoi.png",
      name: "راتاتویی",
      price: 95000,
      score: 15,
      votes: 41,
      star: 4,
      like: false,
    },
    {
      id: 3,
      img: "/Images/pakora.png",
      name: "پاکورا سبزیجات",
      price: 105000,
      score: 15,
      votes: 60,
      star: 3,
      like: false,
    },
    {
      id: 4,
      img: "/Images/lazania.png",
      name: "لازانیا",
      price: 150000,
      score: 15,
      votes: 36,
      star: 5,
      like: false,
    },
  ];

  const branchs = [
    {
      id: 1,
      name: "شعبه اکباتان",
      img: "/Images/branch/ekbatan.png",
      location: "شهرک اکباتان، فاز 3، مجتمع تجاری کوروش طبقه سوم",
      phones: ["021-33538745", "021-56752314"],
      hoursWork: [12, 23],
    },
    {
      id: 2,
      name: "شبعه اقدسیه",
      img: "/Images/branch/agdaseie.png",
      location: "خیابان اقدسیه، نرسیده به میدان خیام، پلاک 8",
      phones: ["09037556090", "021-2888105"],
      hoursWork: [9, 22],
    },
    {
      id: 3,
      name: "شعبه ونک",
      img: "/Images/branch/vanak.png",
      location: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک 26",
      phones: ["023-4458156", "021-5566215"],
      hoursWork: [13, 24],
    },
    {
      id: 4,
      name: "شعبه چالوس",
      img: "/Images/branch/chalos.png",
      location:
        "چالوس، خیابان 17 شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
      phones: ["021-1005286", "021-56752314"],
      hoursWork: [14, 2],
    },
  ];

  const usersComment = [
    {
      id: 1,
      name: "سردار وظیفه",
      img: "/Images/user1.png",
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
      date: ["15", "آبان", "1401"],
      star: 5,
    },
    {
      id: 2,
      name: "آرزو محمد علیزاده",
      img: "/Images/user2.png",
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
      date: ["23", "اسفند", "1402"],
      star: 3,
    },
    {
      id: 3,
      name: "مهدی رضایی",
      img: "/Images/user3.png",
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
      date: ["15", "بهمن", "1402"],
      star: 4,
    },
    {
      id: 4,
      name: "رضا احمدی",
      img: "/Images/user1.png",
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
      date: ["1", "مهر", "1400"],
      star: 5,
    },
    {
      id: 5,
      name: "آرزو محمد علیزاده",
      img: "/Images/user2.png",
      comment:
        "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
      date: ["23", "اسفند", "1402"],
      star: 5,
    },
  ];

  return (
    <>
      <Layout>
        <SliderNavbar />

        <div className="px-[20px] md:px-[60px] lg:px-[80px] my-5">
          <p className="text-[16px] py-2 md:text-[24px]">پیشنهاد ویژه</p>
          <SliderBox data={specialOffer} />
        </div>
        <div className="bg-primary pb-[30px] px-[20px] md:px-[60px] lg:px-[80px]">
          <p className="text-[16px] text-white py-2 md:text-[24px]">
            غذا های محبوب
          </p>
          <SliderBox data={popularFood} />
        </div>
        <div className="px-[20px] md:px-[60px] lg:px-[80px] my-5">
          <p className="text-[16px] py-2 md:text-[24px]">غذا های غیر ایرانی</p>
          <SliderBox data={noneIranianFood} />
        </div>
        <Link
          href="/menu"
          className="rounded-4 border text-[12px] myt-2 mb-7 gap-1 px-2 border-primary text-primary py-1 w-fit mx-auto md:text-[16px] flex items-center"
        >
          <img src="./Images/note.png" alt="" />
          <p>مشاهده ی منوی کامل</p>
        </Link>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-2"
        >
          {branchs.map((item) => (
            <SwiperSlide>
              <p className="text-center text-[16px] md:text-[14px] font-[700] pb-[16px]">
                {item.name}
              </p>
              <img
                src={item.img}
                className="w-full z-10 h-[176px]  md:h-[210px] lg:h-[336px]"
                alt=""
              />
              <div className="mx-auto my-2 w-[320px] relative bg-white z-50 md:w-[510px] p-2 -mt-7 border-[1px] md:border-[2px] lg:border-[3px] md:rounded-8 items-start lg:w-[810px] rounded-4 grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-3 border-primary">
                <div className="flex gap-1 md:flex-col items-center justify-center col-start-1 row-start-2 md:row-start-1 md:col-start-1">
                  <BiPhoneCall className="w-[16px] h-[16px] md:w-[25px] md:h-[25px] lg:w-[32px] lg:h-[32px]" />
                  <div className="flex flex-col md:text-[16px] text-[10px]">
                    {item.phones.map((phone) => (
                      <p>{phone}</p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1 md:flex-col items-center justify-center row-start-1 col-start-1 w-max md:row-start-1 md:col-start-2 md:w-fit text-[10px] md:text-[16px] text-center">
                  <GrLocation className="w-[16px] h-[16px] md:w-[25px] md:h-[25px] lg:w-[32px] lg:h-[32px]" />
                  {item.location}
                </div>
                <div className="flex self-center md:self-start md:flex-col gap-1 text-[10px] md:text-[16px] text-center items-center justify-center col-start-2 row-start-2 md:row-start-1 md:col-start-3">
                  <MdOutlineWatchLater className="w-[16px]  h-[16px] md:w-[25px] md:h-[25px] lg:w-[32px] lg:h-[32px]" />
                  همه روزه از ساعت {item.hoursWork[0]} الی {item.hoursWork[1]}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-center text-[16px] md:text-[14px] font-[700] pb-[16px]">
          نظرات کاربران
        </p>
        <div className="mx-[20px] md:mx-[60px] lg:mx-[100px]">
          <Swiper
            breakpoints={{
              750: {
                slidesPerView: 2,
              },
            }}
            slidesPerView={1.8}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {usersComment.map((comm) => (
              <SwiperSlide className="border rounded-4 mb-8 border-gray-4 md:rounded-8 p-3 w-[252px]">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1 items-center ml-2 w-[120px]">
                    <img className="w-[56px] h-[56px]" src={comm.img} alt="" />
                    <p className="text-[10px] md:text-[14px] w-max">{comm.name}</p>
                    <div className="flex items-center text-[10px] md:text-[14px] gap-1">
                      <p>{comm.date[0]}</p>
                      <p>{comm.date[1]}</p>
                      <p>{comm.date[2]}</p>
                    </div>
                  </div>
                  <p className="text-[10px] line-clamp-4 md:text-[16px] w-fit text-justify">
                    {comm.comment}
                  </p>
                </div>
                <div className="flex justify-end gap-1">
                    <img src={starImageSrc[comm.star - 1]} alt="" />
                    <span>{comm.star}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Layout>
    </>
  );
};

export default branch;
