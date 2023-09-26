import { RiDeleteBin6Line } from "react-icons/ri";
import { PiWarningOctagonBold } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import BoxAddress from "./Box-Address";

const Information = ({ setPage }: any) => {
  return (
    <div dir="rtl" className="px-[20px]">
      <div className="gap-3 flex flex-col md:flex-row justify-between items-start rounded-4 md:rounded-8 my-3 w-full mx-auto">
        <div dir="rtl" className="w-full md:w-[60%]">
          <div className="flex gap-2 items-start px-2 py-2 flex-col sm:flex-row justify-around rounded-4 md:rounded-8 border border-gray-4 w-full">
            <div className="flex items-center mt-2 gap-1">
              <img
                className="w-[16px] md:w-[24px]"
                src="./Images/logos/truck.png"
                alt=""
              />
              <p className="text-[14px] md:text-[16px]">روش تحویل سفارش</p>
            </div>
            <p className="w-full h-[1px] bg-gray-4 sm:hidden"></p>
            <div className="flex items-center gap-1">
              <input name="fff" className="checkbox border" type="checkbox" />
              <div className="text-[12px] md:text-[14px]" dir="rtl">
                <p>ارسال توسط پیک</p>
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
              <input name="fff" className="checkbox" type="checkbox" />
              <div className="text-[12px] md:text-[14px]" dir="rtl">
                <p>تحویل حضوری</p>
                <p className="hidden sm:block text-[10px]">
                  توسط پیک رستوران ارسال شود.
                </p>
              </div>
              <HiOutlineShoppingBag />
            </div>
          </div>
          {/* Title address */}
          <div className="w-full border border-t-gray-4 rounded-8 my-2 p-2">
            <div className="flex py-2 items-center justify-between">
              <div className="flex items-center">
                <CiLocationOn className="text-[24px]" />
                <p>آدرس ها</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer text-primary">
                <p>افزدون آدرس</p>
                <span className="border border-primary px-2 rounded-full w-min">
                  +
                </span>
              </div>
            </div>
            <hr />
            {/* Empty location */}
            <div className="flex w-full h-[350px] items-center justify-center">
              <img
                className="w-[200px] absolute h-[190px] mx-auto"
                src="./Images/empty-page.png"
                alt=""
              />
              <div className="flex absolute z-40 flex-col gap-3 items-center">
                <p>شما در حال حاضر هیچ آدرسی ثبت نکرده اید!</p>
              </div>
            </div>
            {/* existence of address */}
            <div className="w-full flex flex-wrap justify-around gap-2">
              <BoxAddress />
              <BoxAddress />
              <BoxAddress />
              <BoxAddress />
              <BoxAddress />
            </div>
          </div>
          {/* description */}
          <div className="rounded-8 flex gap-1 items-start border border-gray-4 p-3 my-4">
            <img
              className="w-[24px]"
              src="./Images/logos/document-normal.png"
              alt=""
            />
            <textarea
              className="w-full resize-none min-h-[100px] outline-none"
              placeholder="توضیحات(اختیاری)"
              name=""
              id=""
            ></textarea>
          </div>
        </div>
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
            {/* product item in cart */}
            <div className="flex p-1 items-center justify-between w-full">
              <div className="flex rounded-8 text-[14px] bg-tint-1 items-center gap-1 p-1">
                <p>+</p>
                <p>3</p>
                <p>-</p>
              </div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px]">
                <p>پاستا سبزیجات</p>
                <p>140000 تومان</p>
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
                <p>140000 تومان</p>
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
                <p>140000 تومان</p>
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
                <p>140000 تومان</p>
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
                <p>140000 تومان</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex py-1 my-1 text-[14px] items-center justify-between w-full">
            <p>تخفیف محصولات</p>
            <p>
              <span>63000</span> تومان
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
            onClick={() => setPage((prev: number) => prev + 1)}
            className="flex text-[16px] items-center justify-center gap-2 bg-primary text-white rounded-4 w-full py-1 my-2 cursor-pointer"
          >
            <p className="font-[400]">ثبت سفارش</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
