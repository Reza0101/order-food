import { RiDeleteBin6Line } from "react-icons/ri";
import { PiWarningOctagonBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import BoxAddress from "./Box-Address";
import { useState } from "react";
import { formatPrice } from "@/utils/helper";

const Payment = ({ setPage, setCompleted }: any) => {
  const [payment, setPayment] = useState("in-person");
  const [bank, setBank] = useState("saman");
  const banks = [
    { id: 1, img: "./Images/banks/saman.png", name: "saman" },
    { id: 2, img: "./Images/banks/melat.png", name: "melat" },
    { id: 3, img: "./Images/banks/parsian.png", name: "parsian" },
  ];

  return (
    <div dir="rtl" className="px-[20px]">
      <div className="gap-3 flex flex-col md:flex-row justify-between items-start rounded-8 my-3 w-full mx-auto">
        <div dir="rtl" className="w-full md:w-[60%]">
          {/* Title address */}
          <div className="rounded-8 border border-gray-4 p-4 my-3 flex flex-col sm:flex-row sm:items-center justify-between items-start">
            <div className="flex gap-1">
              <img
                className="w-[20px]"
                src="./Images/logos/discount-shape.png"
                alt=""
              />
              <p>ثبت کد تخفیف</p>
            </div>
            <hr className="sm:hidden" />
            <div className="flex items-center gap-2 my-3 sm:my-0">
              <input
                className="border rounded-8 px-2 py-1 border-gray-4 outline-none"
                type="text"
                placeholder="کد تخفیف"
              />
              <button disabled className="rounded-8 bg-gray-4 p-1 text-white">
                ثبت کد
              </button>
            </div>
          </div>
          <div className="flex gap-2 items-start px-2 py-2 flex-col sm:flex-row justify-around rounded-8 md:rounded-8 border border-gray-4 w-full">
            <div className="flex items-center mt-2 gap-1">
              <img
                className="w-[16px] md:w-[24px]"
                src="./Images/logos/truck.png"
                alt=""
              />
              <p className="text-[14px] md:text-[16px]">روش پرداخت</p>
            </div>
            <p className="w-full h-[1px] bg-gray-4 sm:hidden"></p>
            <div className="flex items-center gap-1">
              <input
                checked={payment === "delivery" ? true : false}
                onChange={() => setPayment("delivery")}
                className="checkbox"
                type="checkbox"
              />
              <div className="text-[12px] md:text-[14px]" dir="rtl">
                <p>پرداخت اینترنتی</p>
                <p className="hidden sm:block text-[10px]">
                  توسط پیک رستوران ارسال شود.
                </p>
              </div>
              <img
                className="w-[16px] md:w-[24px]"
                src="./Images/logos/truck-fast.png"
                alt=""
              />
            </div>
            <div className="flex items-center gap-1">
              <input
                checked={payment === "in-person" ? true : false}
                onChange={() => setPayment("in-person")}
                className="checkbox"
                type="checkbox"
              />
              <div className="text-[12px] md:text-[14px]" dir="rtl">
                <p>پرداخت در محل</p>
                <p className="hidden sm:block text-[10px]">
                  توسط پیک رستوران ارسال شود.
                </p>
              </div>
              <HiOutlineShoppingBag />
            </div>
          </div>

          {payment === "in-person" ? (
            <div className="w-full bg-gray-1 border border-t-gray-4 rounded-8 my-4 p-2 flex-col md:flex-row flex items-start md:items-center md:gap-3">
              <div className="w-1/4 gap-1 flex items-center">
                <PiWarningOctagonBold />
                <p className="w-max">قابل توجه</p>
              </div>
              <div className="w-full h-[1px] bg-gray-4 md:hidden my-2"></div>
              <p className="text-[12px] mx-1">
                هزینه سفارش شما در حین تحویل کالا دریافت خواهد شد. لطفا قبل از
                تحویل کالا کارت بانکی یا پول نقد همراه خود داشته باشید و از
                درخواست برای پرداخت در زمان بعدی یا نسیه خودداری فرمایید. با
                تشکر از همراهی شما.
              </p>
            </div>
          ) : (
            <div className="flex flex-col border my-4 border-gray-4 rounded-8 ">
              <div className="flex flex-col md:flex-row items-start justify-between p-4">
                <div className="flex items-center gap-1 dm:w-2/6 md:w-4/12">
                  <img
                    className="w-[24px]"
                    src="./Images/logos/card.png"
                    alt=""
                  />
                  <p className="w-fit">درگاه پرداخت</p>
                </div>
                <div className="h-[1px] w-full bg-gray-4 md:hidden my-3"></div>
                <div className="flex items-center justify-center gap-4 w-full dm:w-4/6 md:w-8/12">
                  {banks.map((item) => (
                    <img
                      key={crypto.randomUUID()}
                      onClick={() => setBank(item.name)}
                      src={item.img}
                      className={`w-[64px] md:w-[80px] cursor-pointer ${
                        bank === item.name || "grayscale"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-[10px] mx-auto my-2 text-center">
                <p className="sm:text-[12px] py-1">
                  پرداخت از طریق کلیه کارت‌های عضو شتاب امکان‌پذیر است.‌
                </p>
                <p>(لطفا قبل از پرداخت فیلترشکن خود را خاموش کنید.)</p>
              </div>
            </div>
          )}
        </div>

        {/* item products */}
        <div className="border rounded-8 border-gray-4 p-2 w-full md:w-[40%]">
          <div className="flex my-1 items-center w-full justify-between">
            <p className="text-[14px] md:text-[16px]">سبد خرید (4)</p>
            <RiDeleteBin6Line className="md:text-[24px] cursor-pointer" />
          </div>
          <hr />
          <div
            dir="ltr"
            className="flex h-[186px] overflow-scroll [&>*:nth-child(even)]:bg-gray-3 [&>*:nth-child(odd)]:bg-gray-1 my-2 flex-col items-center"
          >
            <div className="flex p-1 items-center justify-between w-full">
              <div className="flex rounded-8 text-[14px] bg-tint-1 items-center gap-1 p-1">
                <p>+</p>
                <p>3</p>
                <p>-</p>
              </div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px]">
                <p>پاستا سبزیجات</p>
                <p>{formatPrice("140000")} تومان</p>
              </div>
            </div>
            <div className="flex p-1 items-center justify-between w-full">
              <div className="flex rounded-8 text-[14px] bg-tint-1 items-center gap-1 p-1">
                <p>+</p>
                <p>3</p>
                <p>-</p>
              </div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px]">
                <p>پاستا سبزیجات</p>
                <p>{formatPrice("140000")} تومان</p>
              </div>
            </div>
            <div className="flex p-1 items-center justify-between w-full">
              <div className="flex rounded-8 text-[14px] bg-tint-1 items-center gap-1 p-1">
                <p>+</p>
                <p>3</p>
                <p>-</p>
              </div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px]">
                <p>پاستا سبزیجات</p>
                <p>{formatPrice("140000")} تومان</p>
              </div>
            </div>
            <div className="flex p-1 items-center justify-between w-full">
              <div className="flex rounded-8 text-[14px] bg-tint-1 items-center gap-1 p-1">
                <p>+</p>
                <p>3</p>
                <p>-</p>
              </div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px]">
                <p>پاستا سبزیجات</p>
                <p>{formatPrice("140000")} تومان</p>
              </div>
            </div>
            <div className="flex p-1 items-center justify-between w-full">
              <div className="flex rounded-8 text-[14px] bg-tint-1 items-center gap-1 p-1">
                <p>+</p>
                <p>3</p>
                <p>-</p>
              </div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px]">
                <p>پاستا سبزیجات</p>
                <p>{formatPrice("140000")} تومان</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex py-1 my-1 text-[14px] items-center justify-between w-full">
            <p>تخفیف محصولات</p>
            <p>
              <span>{formatPrice("63000")}</span> تومان
            </p>
          </div>
          <hr />
          <div className="flex py-1 my-1 text-[14px] items-center justify-between w-full">
            <p>هزینه ارسال</p>
            <p>
              <span>0</span> تومان
            </p>
          </div>
          <div className="flex items-center text-warning gap-2">
            <PiWarningOctagonBold className="text-[24px]" />
            <p className="text-[10px]">
              هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
              محاسبه و به این مبلغ اضافه خواهد شد.
            </p>
          </div>
          <hr />
          <div
            onClick={() => setCompleted(true)}
            className="flex text-[16px] items-center justify-center gap-2 bg-primary text-white rounded-4 w-full py-1 my-2 cursor-pointer"
          >
            <p className="font-[400]">تایید و پرداخت</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
