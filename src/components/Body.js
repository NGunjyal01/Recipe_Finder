import { Outlet, ScrollRestoration } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Body = () => {

    return (
        <>
            <Header/>
            <Outlet/>
            <ScrollRestoration/>
            {/* <Footer/> */}
        </>
    )
}

export default Body
