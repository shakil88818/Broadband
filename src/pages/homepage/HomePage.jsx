
import BuyTech from "../../components/buyTech/BuyTech.jsx"
import Hero from "../../components/hero/Hero.jsx"
import HotOffers from "../../components/hotOffers/HotOffers.jsx"
import SearchFilter from "../../components/searchFilter/SearchFilter.jsx"
import Contact from "../../components/contact/Contact.jsx"
import Solutions from "../../components/solutions/Solutions.jsx"
import PopularPackages from "../../components/popularPackages/PopularPackages.jsx"
import PayCoverTouch from "../../components/payCoverTouch/PayCoverTouch.jsx"
import HomeTop from "../../components/HomTop/HomeTop.jsx"


const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeTop />
      <SearchFilter />
      <Solutions />
      <PopularPackages />
      <PayCoverTouch />
      <HotOffers />
      <BuyTech />
      <Contact />
    </>
  )
}

export default HomePage
