import react, { useState } from "react";
import Layout from "@/components/Layout";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { MdPayment } from "react-icons/md";
// import page component
import Cart from "@/components/cart/Cart";
import Information from "@/components/cart/Information";
import Payment from "@/components/cart/Payment";
import { useRouter } from "next/router";
const cart = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [completed, setCompleted] = useState(false);
  const stepper = [
    { id: 1, text: "سبد خرید", icon: <AiOutlineShoppingCart /> },
    { id: 2, text: "تکمیل اطلاعات", icon: <TiTick /> },
    { id: 3, text: "پرداخت", icon: <MdPayment /> },
  ];

  const stepperPage = [
    <Cart setPage={setCurrentPage} />,
    <Information setPage={setCurrentPage} />,
    <Payment setCompleted={setCompleted} setpate={setCurrentPage} />,
  ];

  const route = useRouter();

  if (completed) {
    setTimeout(() => {
      route.push("/");
    }, 2000);
  }

  return (
    <Layout>
      <div className="flex items-center justify-center my-2">
        {stepper.map((item, index) => (
          <div
            className={`${
              index + 1 <= currentPage &&
              "text-primary cursor-pointer border-primary"
            } flex items-center text-[15px] md:text-[17px] lg:text-[20px]`}
          >
            <div className="flex items-center gap-1">
              <p
                className={`${
                  index + 1 === 2 && "border border-black rounded-4"
                }`}
              >
                {item.icon}
              </p>
              <p>{item.text}</p>
            </div>
            <div
              className={`${
                index + 1 === stepper.length
                  ? "border-none"
                  : "w-[50px] md:w-[80px] lg:w-[100px] border-black h-[1px] border-dashed border-t mt-1"
              } ${index + 1 <= currentPage && "border-primary"}`}
            ></div>
          </div>
        ))}
      </div>
      {completed ? (
        <>
          <img
            src="./Images/Successful payment.png"
            className="w-full mx-auto h-[500px] md:h-[600px]"
            alt=""
          />
        </>
      ) : (
        <>{stepperPage[currentPage - 1]}</>
      )}
    </Layout>
  );
};
export default cart;
