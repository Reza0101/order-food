import Layout from "@/components/Layout";

const AboutUs = () => {
  return (
    <Layout>
      <img
        src="./Images/aboutus.png"
        className="w-full h-[176px] sm:h-[200px] md:h-[250] lg:h-[330px]"
        alt=""
      />
      <div className="px-[20px] sm:px-[40px] md:px-[60px] lg:px-[80px] py-3">
        <p className="text-[16px] font-[700] md:text-[24px]">درباره ما</p>
        <div className="flex items-start gap-4 flex-col">
          <p className="w-full text-justify text-[10px] md:text-[14px] lg:text-[20px] leading-9">
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب
            رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در
            طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با
            نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است.
            ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای
            برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با
            کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه
            پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس
            به شما عزیزان می‌باشند. چشم انداز: در آینده‌ای نزدیک تالار پذیرایی
            شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما
            خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
          </p>
          <img
            className="lg:w-[600px] lg:h-[490px] w-[400px] h-[220px] mx-auto"
            src="./Images/aboutus1.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-around bg-gray-3 w-full py-2 md:py-6 mt-4 px-5">
        <div className="flex flex-col items-center gap-3">
          <img src="./Images/logos/userB.png" className="w-[16px] sm:w-[20px] md:w-[25px] lg:w-[40px]" alt="" />
          <p className="text-[10px] md:text-[14px] lg:text-[18px] font-[400]">پرسنلی مجرب و حرفه ای</p>
        </div>
        <div className="w-[1px] h-[40px] md:h-[60px] lg:h-[80px] bg-gray-5"></div>
        <div className="flex flex-col items-center gap-3">
          <img src="./Images/logos/diagramB.png" className="w-[16px] sm:w-[20px] md:w-[25px] lg:w-[40px]" alt="" />
          <p className="text-[10px] md:text-[14px] lg:text-[18px] font-[400]">کیفیت بالای غذا ها</p>
        </div>
        <div className="w-[1px] h-[40px] md:h-[60px] lg:h-[80px] bg-gray-5"></div>

        <div className="flex flex-col items-center gap-3">
          <img src="./Images/logos/home-wifiB.png" className="w-[16px] sm:w-[20px] md:w-[25px] lg:w-[40px]" alt="" />
          <p className="text-[10px] md:text-[14px] lg:text-[18px] font-[400]">محیطی دلنشین و آرام</p>
        </div>
        <div className="w-[1px] h-[40px] md:h-[60px] lg:h-[80px] bg-gray-5"></div>

        <div className="flex flex-col items-center gap-3">
          <img src="./Images/logos/menu-boardB.png" className="w-[16px] sm:w-[20px] md:w-[25px] lg:w-[40px]" alt="" />
          <p className="text-[10px] md:text-[14px] lg:text-[18px] font-[400]">منوی متنوع</p>
        </div>
        
      </div>
    </Layout>
  );
};

export default AboutUs;
