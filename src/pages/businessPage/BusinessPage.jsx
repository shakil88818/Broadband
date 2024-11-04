import BusinessPartnership from "../../components/business/BusinessPartnership.jsx"
import ContactHero from "../../components/hero/ContactHero.jsx"
import OurClient from "../../components/ourClient/OurClient.jsx"
import Solutions from "../../components/solutions/Solutions.jsx"

const BusinessPage = () => {
  return (
    <>
      <ContactHero/>
      <BusinessPartnership />
      <Solutions />
      <OurClient />
 
    </>
  )
}

export default BusinessPage
