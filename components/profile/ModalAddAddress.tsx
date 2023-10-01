const ModalAddAddress = ({ setShow }: any) => {
    return (
      <div
        onClick={() => setShow(false)}
        className="flex items-center top-0 right-0 fixed z-50 w-[100%]  justify-center"
      >
        <div className="z-40 fixed top-0 bg-black opacity-[0.8] w-[100%] h-[100%]"></div>
  
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute modalAnimation w-[330px] sm:w-[450px] md:w-[550px] lg:w-[600px] z-50 rounded-8 bg-white mx-auto top-[200px] md:top-[150px]"
        >
          <div className="h-[50px] w-full bg-gray-3 rounded-t-8 flex items-center justify-center">
            <p className="text-[20px] font-bold">ثبت آدرس</p>
          </div>
          <div className="px-[20px]">
            <input type="text" placeholder="عنوان آدرس" className="w-full outline-none p-1 border border-gray-4 rounded-4 my-2" />
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p>تحویل گیرنده خودم هستم</p>
            </div>
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full outline-none p-1 border border-gray-4 rounded-4 my-2"
            />
            <input
              dir="ltr"
              type="number"
              placeholder="شماره همراه گیرنده"
              className="w-full outline-none p-1 placeholder:text-right border border-gray-4 rounded-4 my-2"
            />
            <div className="relative">
              <p className="absolute px-[5px] bg-white p-0 right-2">آدرس</p>
              <textarea placeholder="آدرس دقیق شما" name="" id="" className="w-full h-[180px] mt-3 border rounded-4 outline-none border-gray-4 p-3">
              </textarea>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalAddAddress;
  