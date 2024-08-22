

const Contact = () => {
    return (
        <>
            <section className="bg-gray-300 py-16 md:py-20">
                <div className="container px-5 mx-auto">
                    <div className="lg:flex">

                        <div className="lg:w-1/2">
                            <div
                                className="w-full lg:max-w-xl  ">
                                <h2 className="text-2xl md:text-4xl font-extrabold text-center pb-10">
                                    Need <span className="text-blue-600">New Connection?</span>
                                </h2>

                                <form className="mt-6">
                                    <div className="flex-1">
                                        <label className="contact-label">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="contact-in" />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="contact-label">Number</label>
                                        <input type="number" placeholder="01XXXXXXXXX" className="contact-in" />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="contact-label">Email address</label>
                                        <input type="email" placeholder="johndoe@example.com" className="contact-in" />
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="contact-label">Your District Name</label>
                                        <select className="contact-in">-</select>
                                    </div>

                                    <div className="flex-1 mt-6">
                                        <label className="contact-label">Your Upazilla Name</label>
                                        <input type="text" className="contact-in" />
                                    </div>


                                    <div className="w-full mt-6">
                                        <label className="contact-label">Message</label>
                                        <textarea className="contact-text-area" placeholder="Message"></textarea>
                                    </div>

                                    <button className="btn-2 w-full mt-5">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>




                        <div className="lg:w-1/2">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-center pb-10">
                            24/7 Support <span className="text-blue-600">Service</span>
                            </h2>

                            <div className="">
                                <div className="bg-white">
                                    <p>Enjoy Premium Customer Service</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
