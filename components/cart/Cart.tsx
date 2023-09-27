import Link from "next/link";
// import iconst
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiWarningOctagonBold } from "react-icons/pi";
import BoxCart from "./Box-Food-Cart";
import { formatPrice } from "@/utils/helper";
const Cart = ({ setPage }: any) => {
  return (
    <div className="px-[20px]">
      {/* Empty cart */}
      <div className="border border-gray-4 rounded-4 my-3 md:rounded-8 mx-auto relative">
        <div className="flex w-full h-[350px] items-center justify-center">
          <img
            className="w-[200px] absolute h-[190px] mx-auto"
            src="./Images/empty-page.png"
            alt=""
          />
          <div className="flex absolute z-40 flex-col gap-3 items-center">
            <p>شما در حال حاضر هیچ سفارشی ثبت نکرده اید!</p>
            <p className="rounded-4 border border-primary py-1 px-3">
              <Link href="/menu">منوی رستوران</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="border-gray-4 gap-3 flex flex-col md:flex-row justify-between items-start rounded-4 md:rounded-8 my-3 w-full mx-auto border md:border-none">
        <div
          dir="ltr"
          className="md:border rounded-8 h-[200px] md:h-[558px] overflow-scroll border-gray-4 p-2 w-full md:w-[60%]"
        >
          <BoxCart />
          <BoxCart />
          <BoxCart />
          <BoxCart />
        </div>
        <div className="md:border rounded-8 border-gray-4 p-2 w-full md:w-[40%]">
          <div className="flex my-1 items-center w-full justify-between">
            <p className="text-[14px] md:text-[16px]">سبد خرید (4)</p>
            <RiDeleteBin6Line className="md:text-[24px] cursor-pointer" />
          </div>
          <hr />
          <div className="flex py-1 my-1 text-[14px] items-center justify-between w-full">
            <p>تخفیف محصولات</p>
            <p>
              <span>{formatPrice('63000')}</span> تومان
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
          <div className="flex text-[16px] items-center justify-center gap-2 bg-primary text-white rounded-4 w-full py-1 my-2 cursor-pointer">
            <p
              onClick={() => setPage((prev : number) => prev + 1)}
              className="font-[400]"
            >
              تکمیل اطلاعات
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
