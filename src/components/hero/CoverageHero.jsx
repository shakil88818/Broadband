import h1 from "../../assets/images/h1.jpg"
import h2 from "../../assets/images/hero0-01-01.jpg"



import { Carousel } from "flowbite-react";
const CoverageHero = () => {
    return (
        <>
            <section className="">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={5000}>
                        <img src={h1} alt="..." />
                        <img src={h2} alt="..." />
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default CoverageHero