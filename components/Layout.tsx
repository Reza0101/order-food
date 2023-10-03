import { propsElement } from "@/types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: propsElement) => {
  return (
    <div dir="rtl" className="min-h-[100vh] flex flex-col justify-between">
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
