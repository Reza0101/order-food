import { useState } from "react";
import ModalImage from "./ModalImage";
import Link from "next/link";

const BoxContact = ({
  id,
  img,
  name,
  address,
  phone,
  hoursWork,
  setShow,
  showImage,
}: any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex w-[320px] md:w-[700px] md:h-[200px] lg:w-[1000px] lg:h-[280px] flex-col md:flex-row border rounded-4 items-center">
        <div
          onClick={() => setShow(id)}
          style={{ backgroundImage: `url(${img})` }}
          className="w-full relative overflow-hidden  bg-cover bg-clip-content bg-center bg-no-repeat cursor-pointer h-[112px] md:w-[400px] lg:w-[600px] md:h-full rounded-t-4 md:rounded-0 md:rounded-r-4"
        >
          <div
            className={`${
              showImage === id &&
              "absolute bg-black w-full h-[112px] opacity-[.5] rounded-t-4 md:w-[400px] lg:w-[700px] md:h-full "
            }`}
          ></div>

          <div
            className={`flex items-center justify-center w-full h-full ${
              id == showImage ? "flex" : "hidden"
            }`}
          >
            {/*Circel backg to image*/}
            <div className="z-40 absolute h-full flex items-center justify-center">
              <div className="circleImage2 absolute w-[50px] h-[50px] bg-white rounded-full"></div>
            </div>

            <div className="absolute z-30 h-full flex items-center justify-center">
              <div className="circleImage absolute w-[70px] h-[70px] bg-white rounded-full z-50"></div>
            </div>

            <div className="w-full h-full items-center bg-transparent flex justify-center">
              <img
                onClick={() => {
                  setShowModal(true);
                  setShow(id);
                }}
                src="./Images/logos/logoImage.png"
                className={`w-[32px] h-[32px] absolute z-50 ${
                  showImage == id ? "block" : "hidden"
                }`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col px-6 lg:w-[400px]">
          <p className="text-[12px] font-[400] lg:text-[20px] lg:font-[600] md:text-[18px] py-3">
            {name}
          </p>
          <div className="text-[10px] lg:text-[18px] text-center">
            <p>{address}</p>
            <p>
              شماره تماس:
              {phone}
            </p>
            <p>
              ساعت کاری: همه‌روزه از ساعت
              <span>{hoursWork[0]}</span>
              الی
              <span>{hoursWork[1]}</span>
              بجز روز های تعطیل
            </p>
          </div>
          <div className="flex text-[10px] items-center lg:text-[16px] w-full gap-5 my-3 md:text-[14px]">
              <button className="border border-primary rounded-4 w-full py-1 text-primary">
                صفحه شعبه
              </button>
            <button className="text-white bg-primary rounded-4 w-full py-1">
              دیدن در نقشه
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalImage setShow={setShowModal} img={img} />
      )}
    </>
  );
};

export default BoxContact;
