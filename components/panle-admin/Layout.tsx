import Header from "./Header";
import Sidebar from "./Sidebar";

const layout = ({ children }: any) => {
  return (
    <div className="flex items-start md:gap-5 overflow-x-hidden" dir="rtl">
      <Sidebar />

      <div className="flex flex-col gap-5 md:px-[30px] py-4 lg:px-[80px] px-[20px] w-full">
        <Header />

        {children}
      </div>
    </div>
  );
};

export default layout;
