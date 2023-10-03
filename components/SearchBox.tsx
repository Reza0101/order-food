import { RiSearch2Line } from "react-icons/ri";


const SearchBox = () => {
  return (
    <>
      <div className="w-full sm:w-[350px] mx-auto rounded-4 flex items-center py-[2px] px-[8px] justify-between border border-black">
        <input
          type="text"
          placeholder="جستجو"
          className="w-full h-full outline-none bg-transparent"
        />
        <RiSearch2Line className="cursor-pointer" />
      </div>
    </>
  );
};

export default SearchBox;
