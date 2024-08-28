import { FaCloudArrowDown } from "react-icons/fa6";

import PopularPackageImg from "../../assets/images/popular-package.png"

const PopularPackages = () => {
    return (
        <>
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-5">
                    <h2 className="title font-extrabold text-center pb-14 md:pb-24">
                        Populer <span className="text-blue-600"> Packages</span>
                    </h2>


                    <div className="grid grid-cols-1 md:grid-cols-2  ">

                        <div className="flex flex-col items-center justify-center">
                            <div className="text-6xl text-blue-800 pb-2">
                                <FaCloudArrowDown />
                            </div>

                            <div className="">
                                <p className="text-center font-bold text-lg text-gray-600">Popular Packages</p>

                                <p className="text-center font-semibold text-xl pt-4 text-gray-500">BDT
                                    <span className="text-4xl text-gray-800"> 1200</span>
                                    <span className="text-gray-600"> /month</span>
                                </p>
                            </div>

                            <div className="text-center py-10 text-sm font-semibold text-gray-500 flex flex-col gap-6">
                                <p>30 Mbps Unlimited</p>
                                <p>Fiber Optics</p>
                                <p>400 Min TalkTime</p>
                                <p>OTC Fee - 500 Taka</p>
                                <p>24/7 Customer Support</p>
                                <p>Free OTT Bongo, Chorki, Addatimes & Eros Now (Any 2)</p>
                            </div>

                            <div>
                                <button className="btn-2">View All Packages</button>
                            </div>

                        </div>


                        <div className="">
                            <img src={PopularPackageImg} alt="" />
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default PopularPackages
