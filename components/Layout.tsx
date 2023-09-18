import { propsElement } from "@/types"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}: propsElement) => {
    return (
        <div dir="rtl">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            

        </div>
    )
}

export default Layout