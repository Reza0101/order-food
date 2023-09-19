import { AiTwotoneHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const boxFood = ({ img, name, price, star, score, fodes, like }: any) => {
  const discountedAmount = score && (score * price) / 100;
  const starImageSrc = ["./Images/star/Rate1.png", "./Images/stare/Rate2.png", "./Images/star/Rate3.png", "./Images/star/Rate4.png", "./Images/star/Rate5.png"]

  return (
    <div className="w-[168px] h-[231px] md:w-[288px] md:h-[433px] rounded-4 md:rounded-8 border border-gray-4">
      <img
        src={img}
        className="h-[109px] md:h-[256px] w-full rounded-t-4 md:rounded-t-8"
        alt=""
      />
      <p className="text-[12px] md:text-[20px]">{name}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <p className="px-[4px] text-error bg-[#FFF2F2]">{score}%</p>
          <p className="line-through text-gray-5">{price}</p>
        </div>
        {like ? (
          <AiTwotoneHeart className="w-[16px] h-[16px] text-error" />
        ) : (
          <div className="flex items-center text-gray-4">
            <p className="md:hidden">افزودن به علاقه مندی ها</p>
            <AiOutlineHeart className="w-[16px] h-[16px]" />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p>
          {discountedAmount}
          تومان
        </p>
        <div className="flex items-center gap-1">
          <p className="text-gray-4">({fodes} امتیاز)</p>
          {star}
          <img src={starImageSrc[star - 1]} alt="" />
        </div>
      </div>
      <button className="w-full py-2 text-white text-center text-[10px] md:text-[16px]">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default boxFood;
