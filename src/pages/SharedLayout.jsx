import { Outlet } from "react-router-dom"

// components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function SharedLayout() {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default SharedLayout