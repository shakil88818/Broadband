
import Slider from "react-slick";
import { Testimonials } from "../../assets/Data";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        initialSlide: 1,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <section className="bg-white text-gray-900 py-16 md:py-20">
                <div className="">
                <div className="pb-20">
                            <h2 className="title text-center">What&apos;s client say?</h2>
                        </div>
                    <div className="slider-container">
                        <Slider {...settings}>

                            {/* <div className="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
                                <figure className="max-w-screen-md mx-auto">
                                    <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                    </svg>
                                    <blockquote>
                                        <p className="text-2xl font-medium text-gray-900">&ldquo;Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.&ldquo;</p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">

                                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div className="pr-3 font-medium">Micheal Gough</div>
                                            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div> */}

                            {
                                Testimonials.map((testi)=>{
                                    return(
                                        <div key={testi.id} className="max-w-screen-xl mx-auto text-center ">
                                <figure className="max-w-screen-md mx-auto">
                                    <svg className="h-12 mx-auto px-5 mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                    </svg>
                                    <blockquote>
                                        <p className="text-2xl font-medium text-gray-900">&ldquo;{testi.desc}&ldquo;</p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">

                                        <div className="mb-5 flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div className="pr-3 font-medium">{testi.name}</div>
                                            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{testi.position}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                                    )
                                })
                            }


                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
