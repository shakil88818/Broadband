import SolutionsData from "../../assets/SolutionsData.jsx"


const Solutions = () => {
    return (
        <>
            <section className="bg-slate-300 py-16 md:py-20 justify-between">
                <div className="container mx-auto px-5">

                    <div className=" flex flex-col items-center  justify-center md:flex-row md:items-center md:justify-between">
                        <h1 className="title">Explore Our Solutions</h1>
                        <button className="g-btn">Explore More <span className="font-bold">&rarr;</span></button>
                    </div>




                    <div className="mt-7 flex flex-col gap-7 grow md:flex-row flex-wrap">
                        {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                            <div className="px-4">
                                <GrDocumentTest className="text-[50px] mt-7 " />
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p className="mb-3 desc">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" className="inline-flex items-center py-2 font-semibold text-center text-blue-950">
                                    Explore More
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                    </div> */}

                        {
                            SolutionsData.map((solutions) => {
                                return (
                                    <div key={solutions.id} className=" flex flex-col basis-96 grow bg-white border border-gray-200 rounded-lg shadow-lg transition ">
                                        <div className="p-5 hover:scale-[1.1] transition duration-500 cursor-pointer">
                                        <div className="px-4">
                                            <p className="text-[50px] mt-7">{solutions.icon}</p>
                                        </div>
                                        <div className="p-5">
                                            <a href="#">
                                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{solutions.title}</h5>
                                            </a>
                                            <p className="mb-3 desc">{solutions.desc}</p>
                                            <a href="#" className="inline-flex items-center py-2 font-semibold text-center text-blue-950">
                                                Explore More
                                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                </svg>
                                            </a>
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


