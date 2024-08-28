
import { Link } from "react-router-dom"
import meter from "../../assets/images/bandwidth-meter.png"
import getSheikhBroadnamd from "../../assets/images/get.png"
import sendConcern from "../../assets/images/send-us-your-concerns.png"

const HotOffers = () => {
    return (
        <>
            <section className="pt-16 md:pt-20 ">
                <div className="pb-8">
                    <h2 className="title font-extrabold text-center md:pb-10">
                        Ongoing<span className="text-blue-600"> Hot Offers</span>
                    </h2>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto px-5 ">

                        <div className="py-14 md:flex md:gap-10 md:justify-around">

                            <div className="flex flex-col gap-10 max-w-lg">
                                <h2 className="text-xl font-bold text-gray-700">Are you getting what you are paying for?</h2>
                                <div className="flex flex-col gap-5 items-center justify-center">
                                    <img src={meter} className="min-w-sm" alt="" />
                                    <button className="btn-2 w-32">Click Here</button>
                                </div>
                                <h2 className="title font-extrabold text-center pb-10">
                                    What is my <span className="text-blue-600"> current internet speed?</span>
                                </h2>
                            </div>

                            <div className="flex items-center justify-center gap-10">

                                <a href="#connection">
                                    <div className="bg-white flex items-center rounded-md h-52 py-5 px-4 w-40 cursor-pointer">
                                        <div className=" flex flex-col justify-center items-center gap-5">
                                            <img src={getSheikhBroadnamd} className="w-16" alt="" />
                                            <p className="font-bold text-gray-900 text-center">Get Sheikh Broadband Now</p>
                                        </div>
                                    </div>
                                </a>


                                <Link to="/contact#reach">
                                    <div className="bg-white flex items-center rounded-md h-52 py-5 px-4 w-40 cursor-pointer">
                                        <div className="flex flex-col justify-center items-center gap-5">
                                            <img src={sendConcern} className="w-16" alt="" />
                                            <p className="font-bold text-gray-900 text-center">Send Us your concern</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HotOffers
