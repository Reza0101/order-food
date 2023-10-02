const ModalCancelOrder = ({ setShow }: any) => {
  return (
    <div
      onClick={() => setShow(false)}
      className="flex items-center top-0 right-0 fixed z-50 w-[100%]  justify-center"
    >
      <div className="z-40 fixed top-0 bg-black opacity-[0.8] w-[100%] h-[100%]"></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute modalAnimation w-[330px] sm:w-[450px] md:w-[550px] lg:w-[600px] h-[200px] z-50 rounded-8 bg-white mx-auto top-[200px] md:top-[150px]"
      >
        <div className="h-[50px] w-full bg-gray-3 rounded-t-8 flex items-center justify-center">
          <p className="text-[20px] font-bold">لغو سفارش</p>
        </div>
        <p className="text-center py-9">آیا از لغو سفارش خود مطمعن هستید؟</p>

        <div className="flex items-center px-[15px] justify-center gap-4 w-full rounded-b-4 md:rounded-b-8 h-fit bg-white">
          <button
            onClick={() => setShow(false)}
            className="text-white bg-primary py-1 px-5 rounded-4"
          >
            بازگشت
          </button>
          <button
            onClick={() => setShow(false)}
            className="text-error bg-gray-3 py-1 px-6 rounded-4"
          >
            لغو سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCancelOrder;
