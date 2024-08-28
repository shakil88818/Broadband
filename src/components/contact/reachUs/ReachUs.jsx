import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ReachUs = () => {

    const reachRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#reach') {
            reachRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);
    return (
        <>
            <section className="py-12 md:py-16 bg-gray-50" >
                <div className="container mx-auto px-5" id="reach" ref={reachRef} >
                    <div className="">

                        <div className="">
                            <h2 className="title font-extrabold text-center pb-7">
                                Choose your preferred channel to <span className="text-blue-600"> reach us.</span>
                            </h2>
                            <p className="text-center text-base md:text-xl font-bold text-gray-600">via Email, Text or Call. We are here for you</p>
                        </div>


                        <section className="container mx-auto py-8 h-auto">

                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5">

                                <div className=" bg-white px-2 py-10 transition-all mt-7 rounded-2xl border hover:border-none hover:shadow-xl cursor-pointer">
                                    <div className="flex flex-col items-center gap-1">
                                        <p className="text-lg text-blue-800 font-bold text-center">Mail us at</p>
                                        <h3 className="font-bold text-lg md:text-2xl text-gray-800 leading-8"><a href="mailto:contact@sheikhgroup.net">contact@sheikhgroup.net</a></h3>
                                    </div>
                                </div>

                                <div className=" bg-white px-2 py-10 transition-all mt-7 rounded-2xl border hover:border-none hover:shadow-xl cursor-pointer">
                                    <a href="https://www.facebook.com/sheikhgroup07" target="_blank">
                                        <div className="flex flex-col items-center gap-1">
                                            <p className="text-lg text-blue-800 font-bold text-center">Knock us at</p>
                                            <h3 className="font-bold text-lg md:text-2xl text-gray-800 leading-8">Messanger</h3>
                                        </div>
                                    </a>

                                </div>


                                <div className=" bg-white px-2 py-10 transition-all mt-7 rounded-2xl border hover:border-none hover:shadow-xl cursor-pointer">

                                    <a href="https://www.google.com/maps/place/Sheikh+Group/@23.8665426,90.3650976,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c3004350adef:0xb71f323a5219739a!8m2!3d23.8665377!4d90.3676725!16s%2Fg%2F11wb2z_3bb?entry=ttu" target="_blank" className="d-flex gap-1 align-items-center justify-content-center marginTop">
                                        <div className="flex flex-col items-center gap-1">
                                            <p className="text-lg text-blue-800 font-bold text-center">Location</p>
                                            <h3 className="font-bold text-lg md:text-2xl text-gray-800 leading-8">Google Map</h3>
                                        </div>
                                    </a>

                                </div>
                            </div>

                        </section>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ReachUs
