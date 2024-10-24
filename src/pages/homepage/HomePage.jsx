
import BuyTech from "../../components/buyTech/BuyTech.jsx"
import CheckCoverage from "../../components/checkCoverage/CheckCoverage.jsx"
import Hero from "../../components/hero/Hero.jsx"
import HotOffers from "../../components/hotOffers/HotOffers.jsx"
import SearchFilter from "../../components/searchFilter/SearchFilter.jsx"
import Contact from "../../components/contact/Contact.jsx"
import Solutions from "../../components/solutions/Solutions.jsx"
import PopularPackages from "../../components/popularPackages/PopularPackages.jsx"
import PayCoverTouch from "../../components/payCoverTouch/PayCoverTouch.jsx"


const HomePage = () => {
  return (
    <>
      <Hero />
      <SearchFilter />
      <Solutions />
      <PopularPackages />
      <CheckCoverage />
      <PayCoverTouch />
      <HotOffers />
      <BuyTech />
      <Contact />
    </>
  )
}

export default HomePage
