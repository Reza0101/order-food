import BoxContact from "@/components/Box-contact";
import Layout from "@/components/Layout";
import { useState } from "react";

const contactUs = () => {
  const [itemBranch, setItemBranch] = useState(0);
  const branchs = [
    {
      id: 1,
      name: "شعبه اکباتان",
      address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
      phone: "۰۲۱-۵۴۸۹۱۲۵۰-۵۱",
      hoursWork: [12, 1],
      img: "./Images/branch/ekbatan.png",
    },
    {
      id: 2,
      name: "شعبه چالوس",
      address:
        "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه ",
      phone: "۰۲۱-۵۴۸۹۱۲۵۲-۵۳",
      hoursWork: [13, 24],
      img: "./Images/branch/chalos.png",
    },
    {
      id: 3,
      name: "شعبه اقدسیه",
      address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
      phone: "۰۲۱-۵۴۸۹۱۲۵۴-۵۵",
      hoursWork: [12, 24],
      img: "./Images/branch/agdaseie.png",
    },
    {
      id: 4,
      name: "شعبه ونک",
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
      phone: "۰۲۱-۵۴۸۹۱۲۵۶-۵۷",
      hoursWork: [10, 24],
      img: "./Images/branch/vanak.png",
    },
  ];

  return (
    <Layout>
      <img
        src="./Images/contact-us.png"
        className="w-full h-[176px] grayscale sm:h-[200px] md:h-[250] lg:h-[330px]"
        alt=""
      />
      <div className="flex flex-col my-5 gap-5 items-center px-[20px] md:px-[60px] lg:px-[80px]">
        {/* <BoxContact horsWork={[12, 23]} id={1} setShow={setShowImage} showImage={showImage} /> */}
        {branchs.map((item) => (
          <BoxContact key={crypto.randomUUID()}
            {...item}
            setShow={setItemBranch}
            showImage={itemBranch}
          />
        ))}
      </div>
    </Layout>
  );
};

export default contactUs;
