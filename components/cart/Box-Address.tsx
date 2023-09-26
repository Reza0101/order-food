import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const BoxAddress = ({ location, name, phone }: any) => {
  return (
    <div className="w-full sm:w-[260px] md:w-[280px] lg:w-[300px] border-primary bg-gray-1 rounded-4 border  p-2">
      <div className="flex items-center justify-around">
        <p className="text-[10px] sm:text-[14px]">
          تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
        </p>
        <AiOutlineEdit className="cursor-pointer text-[16px] sm:text-[18px] md:text-[24px] md:mr-2" />
        <RiDeleteBin6Line className="cursor-pointer text-[16px] sm:text-[18px] md:text-[24px] md:mr-2" />
      </div>
      <div className="w-full flex justify-around my-2 text-[12px] md:text-[16px]">
        <p>محل کار</p>
        <p>سردار وظیفه</p>
        <p>09037246099</p>
      </div>
    </div>
  );
};

export default BoxAddress;
