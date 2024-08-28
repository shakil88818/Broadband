
const CheckCoverage = () => {
    return (
        <>
            <section className="py-16 md:py-20 bg-gray-100">
                <div className="container mx-auto px-5 flex flex-col items-center justify-center">
                    <div className="md:p-8 rounded-lg w-full max-w-lg md:max-w-xl lg:max-w-3xl">
                        <h2 className="title font-extrabold text-center pb-10">
                            Check <span className="text-blue-600">Coverage</span>
                        </h2>
                        <p className="text-xl text-center font-semibold text-gray-600 mb-6 md:mb-8">
                            Please enter your district and thana to check coverage.
                        </p>
                        <form>
                            <div className=" flex items-center justify-center w-full py-7">

                                <div className="w-full mb-4 md:mb-6 flex flex-col md:flex-row md:gap-9">
                                    <div className="flex-1 mt-6">
                                        <label className="contact-label">Your District Name</label>
                                        <select className="contact-in">-</select>
                                    </div>

                                    <div className="w-full flex-1 mt-6">
                                        <label className="contact-label">Your Upazilla Name</label>
                                        <input type="text" className="contact-in" />
                                    </div>
                                </div>

                            </div>

                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="btn-2 w-32"
                                >
                                    Check Area
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckCoverage
