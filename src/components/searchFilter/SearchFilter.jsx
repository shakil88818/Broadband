import { IoIosArrowDown } from "react-icons/io";


const SearchFilter = () => {
    return (
        <>
            <section className="container mx-auto px-5 py-16 md:py-20">
                <div className="">
                    <p className="title text-center font-extrabold pb-12" >What are You Looking For ?</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pb-10">
                    <button className="btn-2 w-40 ">Packages</button>
                    <button className="btn-2 bg-gray-400 w-40">Reconnection</button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-5">
                    {/* Price Range */}

                    <div className="bg-gray-100 rounded-lg flex basis-80 flex-col gap-7 p-6 w-full md:w-2/6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-blue-600 text-lg  font-bold mb-2">Price Ranges</h3>
                            <div className="bg-blue-700 h-8 w-8 rounded-full flex items-center justify-center">
                                <p className="text-white" > <IoIosArrowDown size={28} /></p>
                            </div>
                        </div>

                        <div className="">
                            <h1 className="text-3xl md:text-4xl font-extrabold ">500-2000 <span className="text-sm  md:text-xl">BDT</span></h1>
                        </div>
                    </div>

                    {/* Network Bandwidth */}
                    <div className="bg-gray-100 rounded-lg flex basis-80  flex-col gap-7 p-6 w-full md:w-2/6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-blue-600 text-lg font-bold mb-2">Network Bandwidth</h3>
                            <div className="bg-blue-700 h-8 w-8 rounded-full flex items-center justify-center">
                                <p className="text-white" > <IoIosArrowDown size={28} /></p>
                            </div>
                        </div>

                        <div className="">
                            <h1 className="text-3xl md:text-4xl font-extrabold  ">10-20 <span className="text-xl">Mbps</span></h1>
                        </div>
                    </div>

                    {/* Special Need */}
                    <div className="bg-gray-100 rounded-lg flex basis-80  flex-col gap-7 p-6 w-full md:w-2/6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-blue-600 text-lg font-bold mb-2">Special Need</h3>
                            <div className="bg-blue-700 h-8 w-8 rounded-full flex items-center justify-center">
                                <p className="text-white" > <IoIosArrowDown size={28} /></p>
                            </div>
                        </div>

                        <div className="">
                            <h1 className="text-2xl md:text-3xl font-extrabold ">Please Choose</h1>
                        </div>
                    </div>

                </div>
                {/* View Result Button */}
                <div className="flex items-center justify-center pt-12">
                <button className="btn-2 border-blue-900 bg-white text-black hover:text-white hover:bg-blue-900 mt-4 md:mt-0 w-full md:w-auto">
                    View Result
                </button>
                </div>
            </section>
        </>
    )
}

export default SearchFilter
