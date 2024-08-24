import hero2_1 from "../../../assets/images/hero2-1.png"
import hero2_2 from "../../../assets/images/hero2-2.png"
import hero2_3 from "../../../assets/images/hero2-3.png"
import hero2_4 from "../../../assets/images/hero2-4.jpg"
import hero2_5 from "../../../assets/images/hero2-5.jpg"
import hero2_6 from "../../../assets/images/hero2-6.jpg"


import { Carousel } from "flowbite-react";
const Hero2 = () => {
    return (
        <>
            <section className="">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={5000}>
                        <img src={hero2_4} alt="..." />
                        <img src={hero2_5} alt="..." />
                        <img src={hero2_3} alt="..." />
                        <img src={hero2_1} alt="..." />
                        <img src={hero2_6} alt="..." />
                        <img src="https://i.postimg.cc/26T1f5k7/hero.jpg" alt="..." />
                        <img src={hero2_2} alt="..." />
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Hero2






