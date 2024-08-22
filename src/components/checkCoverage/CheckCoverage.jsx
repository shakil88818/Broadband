
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
                            <div className=" flex flex-col md:flex-row gap-5 py-7 md:items-start md:justify-between">
                            <div className="mb-4 md:mb-6">
                                <label
                                    htmlFor="district"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Your District Name
                                </label>
                                <select
                                    id="district"
                                    className="w-full md:w-80 h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">-</option>
                                    {/* Add district options here */}
                                </select>
                            </div>
                            
                            <div className="mb-4 md:mb-6">
                                <label
                                    htmlFor="thana"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Your Thana Name
                                </label>
                                <select
                                    id="thana"
                                    className="w-full md:w-80  h-10 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">-</option>
                                    {/* Add thana options here */}
                                </select>
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
