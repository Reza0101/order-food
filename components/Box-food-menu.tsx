import Image from "next/image";

const BoxFoodMenu = ({ img, name, price, compounds, discount, star }: any) => {
  const priceDiscount = discount && price - (price * discount) / 100;
  const imageStar = [
    "./Images/star/1star.png",
    "./Images/star/2star.png",
    "./Images/star/3star.png",
    "./Images/star/4star.png",
    "./Images/star/5star.png",
  ];

  return (
    <div className="min-w-[320px] flex items-center border rounded-4 border-gray-4 md:rounded-8">
      <div className="w-[92px] sm:w-[170px] rounded-r-4 md:rounded-r-8 h-[100px] md:w-[132px] md:h-[120px] lg:w-[169px] lg:h-[158px] overflow-hidden">
        <Image
          className="opacity-0"
          style={{ width: "100%", height: "100%" }}
          width={0}
          height={0}
          sizes="100vh"
          src={img}
          alt="imgFood"
          onLoadingComplete={(image) => {
            image.classList.remove('opacity-0')
          }}
        />
      </div>
      <div className="px-[8px] w-full">
        <div className="flex items-center justify-between w-full my-1">
          <p className="md:text-[17px] lg:text-[20px]">{name}</p>
          {discount && (
            <div className="flex items-center gap-1">
              <p className="line-through text-gray-5 text-[10px] md:text-[16px]">
                {price}
              </p>
              <p className="text-[10px] p-1 md:text-[12px] text-error bg-gray-3 rounded-8">
                {discount}%
              </p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between w-full my-1">
          <p className="text-[10px] md:text-[14px] pl-1 line-clamp-1 md:line-clamp-2">
            {compounds}
          </p>
          <div className="text-[10px] flex gap-1 items-center md:text-[18px]">
            {discount ? <span>{priceDiscount}</span> : <span>{price}</span>}
            تومان
          </div>
        </div>
        <div className="flex items-center justify-between w-full my-1">
          <img
            src={imageStar[star - 1]}
            className="w-[80px] lg:w-[158px] mg:w-[120px] h-[18px] md:h-[21px] lg:h-[24px]"
            alt=""
          />
          <button className="bg-primary text-white p-2 rounded-4 md:rounded-8 text-[10px]">
            افزدون به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};
export default BoxFoodMenu;
