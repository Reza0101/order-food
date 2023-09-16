import { propsElement } from "@/types"
import Header from "./Header"

const Layout = ({children}: propsElement) => {
    return (
        <div dir="rtl">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout