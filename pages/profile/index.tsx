import Layout from "@/components/Layout";
import SearchBox from "@/components/SearchBox";
import BoxProfile from "@/components/profile/Box-profile";
import Link from "next/link";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import BoxFood from "@/components/Box-food";

const index = () => {
  return (
    <Layout>
      <div className="px-[20px] mb-5 md:px-[60px] lg:px-[8010x] flex items-start gap-5">
        <div className="hidden md:block mt-5">
          <BoxProfile />
        </div>
        <div className="rounded-4 border border-gray-4 p-5 w-full my-5">
          <div className="flex pb-2 items-center justify-center md:justify-between">
            <p className="text-[12px] md:text-[20px]">ویرایش اطلاعات شخصی</p>
          </div>
          <hr />
          <div className="flex items-center justify-between flex-wrap">
            <div className="relative my-5 w-full md:w-1/2">
              <p className="absolute bg-white px-1 -top-3 right-8 md:right-7 lg:right-10 text-[12px]">
                نام
              </p>
              <input
                type="text"
                className="rounded-4 mx-auto block w-[90%] border-gray-4 outline-none placeholder:text-[13px] border p-1"
              />
            </div>
            <div className="relative my-5 w-full md:w-1/2">
              <p className="absolute bg-white px-1 -top-3 right-8 md:right-7 lg:right-10 text-[12px]">
                نام خانوادگی
              </p>
              <input
                type="text"
                className="rounded-4 mx-auto block w-[90%]  border-gray-4 outline-none placeholder:text-[13px] border p-1"
              />
            </div>
            <div className="relative my-5 w-full md:w-1/2">
              <p className="absolute bg-white px-1 -top-3 right-8 md:right-7 lg:right-10 text-[12px]">
                آدرس ایمیل
              </p>
              <input
                type="email"
                className="rounded-4 mx-auto block w-[90%] text-left border-gray-4 outline-none placeholder:text-[13px] border p-1"
              />
            </div>
            <div className="relative my-5 w-full md:w-1/2">
              <p className="absolute bg-white px-1 -top-3 right-8 md:right-7 lg:right-10 text-[12px]">
                شماره همراه
              </p>
              <input
                type="number"
                className="rounded-4 mx-auto block w-[90%] text-left border-gray-4 outline-none placeholder:text-[13px] border p-1"
              />
            </div>
            <div className="relative my-5 w-full md:w-1/2">
              <p className="absolute bg-white px-1 -top-3 right-8 md:right-7 lg:right-10 text-[12px]">
                تاریخ تولد (اختیاری)
              </p>
              <input
                type="text"
                className="rounded-4 mx-auto block w-[90%] border-gray-4 outline-none placeholder:text-[13px] border p-1"
              />
            </div>
            <div className="relative my-5 w-full md:w-1/2">
              <p className="absolute bg-white px-1 -top-3 right-8 md:right-7 lg:right-10 text-[12px]">
                نام نمایشی
              </p>
              <input
                type="text"
                className="rounded-4 mx-auto block w-[90%] border-gray-4 outline-none placeholder:text-[13px] border p-1"
              />
            </div>
          </div> 
          <div className="flex items-center gap-5 justify-center">
                <button className="border border-primary rounded-4 text-primary py-1 px-16">انصراف</button>
                <button className="bg-primary text-white rounded-4 py-1 px-8">ذخیره اطلاعات</button>
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
};

export default index;
