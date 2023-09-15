import { propsElement } from "@/types"

const Layout = ({children}: propsElement) => {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout