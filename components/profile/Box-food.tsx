const BoxFood = ({ img, item, name, price }: any) => {
  return (
    <div className="rounded-8 relative overflow-hidden w-[100px] md:w-[132px] border border-gray-4">
      <img
        src="/Images/dolme.png"
        className="w-full h-[60px] md:h-[80px] z-0"
        alt=""
      />
      <div className="flex w-full items-center justify-end p-1">
        <div className="flex items-center bg-primary text-white rounded-8 px-1 text-[12px]">
          2<p className="rotate-45 text-[20px]">+</p>
        </div>
      </div>
      <div className="text-[10px] py-2">
        <p className="text-center">کشک بادمجان</p>
        <p className="text-center">250000 تومان</p>
      </div>
    </div>
  );
};
export default BoxFood;
