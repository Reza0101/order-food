import Layout from "@/components/Layout";

const Franchise = () => {
  const benefits = [
    { id: 1, name: "استفاده از برند شناخته شده ترخینه" },
    { id: 2, name: "به حداقل رساندن ریسک سرمایه گذاری" },
    { id: 3, name: "تسریع روند بازگشت سرمایه" },
    { id: 4, name: "مشاوره های تخصصی جهت مدیریت رستوران" },
    { id: 5, name: "مشاوره در امور حقوقی، مالی و مالیاتی" },
    { id: 6, name: "پشتیبانی بازاریابی و منابع انسانی" },
    { id: 7, name: "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات" },
    { id: 8, name: "طرح های تشویقی برای ارتقا فروش" },
  ];

  return (
    <Layout>
      {/* Image Banner */}
      <img
        src="./Images/franchiseBanner.png"
        className="w-full h-[176px] sm:h-[200px] md:h-[250] lg:h-[330px]"
        alt=""
      />

      <div className="flex flex-col md:flex-row justify-around my-10 px-[20px] md:px-[50px] gap-5 md:gap-0">
        <div className="flex items-center justify-around w-full">
          <div>
            <img
              className="w-[80px] md:w-[130px] mx-auto"
              src="./Images/franchise/sign.png"
              alt=""
            />
            <p className="w-[200px] pt-2 md:w-fit h-[40px] text-center">
              بیش از 20 شعبه فعال در سراسر کشور
            </p>
          </div>
          <div>
            <img
              className="w-[80px] md:w-[130px] mx-auto"
              src="./Images/franchise/sign2.png"
              alt=""
            />
            <p className="w-[200px] pt-2 md:w-fit h-[40px] text-center">
              تسهیلات راه‌اندازی رستوران و تجهیز آن
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around w-full">
          <div>
            <img
              className="w-[80px] md:w-[130px] mx-auto"
              src="./Images/franchise/sign3.png"
              alt=""
            />
            <p className="w-[200px] pt-2 md:w-fit h-[40px] text-center">
              طرح‌های تشویقی ارتقای فروش
            </p>
          </div>
          <div>
            <img
              className="w-[80px] md:w-[130px] mx-auto"
              src="./Images/franchise/sign4.png"
              alt=""
            />
            <p className="w-[200px] pt-2 md:w-fit h-[40px] text-center">
              اعطای دستورالعمل پخت غذاها
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto h-[1px] bg-gray-4 my-2"></div>

      <p className="text-center text-[18px] md:text-[24px] my-3 font-[700]">
        مزیت دریافت نمایندگی
      </p>
      <div className="w-full flex justify-center px-[20px] md:px-[60px]">
        <div className="grid mb-7 grid-rows-8 grid-cols-1 md:grid-rows-4 md:grid-cols-2  md:gap-x-20">
          {benefits.map((item: any) => (
            <div className="flex items-center justify-center py-1 md:justify-start gap-1">
              <img
                className="w-[16px]"
                src="./Images/logos/rectangle.png"
                alt=""
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[90%] mx-auto h-[1px] bg-gray-4 my-2"></div>

      <p className="text-center text-[18px] md:text-[24px] my-3 font-[700]">
        دریافت مشاوره
      </p>
      <div className="flex flex-col md:flex-row px-[20px] md:px-[60px] gap-4 justify-around my-5">
        <input type="text" placeholder="نام و نام خانوادگی" className="rounded-4 p-1 outline-none border border-gray-3" />
        <input type="number" placeholder="کد ملی" className="rounded-4 p-1 outline-none border border-gray-3" />
        <input type="number" placeholder="شماره تماس" className="rounded-4 p-1 outline-none border border-gray-3" />
      </div>
      <button className="bg-primary px-2 text-white rounded-4 py-1 block mx-auto">درخواست مشاوره</button>
    </Layout>
  );
};

export default Franchise;
