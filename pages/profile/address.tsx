import Layout from "@/components/Layout";
import BoxAddress from "@/components/cart/Box-Address";
import BoxProfile from "@/components/profile/Box-profile";
import Link from "next/link";
import ModalAddAddress from "@/components/profile/ModalAddAddress";
import { useState } from "react";

const address = () => {
  const [showModalAddAddress, setShowModalAddAddress] = useState(false);

  return (
    <Layout>
      <div className="px-[20px] md:px-[60px] lg:px-[80px] flex items-start gap-5">
        <div className="hidden md:block mt-5">
          <BoxProfile />
        </div>
        <div className="rounded-4 border border-gray-4 p-5 w-full my-5">
          {/* empty address */}

          {/* not empty address */}
          <div className="flex pb-2 items-center justify-center md:justify-between">
            <p className="text-[20px]">آدرس ها</p>
            <div onClick={() => setShowModalAddAddress(true)} className="hidden md:flex items-center gap-1 cursor-pointer text-[12px] text-primary">
              <p>افزدون آدرس جدید</p>
              <p className="border border-primary rounded-full w-4 flex items-center justify-center h-4">
                +
              </p>
            </div>
          </div>
          <hr />
          <div className="flex w-full h-[350px] items-center justify-center">
            <img
              className="w-[200px] absolute h-[190px] mx-auto"
              src="/Images/empty-page.png"
              alt=""
            />
            <div className="flex absolute z-40 flex-col gap-3 items-center">
              <p>شما در حال حاضر هیچ آدرسی را ثبت نکرده اید!</p>
              <p onClick={() => setShowModalAddAddress(true)} className="rounded-4 border border-primary py-1 px-3">
                <Link href="">افزودن آدرس</Link>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-5 gap-5 justify-center">
            <BoxAddress />
            <BoxAddress />
          </div>
          <button className="text-primary md:hidden bg-white border-primary border py-1 px-3 mx-auto mt-4 rounded-4 block">
            افزودن آدرس جدید
          </button>
        </div>
      </div>

      {showModalAddAddress && (
        <ModalAddAddress setShow={setShowModalAddAddress} />
      )}
    </Layout>
  );
};

export default address;
