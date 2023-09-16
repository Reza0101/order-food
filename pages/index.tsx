import Layout from "@/components/Layout";
import SliderLanding from "@/components/Slider-Landing";

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
                <p className="rounded-4 text-center p-[5px] -mt-3 bg-white w-fit mx-auto shadow-drop-shadow-4 md:py-[8px] md:px-[16px] md:w-[120px] lg:w-[155px]">
                  {food.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
