import SearchBox from "./SearchBox";

const SearchModal = ({ setShow }: any) => {
  return (
    <div
      onClick={() => setShow(false)}
      className="flex items-center top-0 right-0 fixed z-50 w-[100%]  justify-center"
    >
      <div className="z-40 fixed top-0 bg-black opacity-[0.8] w-[100%] h-[100%]"></div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute modalAnimation w-[600px] h-[253px] z-50 rounded-8 bg-white mx-auto top-[200px] md:top-[150px]"
      >
        <div className="h-[84px] w-full bg-gray-3 rounded-t-8 flex items-center justify-center">
            <p className="text-[20px] font-bold">جستجو</p>
        </div>
        <p className="text-center text=[16px] pt-4">لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.</p>
        <SearchBox />
      </div>
    </div>
  );
};

export default SearchModal;
