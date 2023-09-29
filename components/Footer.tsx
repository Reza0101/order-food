import Link from "next/link";
import { FiTwitter } from "react-icons/fi";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{ backgroundImage: `url(./Images/Footer.png)` }}
      className="w-full px-[20px] md:px-[50px] text-white flex flex-col md:items-start py-3 md:flex-row items-center justify-around bg-cover bg-center h-fit"
    >
      {/* Links Footer */}
      <div className="flex items-start w-full md:w-1/2">
        <div className="w-1/2">
          <p className="text-[12px] md:text-[20px] font-bold py-3">
            دسترسی آسان
          </p>
          <Link
            href="/FAQ"
            className="text-[10px] hover:text-primary duration-300 md:text-[14px] block py-1"
          >
            پرسش های متوادل
          </Link>
          <Link
            href="/rules"
            className="text-[10px] hover:text-primary duration-300 md:text-[14px] block py-1"
          >
            قوانین ترخینه
          </Link>
          <Link
            href="/privacy"
            className="text-[10px] hover:text-primary duration-300 md:text-[14px] block py-1"
          >
            حریم خصوصی
          </Link>

          <div className="flex items-center gap-2 mt-2">
            <Link
              href="/"
              className="hover:text-primary duration-300 text-[22px]"
            >
              <PiTelegramLogoDuotone />
            </Link>

            <Link
              href="/"
              className="hover:text-primary duration-300 text-[22px]"
            >
              <FaInstagram />
            </Link>

            <Link
              href="/"
              className="hover:text-primary duration-300 text-[22px]"
            >
              <FiTwitter />
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-[12px] md:text-[20px] font-bold py-3">
            شعبه های ترخینه
          </p>
          <Link
            href="/"
            className="text-[10px] md:text-[14px] duration-300 hover:text-primary block py-1"
          >
            شعبه اکباتان
          </Link>
          <Link
            href="/"
            className="text-[10px] md:text-[14px] duration-300 hover:text-primary block py-1"
          >
            شعبه چالوس
          </Link>
          <Link
            href="/"
            className="text-[10px] md:text-[14px] duration-300 hover:text-primary block py-1"
          >
            شعبه اقدسیه
          </Link>
          <Link
            href="/"
            className="text-[10px] md:text-[14px] duration-300 hover:text-primary block py-1"
          >
            شعبه ونک
          </Link>
        </div>
      </div>
      {/* Form send Message */}
      <div className="w-full md:w-1/2">
        <p className="text-[12px] md:text-[20px] font-bold py-3">
          پیام به ترخینه
        </p>
        <div className="flex items-center gap-5 justify-center w-full">
          <div className="w-1/2">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="rounded-4 p-1 placeholder:text-[13px] text-[12px] md:text-[16px] w-full my-2 placeholder:text-white bg-transparent border border-gray-1"
            />
            <input
              type="number"
              placeholder="شماره تماس"
              className="rounded-4 p-1 placeholder:text-[13px] text-[12px] md:text-[16px] w-full my-2 placeholder:text-white bg-transparent border border-gray-1"
            />
            <input
              type="text"
              placeholder="آدرس ایمیل(اختیاری)"
              className="rounded-4 p-1 placeholder:text-[13px] text-[12px] md:text-[16px] w-full my-2 placeholder:text-white bg-transparent border border-gray-1"
            />
          </div>
          <textarea
            className="bg-transparent  resize-none border rounded-4 h-[110px] md:h-[120px] border-gray-1 placeholder:text-white p-2 w-1/2 "
            id=""
            placeholder="پیام شما"
          ></textarea>
        </div>
        <div className="w-full flex justify-end my-1">
          <button className="bg-transparent rounded-4 hover:bg-primary duration-200 hover:border-primary border-gray-1 border text-[14px] py-[5px] mb-3 px-[18px]">
            <span>ارسال پیام</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
