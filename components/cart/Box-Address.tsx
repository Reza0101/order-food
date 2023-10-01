import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalDelete from "../profile/ModalDelete";
import ModalEditAddress from "../profile/ModalEditAddress";

const BoxAddress = ({ location, name, phone, setShow }: any) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEditAddress, setShowModalEditAddress] = useState(false);

  return (
    <>
      <div className="w-full sm:w-[260px] md:w-[400px] lg:w-[300px] border-primary bg-gray-1 rounded-4 border  p-2">
        <div className="flex items-center justify-around">
          <p className="text-[10px] sm:text-[14px]">
            تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
          </p>
          <AiOutlineEdit onClick={() => setShowModalEditAddress(true)} className="cursor-pointer text-[16px] sm:text-[18px] md:text-[24px] md:mr-2" />
          <RiDeleteBin6Line
            onClick={() => setShowModalDelete(true)}
            className="cursor-pointer text-[16px] sm:text-[18px] md:text-[24px] md:mr-2"
          />
        </div>
        <div className="w-full flex justify-around my-2 text-[12px] md:text-[16px]">
          <p>محل کار</p>
          <p>سردار وظیفه</p>
          <p>09037246099</p>
        </div>
      </div>
      {showModalDelete && <ModalDelete setShow={setShowModalDelete} />}
      {showModalEditAddress && <ModalEditAddress setShow={setShowModalEditAddress} />}
    </>
  );
};

export default BoxAddress;
