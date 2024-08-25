import hero2_1 from "../../../assets/images/hero2-1.png"
import hero2_3 from "../../../assets/images/hero2-3.png"
import hero2_6 from "../../../assets/images/hero2-6.jpg"


import { Carousel } from "flowbite-react";

const AboutHero = () => {
  return (
    <>
      <section className="">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={5000}>
            <img src={hero2_3} alt="..." />
            <img src={hero2_1} alt="..." />
            <img src={hero2_6} alt="..." />
          </Carousel>
        </div>
      </section>
    </>
  )
}

export default AboutHero
