import BoxContact from "@/components/Box-contact";
import Layout from "@/components/Layout";
import { useState } from "react";

const contactUs = () => {

  const [showImage, setShowImage] = useState(0)

  return (
    <Layout>
      <img
        src="./Images/contact-us.png"
        className="w-full h-[176px] grayscale sm:h-[200px] md:h-[250] lg:h-[330px]"
        alt=""
      />
      <div className="flex flex-col my-5 gap-5 items-center px-[20px] md:px-[60px] lg:px-[80px]">
        {/* <BoxContact horsWork={[12, 23]} id={1} setShow={setShowImage} showImage={showImage} /> */}

      </div>
    </Layout>
  );
};

export default contactUs;
