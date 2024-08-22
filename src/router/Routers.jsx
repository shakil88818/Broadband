import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage.jsx"
import Layout from "../components/layout/Layout.jsx";
import ContactPage from "../pages/contactPage/ContactPage.jsx";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="contact" element={<ContactPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers
