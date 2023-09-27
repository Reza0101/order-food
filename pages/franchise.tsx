import Layout from "@/components/Layout";
import { BsFolderPlus } from "react-icons/bs";

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

      <div className="px-[20px] md:px-[60px] lg:px-[80px]">
        <div className="flex flex-col md:flex-row justify-around my-10 gap-5 md:gap-0">
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
        <div className="w-[100%] mx-auto h-[1px] bg-gray-4 my-2"></div>

        <p className="text-center text-[18px] md:text-[24px] my-3 font-[700]">
          مزیت دریافت نمایندگی
        </p>
        <div className="w-full flex justify-center">
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

        <div className="w-[100%] mx-auto h-[1px] bg-gray-4 my-2"></div>

        <p className="text-center text-[18px] md:text-[24px] my-3 font-[700]">
          دریافت مشاوره
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-around my-5">
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            className="rounded-4 p-1 placeholder:text-[10px] pr-2 w-full outline-none border border-gray-3"
          />
          <input
            type="number"
            placeholder="کد ملی"
            className="rounded-4 p-1 placeholder:text-[10px] pr-2 w-full outline-none border border-gray-3"
          />
          <input
            type="number"
            placeholder="شماره تماس"
            className="rounded-4 p-1 placeholder:text-[10px] pr-2 w-full outline-none border border-gray-3"
          />
        </div>
        <button className="bg-primary px-2 text-white rounded-4 py-1 block mx-auto">
          درخواست مشاوره
        </button>

        <div className="rounded-8 border border-gray-4 my-4 px-[15px]">
          <p className="text-center text-[18px] md:text-[24px] my-3 font-[700]">
            فرم درخواست نمایندگی
          </p>
          <p>مشخصات فردی متقاضی</p>
          <div className="flex flex-col md:flex-row gap-4 justify-around my-5">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="rounded-4 w-full p-1 outline-none border placeholder:text-[10px] border-gray-3"
            />
            <input
              type="number"
              placeholder="کد ملی"
              className="rounded-4 w-full p-1 outline-none border placeholder:text-[10px] border-gray-3"
            />
            <input
              type="number"
              placeholder="شماره تماس"
              className="rounded-4 w-full placeholder:text-[10px] p-1 outline-none border border-gray-3"
            />
          </div>
          <p>آدرس ملک متقاضی</p>
          <div className="flex flex-col my-5 md:flex-row w-full">
            <div className="w-[100%] md:ml-10 md:w-[50%] lg:w-[60%] flex flex-col md:flex-row">
              <div>
                <input
                  type="text"
                  placeholder="استان"
                  className="rounded-4 w-full m-1 placeholder:text-[10px] p-1 outline-none border border-gray-3"
                />{" "}
                <input
                  type="text"
                  placeholder="منطقه"
                  className="rounded-4 w-full m-1 placeholder:text-[10px] p-1 outline-none border border-gray-3"
                />
              </div>
              <div className="md:mr-3">
                <input
                  type="text"
                  placeholder="شهر"
                  className="rounded-4 w-full m-1 placeholder:text-[10px] p-1 outline-none border border-gray-3"
                />{" "}
                <textarea
                  placeholder="آدرس دقیق"
                  className="rounded-4 resize-none w-full m-1 placeholder:text-[10px] p-1 outline-none border border-gray-3"
                />
              </div>
            </div>
            <div className="w-[100%] md:w-[50%] lg:w-[30%]">
              <img
                className="mx-auto md:w-full lg:w-full block w-full sm:w-[80%]"
                src="./Images/map.png"
                alt=""
              />
            </div>
          </div>
          <p>مشخصات ملک متقاضی</p>
          <div className="flex flex-col md:flex-row gap-4 justify-around my-5">
            <input
              type="text"
              placeholder="نوع مالکیت"
              className="rounded-4 w-full placeholder:text-[10px] p-1 outline-none border border-gray-3"
            />
            <input
              type="number"
              placeholder="مساحت ملک(متر مربع)"
              className="rounded-4 w-full placeholder:text-[10px] p-1 outline-none border border-gray-3"
            />
            <input
              type="number"
              placeholder="سن بنا"
              className="rounded-4 w-full placeholder:text-[10px] p-1 outline-none border border-gray-3"
            />
          </div>
          <div className="my-5">
            <p>امکانات ملک متقاضی</p>
            <div className="flex items-start mt-4 flex-col md:flex-row justify-evenly">
              <div className="w-full md:w-1/2 text-[12px] md:text-[15px]">
                <p className="text-start">ملک متقاضی:</p>
                <div className="flex mt-5 w-2/3 justify-between items-center">
                  <div className="flex w-1/2 gap-1 items-center">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />{" "}
                    <p>پروانه کسب دارد.</p>
                  </div>
                  <div className="flex w-1/2 gap-1 items-center">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />{" "}
                    <p>آشبزخانه دارد.</p>
                  </div>
                </div>
                <div className="flex mt-2 items-center w-2/3 justify-between">
                  <div className="flex w-1/2 gap-1 items-center">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />{" "}
                    <p>پارکینگ دارد.</p>
                  </div>
                  <div className="flex w-1/2 gap-1 items-center">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      name=""
                      id=""
                    />{" "}
                    <p>انبار دارد.</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-start pt-3">تصاویر ملک:</p>
                <div className="border mt-5 cursor-pointer flex-col border-gray-4 rounded-8 w-full flex items-center justify-center h-[192px]">
                  <BsFolderPlus className="text-[35px]" />
                  <p>تصاویری از ملک را بارگذاری کنید...</p>
                </div>
              </div>
            </div>
            <button className="bg-primary text-white rounded-4 px-3 py-1 block mx-auto mt-5">
              ثبت اطلاعات
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Franchise;
