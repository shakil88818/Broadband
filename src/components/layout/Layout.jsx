import { Outlet } from "react-router-dom"
import Navbar1 from "../navbar/Navbar1"
import Footer from "../footer/Footer"

const Layout = () => {
  return (
    <>
      <Navbar1 />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
