import Link from "next/link";
const Cart = ({ setPage }: any) => {
  return (
    <div className="px-[20px]">
      {/* no product */}
      <div className="border border-gray-4 rounded-4 my-3 md:rounded-8 mx-auto relative">
        <div className="flex w-full h-[350px] items-center justify-center">
          <img
            className="w-[200px] absolute h-[190px] mx-auto"
            src="./Images/empty-page.png"
            alt=""
          />
          <div className="flex absolute z-40 flex-col gap-3 items-center">
            <p>شما در حال حاضر هیچ سفارشی ثبت نکرده اید!</p>
            <p className="rounded-4 border border-primary py-1 px-3">
              <Link href="/menu">منوی رستوران</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
