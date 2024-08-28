import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage.jsx"
import Layout from "../components/layout/Layout.jsx";
import ContactPage from "../pages/contactPage/ContactPage.jsx";
import PackagesPage from "../pages/packagesPage/PackagesPage.jsx";
import AboutPage from "../pages/aboutPage/AboutPage.jsx";
import BusinessPage from "../pages/businessPage/BusinessPage.jsx";
import ScrollToTop from "../components/scrollToTop/ScrollToTop.jsx";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="packages" element={<PackagesPage/>}/>
            <Route path="business" element={<BusinessPage/>}/>
            <Route path="about" element={<AboutPage />}/>
            <Route path="contact" element={<ContactPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers
