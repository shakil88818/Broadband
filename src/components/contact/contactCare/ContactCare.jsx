import care1 from "../../../assets/images/care-icon-1.png"
import care2 from "../../../assets/images/care-icon-2.png"
import care3 from "../../../assets/images/care-icon-3.png"

const ContactCare = () => {
    return (
        <>
            <section className="py-14 md:py-20">
                <div className="container mx-auto px-5">

                    <div className="flex items-center justify-center">

                        <div className="flex items-center justify-between md:w-3/4 gap-5">
                            <div className="flex flex-col items-center justify-center gap-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                                <img src={care1} alt="" className="w-20 md:w-full" />
                                <p className="text-base md:text-2xl font-bold text-gray-700">We Listen</p>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                                <img src={care2} alt="" className="w-20 md:w-full" />
                                <p className="text-base md:text-2xl font-bold text-gray-700">We Care</p>
                            </div>

                            <div className="flex flex-col items-center justify-center gap-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                                <img src={care3} alt="" className="w-20 md:w-full" />
                                <p className="text-base md:text-2xl font-bold text-gray-700">We Solve</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactCare
