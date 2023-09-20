import Layout from "@/components/Layout";
import SliderNavbar from "@/components/Slider-Landing";
import SliderBox from "@/components/Slider-food";

const branch = () => {
  const specialOffer = [
    {
      id: 1,
      img: "./Images/dolme.png",
      name: "دلمه برگ کلم",
      price: 220000,
      score: 8,
      votes: 52,
      star: 5,
      like: true
    },
    {
      id: 2,
      img: "./Images/bademgan.png",
      name: "بادمجان شکم پر",
      price: 150000,
      score: 18,
      votes: 32,
      star: 4,
      like: false
    },
    {
      id: 3,
      img: "./Images/kazone.png",
      name: "کالزونه اسفناج",
      price: 190000,
      score: 17,
      votes: 62,
      star: 5,
      like: false
    },
    {
      id: 4,
      img: "./Images/pizza.png",
      name: "پیتزا قارچ",
      price: 215000,
      score: 25,
      discount: 33,
      star: 3,
      like: false
    },
  ];
  const popularFood = [
    {
      id: 1,
      img: "./Images/dolme.png",
      name: "پنینی اسفناج",
      price: 210000,
      score: 15,
      votes: 20,
      star: 3,
      like: false
    },
    {
      id: 1,
      img: "./Images/dolme.png",
      name: "پیتزا بیرونی",
      price: 100000,
      votes: 51,
      star: 4,
      like: false
    },
    {
      id: 1,
      img: "./Images/dolme.png",
      name: "راتاتویی",
      price: 180000,
      score: 45,
      votes: 43,
      star: 4,
      like: true
    },
    {
      id: 1,
      img: "./Images/dolme.png",
      name: "بورانی بادمجان",
      price: 170000,
      score: 22,
      votes: 75,
      star: 5,
      like: false
    },
  ];
  const noneIranianFood = [
    {
      id: 1,
      img: "./Images/soshi.png",
      name: "سوشی",
      price: 85000,
      score: 15,
      votes: 70,
      star: 4,
      like: true
    },
    {
      id: 2,
      img: "./Images/ratatoi.png",
      name: "راتاتویی",
      price: 95000,
      score: 15,
      votes: 41,
      star: 4,
      like: false
    },
    {
      id: 3,
      img: "./Images/pakora.png",
      name: "پاکورا سبزیجات",
      price: 105000,
      score: 15,
      votes: 60,
      star: 3,
      like: false
    },
    {
      id: 4,
      img: "./Images/lazania.png",
      name: "لازانیا",
      price: 150000,
      score: 15,
      votes: 36,
      star: 5,
      like: false
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
      </Layout>
    </>
  );
};

export default branch;
