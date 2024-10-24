import { Outlet } from "react-router-dom"
import NavbarSelfCare from "./NavbarSelfCare"

const LayoutSelfCare = () => {
  return (
    <>
      <NavbarSelfCare />
      <Outlet/>
    </>
  )
}

export default LayoutSelfCare
