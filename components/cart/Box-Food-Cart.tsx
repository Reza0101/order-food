import { RiDeleteBinLine } from "react-icons/ri";
const BoxCart = () => {
  const imageStar = [
    "./Images/star/1star.png",
    "./Images/star/2star.png",
    "./Images/star/3star.png",
    "./Images/star/4star.png",
    "./Images/star/5star.png",
  ];

  return (
    <div
      dir="rtl"
      className="w-full overflow-hidden rounded-4 my-2 md:my-4 border border-gray-4 h-[85px] sm:h-[110px] md:h-[138px]"
    >
      <div className="flex items-start">
        <img
          src="./Images/dolme.png"
          className="w-[169px] h-[85px] md:h-[138px] sm:h-[110px] hidden sm:block"
          alt=""
        />
        <div className="p-2 md:p-3 text-[12px] w-full">
          <div className="flex items-center justify-between w-full">
            <p className="text-[12px] sm:text-[14px] md:text-[20px] w-max">
              پاستا سبزیجات
            </p>
            <RiDeleteBinLine className="hidden sm:block text-[24px]" />
          </div>
          <div className="flex sm:my-2 items-center justify-between w-full">
            <p className="line-clamp-1 sm:line-clamp-2">
              پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده
            </p>
            <div className="items-center gap-1 flex">
              <p className="line-through text-gray-4">175000</p>
              <p className="text-error rounded-16 p-1 bg-[#FFF2F2]">20%</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
            
              <img src={imageStar[3]} className="hidden h-[14px] md:block" alt="" />
              <div className="flex w-fit gap-2 text-[12px] bg-tint-1 md:p-1 px-1 rounded-4 items-center justify-between">
                <span className="cursor-pointer text-[18px]">+</span>
                <span>2</span>
                <span className="cursor-pointer text-[18px]">-</span>
              </div>
            </div>
            <p>252000 تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoxCart;
