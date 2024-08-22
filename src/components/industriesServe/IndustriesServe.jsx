import { MdOutlineBroadcastOnHome, MdRealEstateAgent, MdOutlinePhonelinkSetup, MdOutlineTravelExplore } from "react-icons/md";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaHandHoldingMedical, FaGraduationCap, FaLuggageCart, FaFilm } from "react-icons/fa";
import { RiShoppingCartFill, RiBodyScanLine } from "react-icons/ri";
import { IoRocketSharp } from "react-icons/io5";
import { FaCaravan } from "react-icons/fa6";





const IndustriesServe = () => {
    return (
        <>
            <section className="py-16 bg-slate-700">

                <div className=" ">
                    <div className="container mx-auto px-5 py-10 cursor-pointer">
                        <div className="pb-20">
                            <h2 className="title text-white">Industries We Serve</h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8 items-center">
                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <MdOutlineBroadcastOnHome className="text-5xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Broadband</p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <TbDeviceMobileCode className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Fintech</p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <FaHandHoldingMedical className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Healthcare</p>
                            </div>


                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <RiShoppingCartFill className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">E-com</p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <MdRealEstateAgent className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Real Estate</p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <FaCaravan className="text-5xl  md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Automotive
                                </p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <MdOutlinePhonelinkSetup className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Software
                                </p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <IoRocketSharp className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Startup
                                </p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <FaGraduationCap className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Education
                                </p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <FaLuggageCart className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Retail
                                </p>
                            </div>



                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <MdOutlineTravelExplore className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Travel
                                </p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <FaFilm className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Film
                                </p>
                            </div>

                            <div className="text-slate-300 flex flex-col items-center mb-8  hover:text-green-500 transition ease-in">
                                <RiBodyScanLine className="text-5xl md:text-4xl mb-3 " />
                                <p className="md:text-xl font-semibold tracking-widest ">Miscellaneous
                                </p>
                            </div>
                        </div>




                    </div>
                </div>
            </section>
        </>
    )
}

export default IndustriesServe
