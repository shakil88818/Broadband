import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage.jsx"
import Layout from "../components/layout/Layout.jsx";
import ContactPage from "../pages/contactPage/ContactPage.jsx";
import PackagesPage from "../pages/packagesPage/PackagesPage.jsx";
import AboutPage from "../pages/aboutPage/AboutPage.jsx";
import BusinessPage from "../pages/businessPage/BusinessPage.jsx";
import ScrollToTop from "../components/scrollToTop/ScrollToTop.jsx";
import SelfCarePage from "../pages/selfCarePage/SelfCarePage.jsx";
import Login from "../components/selfCare/Login.jsx";
import Register from "../components/selfCare/Register.jsx";
import LayoutSelfCare from "../components/selfCare/LayoutSelfCare.jsx";
import CoveragePage from "../pages/coveragePage/CoveragePage.jsx";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="packages" element={<PackagesPage/>}/>
            <Route path="coverage" element={<CoveragePage/>}/>
            <Route path="business" element={<BusinessPage/>}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="contact" element={<ContactPage />}/>
          </Route>


          <Route path="/" element={<LayoutSelfCare />}>
            <Route path="selfcare" element={<SelfCarePage/>}/>
            <Route path="selfcare/login" element={<Login/>}/>
            <Route path="selfcare/register" element={<Register/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers
