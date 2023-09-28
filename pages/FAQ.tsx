import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.css";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <Layout>
      <img
        src="./Images/FAQ.png"
        className="w-full h-[176px] grayscale sm:h-[200px] md:h-[250] lg:h-[330px]"
        alt=""
      />
      <div className="bg-gray-3  px-[20px] md:px-[60px] lg:px-[80px]">
        <p className="text-primary border-b-2 text-[14px] md:text-[20px] w-fit py-2 border-primary">
          سوالات متداول
        </p>
      </div>
      <div className="px-[20px] md:px-[60px] lg:px-[80px]">
        <Accordion dir="rtl">=</Accordion>
      </div>
    </Layout>
  );
};
export default FAQ;
