import Layout from "@/components/Layout";
import BoxProfile from "@/components/profile/Box-profile";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { AiOutlineFieldTime } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWatchLater, MdOutlinePayment } from "react-icons/md";
import BoxFood from "@/components/profile/Box-food";

const ordersTrack = () => {
  const listOrders = ["همه", "جاری", "تحویل شده", "لغو شده"];
  const [filterOrdersName, setFilterOrdersName] = useState("همه");

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

          <div className="items-end gap-2 m-2 flex">
            {listOrders.map((item) => (
              <div
                onClick={() => setFilterOrdersName(item)}
                className={`flex text-[12px] py-1 px-2 md:px-5 cursor-pointer items-center gap-1 rounded-8 ${
                  item === filterOrdersName ? "bg-tint-1" : "bg-gray-3"
                }`}
              >
                <TiTick
                  className={`${
                    item === filterOrdersName ? "block" : "hidden"
                  }`}
                />
                <p>{item}</p>
                <IoIosArrowBack
                  className={`${
                    item === filterOrdersName ? "hidden" : "block"
                  }`}
                />
              </div>
            ))}
          </div>
          {/*  */}
          <div className="rounded-4 border border-gray-4 p-3 w-full my-5">
            <div className="flex items-center justify-between">
              <p className="text-[14px] md:text-[16px]">شعبه ونک</p>
              <div className="flex text-[12px] md:text-[14px] items-center gap-2">
                <p className="rounded-4 px-1 bg-gray-3 py-[3px]">
                  ارسال توسط پیک
                </p>
                <p className="rounded-4 p-1 bg-[#FFF8E1] py-[3px] text-error">
                  جاری
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-1 text-[14px]">
                <AiOutlineFieldTime className="text-[20px]" />
                <p>شنبه، ۸ مرداد، ساعت ۱۸:۵۳</p>
              </div>
              <div className="flex items-center gap-1 text-[14px]">
                <MdOutlineWatchLater className="text-[20px]" />
                <p>آماده تحویل تا 23:50</p>
              </div>
            </div>
            <div className="flex items-center gap-1 my-3">
              <CiLocationOn className="text-[20px]" />
              <p className="text-[14px]">
                تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
              </p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlinePayment className="text-[20px]" />
              <p className="text-[14px]">مبلغ: 250,000, تخفیف: 15,000</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 my-5">
              <BoxFood />
              <BoxFood />
              <BoxFood />
              <BoxFood />
              <BoxFood />
            </div>
            <div className="flex justify-center md:justify-end">
              <button
                className="text-error border border-error py-1 px-3 rounded-4 w-fit"
              >
                لغو سفارش
              </button>
            </div>
          </div>
          {/*  */}
          <div className="rounded-4 border border-gray-4 p-3 w-full my-5">
            <div className="flex items-center justify-between">
              <p className="text-[14px] md:text-[16px]">شعبه ونک</p>
              <div className="flex text-[12px] md:text-[14px] items-center gap-2">
                <p className="rounded-4 p-1 bg-gray-3">تحویل حضوری</p>
                <p className="rounded-4 p-1 bg-tint-1 text-primary">
                  تحویل شده
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-1 text-[14px]">
                <AiOutlineFieldTime className="text-[20px]" />
                <p>شنبه، ۸ مرداد، ساعت ۱۸:۵۳</p>
              </div>
              <div className="flex items-center gap-1 text-[14px]">
                <MdOutlineWatchLater className="text-[20px]" />
                <p>آماده تحویل تا 23:50</p>
              </div>
            </div>
            <div className="flex items-center gap-1 my-3">
              <CiLocationOn className="text-[20px]" />
              <p className="text-[14px]">
                تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
              </p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlinePayment className="text-[20px]" />
              <p className="text-[14px]">مبلغ: 250,000, تخفیف: 15,000</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 my-5">
              <BoxFood />
              <BoxFood />
              <BoxFood />
              <BoxFood />
              <BoxFood />
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                href="/menu"
                className="text-primary border border-primary py-1 px-3 rounded-4 w-fit"
              >
                سفارش مجدد
              </Link>
            </div>
          </div>
          {/*  */}
          <div className="rounded-4 border border-gray-4 p-3 w-full my-5">
            <div className="flex items-center justify-between">
              <p className="text-[14px] md:text-[16px]">شعبه ونک</p>
              <div className="flex text-[12px] md:text-[14px] items-center gap-2">
                <p className="rounded-4 p-1 bg-gray-3">تحویل حضوری</p>
                <p className="rounded-4 p-1 text-error bg-gray-3">لغو شده</p>
              </div>
            </div>

            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-1 text-[14px]">
                <AiOutlineFieldTime className="text-[20px]" />
                <p>شنبه، ۸ مرداد، ساعت ۱۸:۵۳</p>
              </div>
              <div className="flex items-center gap-1 text-[14px]">
                <MdOutlineWatchLater className="text-[20px]" />
                <p>آماده تحویل تا 23:50</p>
              </div>
            </div>
            <div className="flex items-center gap-1 my-3">
              <CiLocationOn className="text-[20px]" />
              <p className="text-[14px]">
                تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
              </p>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlinePayment className="text-[20px]" />
              <p className="text-[14px]">مبلغ: 250,000, تخفیف: 15,000</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 my-5">
              <BoxFood />
              <BoxFood />
              <BoxFood />
              <BoxFood />
              <BoxFood />
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                href="/menu"
                className="text-primary border border-primary py-1 px-3 rounded-4 w-fit"
              >
                سفارش مجدد
              </Link>
            </div>
          </div>

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
