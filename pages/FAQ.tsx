import Layout from "@/components/Layout";
import AccordionBS from "@/components/Accordion";
const FAQ = () => {


  const FAQ = [
    {
      id: 1,
      title: "ترخینه چه امکانات متفاوتی داره؟",
      caption:
        "وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم به نرم افزار اتوماسیون شعبات رستوران، امکان اشتباهات هنگام ثبت سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده سازی و تحویل آن را به حداقل ممکن می رسونه.",
    },
    {
      id: 2,
      title: "چطور می تونم در ترخینه حساب کاربری ایجاد کنم؟",
      caption:
        "خیلی ساده، پس از انتخاب غذای مورد علاقه تان از منوی رستوران، هنگام ثبت سفارش با وارد کردن شماره تلفن همراه یک پیامک حاوی کد تایید برای شما ارسال و با وارد کردن کد تایید، ثبت نام شما تکمیل می شه. یا می تونید در صفحه اصلی سایت روی گزینه ورود کلیک کنید.",
    },
    {
      id: 3,
      title: "سابقه و لیست خریدهای قبلی ام رو کجا ببینم؟",
      caption:
        "با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی سابقه تمام خریدهای شما نمایش داده می شه.",
    },
    {
      id: 4,
      title: "چه راه هایی برای پرداخت دارم؟",
      caption:
        "هنگام ثبت سفارش غذا می تونید روش پرداخت دلخواه خودتون رو انتخاب کنید. آنلاین و یا نقدی در هنگام تحویل سفارش بصورت حضوری.",
    },
    {
      id: 5,
      title:
        "آیا قیمت در منوی وبسایت ترخینه با قیمت منوی شعبات رستوران یکسان است؟",
      caption:
        "بله. قیمت منوی وبسایت ترخینه دقیقا مطابق با قیمت منوی شعب رستوران  است و در صورت تغییر قیمت از طرف رستوران این تغییر در وبسایت ترخینه بلافاصله قابل مشاهده است.",
    },
    {
      id: 6,
      title: "چطور می تونم از اعتبار هدیه و تخفیف استفاده کنم؟",
      caption:
        "برای استفاده از کد تخفیف میتونید به سادگی کد رو در سبد خرید، در قسمت مشخص شده وارد کنید. اعتبار هدیه هنگام انتخاب روش پرداخت برای شما نمایش داده میشه و در صورت تمایل میتونید ازش استفاده کنید.",
    },
  ];

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
      <div
        className={`px-[20px] [&>*:nth-child(1)]:rounded-t-8 [&>*:last-child]:rounded-b-8 my-5 md:px-[60px] lg:px-[80px]`}
      >
        {FAQ.map((item) => (
          <AccordionBS {...item} />
        ))}
      </div>
    </Layout>
  );
};
export default FAQ;
