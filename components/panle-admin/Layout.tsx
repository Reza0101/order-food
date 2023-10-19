import Header from "./Header";
import Sidebar from "./Sidebar";

const layout = ({ children }: any) => {
  return (
    <div className="flex items-start overflow-x-hidden" dir="rtl">
      <Sidebar />

      <div className="flex flex-col gap-5 md:px-[20px] py-4 lg:px-[50px] w-full">
        <Header />

        {children}
      </div>
    </div>
  );
};

export default layout;
