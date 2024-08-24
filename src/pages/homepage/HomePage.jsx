
import BuyTech from "../../components/buyTech/BuyTech.jsx"
import CheckCoverage from "../../components/checkCoverage/CheckCoverage.jsx"
import Hero from "../../components/hero/Hero.jsx"
import HotOffers from "../../components/hotOffers/HotOffers.jsx"
import SearchFilter from "../../components/searchFilter/SearchFilter.jsx"
import Contact from "../../components/contact/Contact.jsx"


const HomePage = () => {
  return (
    <>
      <Hero />
      <SearchFilter />
      <CheckCoverage />
      <HotOffers />
      <BuyTech />
      <Contact />
    </>
  )
}

export default HomePage