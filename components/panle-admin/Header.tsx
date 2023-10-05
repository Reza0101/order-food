import { BiMessageDetail } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex items-center justify-between text-primary w-full">
      <div className="flex gap-2 items-center">
        <img src="/Images/profile.png" className="w-[50px]" alt="" />
          <p>مدیر بیکار سایت</p>
      </div>
      <div>
        <BiMessageDetail className="cursor-pointer text-[25px]" />
      </div>
    </div>
  );
};

export default Header;
