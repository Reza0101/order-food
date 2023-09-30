
const ModalDelete = ({ setShow }: any) => {


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
          <p className="text-[20px] font-bold">حذف</p>
        </div>
        <p className="text-center py-9">آیا از حذف آدرس مطمعا هستید؟</p>

        <div className="flex items-center px-[15px] justify-center gap-4 w-full rounded-b-4 md:rounded-b-8 h-fit bg-white">
          <button onClick={() => setShow(false)} className="text-primary bg-white py-1 border border-primary px-6 rounded-4">
            بازگشت
          </button>
          <button onClick={() => setShow(false)} className="text-error bg-gray-3 py-1 px-8 rounded-4">
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
