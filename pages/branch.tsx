import Layout from "@/components/Layout";
import SliderNavbar from "@/components/Slider-Landing";

const branch = () => {
  const specialOffer = [
    {
      id: 1,
      img: "./Images",
      name: "دلمه برگ کلم",
      price: 220000,
      score: 8,
      votes: 52,
      star: 5,
    },
    {
      id: 2,
      img: "./Images",
      name: "بادمجان شکم پر",
      price: 150000,
      score: 18,
      votes: 32,
      star: 4,
    },
    {
      id: 3,
      img: "./Images",
      name: "کالزونه اسفناج",
      price: 190000,
      score: 17,
      votes: 62,
      star: 5,
    },
    {
      id: 4,
      img: "./Images",
      name: "",
      price: 100,
      score: 10,
      discount: "15",
      star: 4,
    },
    {
      id: 5,
      img: "./Images",
      name: "پیتزا قارچ",
      price: 215000,
      score: 25,
      discount: 33,
      star: 3,
    },
    {
      id: 6,
      img: "./Images",
      name: "پاستا سبزیجات",
      price: 150000,
      score: 12,
      votes: 50,
      star: 5,
    },
  ];

  return (
    <>
      <Layout>
        <SliderNavbar />

        <div className="pr-16px md:pr-[30px] my-5">
          <p className="text-[16px] md:text-[24px]">پیشنهاد ویژه</p>

        </div>
      </Layout>
    </>
  );
};

export default branch;
