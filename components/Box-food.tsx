import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import { formatPrice } from "@/utils/helper";

const BoxFood = ({ img, name, price, star, score, votes, like }: any) => {
  const discountedAmount = score && (score * price) / 100;
  const starImageSrc = [
    "./Images/star/Rate1.png",
    "./Images/stare/Rate2.png",
    "./Images/star/Rate3.png",
    "./Images/star/Rate4.png",
    "./Images/star/Rate5.png",
  ];

  return (
    <div className="w-[180px] bg-white h-[231px] md:w-[220px] md:h-[360px] lg:w-[288px] lg:h-[433px] rounded-4 md:rounded-8 border border-gray-4">
      <Image
        src={img}
        className="h-[109px] opacity-0 transition-opacity bg-cover bg-center md:h-[200px] lg:h-[256px] w-full rounded-t-4 md:rounded-t-8"
        alt=""
        onLoadingComplete={(image) => {
          image.classList.remove('opacity-0')
        }}
        height={100}
        width={200}
        style={{
          width: '100%'
        }}
      />
      <p className="text-[12px] text-center py-2 font-[400] md:text-[20px]">
        {name}
      </p>
      <div className="flex flero px-[8px] md:px-[16px] justify-between items-center">
        {like ? (
          <AiTwotoneHeart className="w-[16px] cursor-pointer h-[16px] text-error" />
        ) : (
          <div className="flex gap-1 items-center text-gray-4">
            <AiOutlineHeart className="w-[16px] cursor-pointer h-[16px]" />
            <p className="hidden md:block text-[10px]">
              افزودن به علاقه مندی ها
            </p>
          </div>
        )}
        <div className="flex items-center gap-1 text-[10px]">
          {score && (
            <p className="px-[4px] text-error bg-[#FFF2F2] rounded-8">
              {score}%
            </p>
          )}
          <p className={`text-gray-5 ${score && "line-through"}`}>{formatPrice(price)}</p>
        </div>
      </div>
      <div className="flex my-1 px-[8px] md:px-[16px] items-center justify-between text-[10px] md:text-[16px]">
        <div className="flex flex-row-reverse items-center gap-1">
          <p className="text-gray-4 text-[10px] hidden md:block">({votes} امتیاز)</p>
          {star}
          <img src={starImageSrc[star - 1]} alt="" />
        </div>
        <p>
          {formatPrice(discountedAmount)}
          تومان
        </p>
      </div>
      <div className="px-[8px] md:px-[16px]">
        <button className="w-full py-2 rounded-4 font-[400] text-white bg-primary  text-center text-[10px] md:text-[16px]">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default BoxFood;
