import { Link } from "react-router-dom"
import SolutionsData from "../../assets/SolutionsData.jsx"


const Solutions = () => {
    return (
        <>
            <section className="bg-gray-50 py-16 md:py-20 justify-between">

                <h2 className="title font-extrabold text-center md:pb-16" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                    Our <span className="text-blue-600"> Services</span>
                </h2>

                <div className="container mx-auto px-5" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">

                    <div className=" flex flex-col items-center  justify-center md:flex-row md:items-center md:justify-between">
                        <h1 className=" text-center md:Text-lg font-bold text-gray-600">We have a verity of services to serve you with the latest Technology</h1>
                    </div>




                    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                        {
                            SolutionsData.map((solutions) => {
                                return (
                                    <div key={solutions.id} className=" flex flex-col md:basis-96 sm:grow bg-white border border-gray-200 rounded-lg hover:shadow-lg transition " data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                                        <div className="flex flex-col items-center justify-center p-5 hover:scale-[1.1] transition duration-500 cursor-pointer">
                                            <div className="px-4">
                                                <p className="text-[50px] mt-7 text-blue-400">{solutions.icon}</p>
                                            </div>
                                            <div className="p-5 text-center">
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-700 ">{solutions.title}</h5>
                                                </a>
                                                <p className="mb-3 desc">{solutions.desc}</p>
                                                <Link to="/packages" className="inline-flex items-center py-2 font-semibold text-center text-blue-950 hover:text-blue-700">
                                                    Explore More
                                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </section>
        </>
    )
}

export default Solutions


