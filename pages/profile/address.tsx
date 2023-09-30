import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import BoxAddress from "@/components/cart/Box-Address";
import BoxProfile from "@/components/profile/Box-profile";

const address = () => {
  return (
    <Layout>
      <div className="px-[20px] md:px-[60px] lg:px-[80px] flex items-start gap-5">
        <div className="hidden md:block mt-5">
          <BoxProfile />
        </div>
        <div className="rounded-4 border border-gray-4 p-5 w-full my-5">
          <div className="flex pb-2 items-center justify-center md:justify-between">
            <p className="text-[20px]">آدرس ها</p>
            <div className="hidden md:flex items-center gap-1 cursor-pointer text-[12px] text-primary">
              <p>افزدون آدرس جدید</p>
              <p className="border border-primary rounded-full w-4 flex items-center justify-center h-4">
                +
              </p>
            </div>
          </div>
          <hr />
          <div className="flex flex-wrap mt-5 gap-5 justify-center">
            <BoxAddress />
            <BoxAddress />
            <BoxAddress />
            <BoxAddress />
          </div>
          <button className="text-primary md:hidden bg-white border-primary border py-1 px-3 mx-auto mt-4 rounded-4 block">افزودن آدرس جدید</button>
        </div>
      </div>
    </Layout>
  );
};

export default address;
