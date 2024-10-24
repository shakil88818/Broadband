
const Register = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="title font-bold text-center pb-5" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                        Registration<span className="text-blue-600"></span>
                    </h2>

                    <div className="p-5 md:p-12 shadow-2xl rounded-xl">
                        <form action="#" className="space-y-8" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                            <div>
                                <label className="contact-label">Organization Name *</label>
                                <input type="text" id="name" className="contact-in" required />
                            </div>

                            <div>
                                <label className="contact-label">Admin Name *</label>
                                <input type="text" id="name" className="contact-in" required />
                            </div>

                            <div>
                                <label className="contact-label">Mobile *</label>
                                <input type="number" id="number" className="contact-in" required />
                            </div>

                            <div>
                                <label className="contact-label">Your email *</label>
                                <input type="email" id="email" className="contact-in" required />
                            </div>

                            <div className="flex-1 mt-6">
                                <label className="contact-label">Your District Name *</label>
                                <select className="contact-in">-</select>
                            </div>

                            <div className="flex-1 mt-6">
                                <label className="contact-label">Your Upazilla Name *</label>
                                <input type="text" className="contact-in" />
                            </div>

                            <div>
                                <label className="contact-label">Address *</label>
                                <input type="text" id="name" className="contact-in" placeholder="Enter Your Name" required />
                            </div>


                            <div className="flex-1 mt-6">
                                <div className="bg-red-700 text-white flex items-center justify-center py-2 px-5 rounded">
                                    <p className="font-semibold tracking-wider"><span className="text-3xl font-bold pr-2">50%</span >Discount With SignUp Fee</p>
                                </div>
                            </div>


                            <div className="flex-1 mt-6">
                                <label className="contact-label">Select Your Preferable Packages *</label>
                                <select className="contact-in">-</select>
                            </div>


                            <div className="flex-1 mt-6">
                                <div className="bg-blue-700 text-white flex items-center justify-between py-3 px-5 rounded">
                                    <h2>Customers :</h2>
                                    <h2>Sign Up Free :</h2>
                                    <h2>Month Fee :</h2>
                                </div>
                            </div>

                            <div className="flex-1 mt-6">
                                <label className="contact-label">Customer Type</label>
                                <div className="flex items-center justify-between py-3 px-5 rounded-md">
                                    <div className="flex items-center">
                                        <input id="checked-checkbox" type="checkbox" value="" className="check-box" />
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PPPOE</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="checked-checkbox" type="checkbox" value="" className="check-box" />
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Static</label>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="checked-checkbox" type="checkbox" value="" className="check-box" />
                                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hotspot</label>
                                    </div>
                                </div>
                            </div>


                            <div className="flex-1 mt-6">
                                <div className="border rounded-md p-5">
                                    <div>
                                        <label className="contact-label">Organization Name *</label>
                                        <input type="text" id="name" className="contact-in" placeholder="Enter Your Name" required />
                                    </div>

                                    <div>
                                        <label className="contact-label">Organization Name *</label>
                                        <input type="text" id="name" className="contact-in" placeholder="Enter Your Name" required />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <button type="submit" className="btn-2">Register</button>
                                <button type="submit" className="btn-2 bg-gray-800">Cancel</button>
                            </div>
                        </form>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Register
