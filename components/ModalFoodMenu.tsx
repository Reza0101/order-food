const ModalMenuFood = ({ setShow, data }: any) => {

    const imageStar = [
        "./Images/star/1star.png",
        "./Images/star/2star.png",
        "./Images/star/3star.png",
        "./Images/star/4star.png",
        "./Images/star/5star.png",
      ];

  return (
    <div
      onClick={() => setShow(false)}
      className="flex items-center top-0 right-0 fixed z-50 w-[100%]  justify-center"
    >
      <div className="z-40 fixed top-0 bg-black opacity-[0.8] w-[100%] h-[100%]"></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute modalAnimation w-[330px] sm:w-[450px] md:w-[550px] lg:w-[600px] h-[253px] z-50 rounded-8 bg-white mx-auto top-[200px] md:top-[150px]"
      >
        <div className="h-[50px] w-full bg-gray-3 rounded-t-8 flex items-center justify-center">
          <p className="text-[20px] font-bold">اطلاعات محصول</p>
        </div>
        <img src={data.img} className="h-fit w-full" alt="" />
        <div className="flex items-center px-[15px] justify-between w-full rounded-b-4 md:rounded-b-8 h-fit bg-white">
          <div className="flex flex-col gap-1">
            <p className="text-[14px] md:text-[16px]">{data.name}</p>
            <p className="text-[10px] md:text-[14px] pb-1">{data.compounds}</p>
          </div>
          <div>
            <img className="h-[12px] md:h-[16px]" src={imageStar[data.star - 1]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenuFood;
