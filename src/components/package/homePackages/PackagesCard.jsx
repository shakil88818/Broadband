import { useState } from "react";
import dialimg from "../../../assets/images/dial.png"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const PackagesCard = ({mbps,tk,dial}) => {
    const [showOffer, setShowOffer] = useState(true);


    const toggleOffer = () => {
      setShowOffer(!showOffer);
      console.log(showOffer)
    };
    return (
        <>
            <div className="max-w-sm grow px-5 py-7 bg-white rounded-lg shadow-lg border relative">

                <div className="absolute top-0 right-0 bg-blue-500 text-white text-sm  px-2 py-1 rounded-bl-lg" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                    Popular
                </div>


                <div className="mb-4" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                    <h2 className="text-3xl font-bold hover:text-[#0e4f9d] cursor-pointer">{mbps}Mbps</h2>
                </div>

                <div className="flex justify-between px-3 sm:px-8 py-5" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">

                    <div className="py-4">
                        <p className="text-xs text-gray-500">Upto</p>
                        <span className=" text-5xl md:text-6xl text-gray-600 font-semibold">{mbps}</span>
                        <span className="text-lg ml-1 text-gray-600 font-semibold">Mbps</span>
                    </div>

                    <div className="h-auto w-[2px] bg-gray-400"></div>

                    <div className="flex flex-col items-center justify-center py4">
                        <h3 className="text-xl font-semibold text-gray-600">BDT <span className="text-4xl">{tk}</span></h3>
                        <p className="text-lg font-semibold text-gray-500">Per Month</p>
                        <p className="text-xs text-gray-400">*Including VAT</p>
                    </div>

                </div>


                <div className="text-center pb-5" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                    <button
                        className="btn-2 text-gray-800 bg-gray-200"
                        onClick={toggleOffer}>

                        {showOffer ?
                            <> <div className="flex items-center gap-1"><span>Hide Offer</span> <IoIosArrowUp /></div> </>
                            :
                            <><div className="flex items-center gap-1"><span>Show offer</span><IoIosArrowDown /></div></>}
                    </button>
                </div>


                {showOffer && (
                    <div className="flex flex-col gap-5" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">

                        <div className="flex items-center justify-between ">
                            <h4 className="text-base font-semibold text-gray-600 ">Exclusive Privileges</h4>
                            <div className="w-40 h-[2px] bg-gray-400"></div>
                        </div>

                        <div className="flex items-center">
                            <img src={dialimg} className="w-10" alt="" />
                            <p className="text-sm text-gray-700">Dial {dial} Min TalkTime</p>
                        </div>

                        <a className="text-center" href="#connection">
                            <button className="btn-2 w-52"> Choose this package</button>
                        </a>

                    </div>
                )}


            </div>
        </>
    )
}

export default PackagesCard
