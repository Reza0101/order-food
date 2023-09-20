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
    },
    {
      id: 2,
      img: "./Images/bademgan.png",
      name: "بادمجان شکم پر",
      price: 150000,
      score: 18,
      votes: 32,
      star: 4,
    },
    {
      id: 3,
      img: "./Images/kazone.png",
      name: "کالزونه اسفناج",
      price: 190000,
      score: 17,
      votes: 62,
      star: 5,
    },
    {
      id: 4,
      img: "./Images/pizza.png",
      name: "پیتزا قارچ",
      price: 215000,
      score: 25,
      discount: 33,
      star: 3,
    },
  ];

  return (
    <>
      <Layout>
        <SliderNavbar />

        <div className="px-[20px] md:px-[40px] lg:px-[50px] my-5">
          <p className="text-[16px] py-2 md:text-[24px]">پیشنهاد ویژه</p>
            <SliderBox data={specialOffer} />
        </div>
      </Layout>
    </>
  );
};

export default branch;
