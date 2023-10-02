import Layout from "@/components/Layout";
import SearchBox from "@/components/SearchBox";
import BoxProfile from "@/components/profile/Box-profile";
import Link from "next/link";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { IoIosArrowBack } from "react-icons/io";
import BoxFood from "@/components/Box-food";
const ordersTrack = () => {
  return (
    <Layout>
      <div className="px-[20px] md:px-[60px] lg:px-[80px] flex items-start gap-5">
        <div className="hidden md:block mt-5">
          <BoxProfile />
        </div>
        <div className="rounded-4 border border-gray-4 p-5 w-full my-5">
          <div className="flex pb-2 items-center justify-center md:justify-between">
            <p className="text-[12px] md:text-[20px]">سفارشات</p>
          </div>
          <hr />

          {/* empty page */}
          <div className="flex w-full h-[350px] items-center justify-center">
            <img
              className="w-[200px] absolute h-[190px] mx-auto"
              src="/Images/empty-page.png"
              alt=""
            />
            <div className="flex absolute z-40 flex-col gap-3 items-center">
              <p>شما در حال حاضر هیچ سفارشی را ثبت نکرده اید!</p>
              <p className="rounded-4 border border-primary py-1 px-8">
                <Link href="/menu">منوی رستوران</Link>
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </Layout>
  );
};

export default ordersTrack;
