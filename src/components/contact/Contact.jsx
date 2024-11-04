import { MdOutgoingMail } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";


const Contact = () => {
    return (
        <>
            <section className="bg-white py-16 md:py-20" id="connection">
                <div className="container px-5 mx-auto">
                    <div className="lg:flex lg:gap-10">

                        <div className="lg:w-1/2">
                            <div
                                className="w-full lg:max-w-xl  ">
                                <h2 className="text-2xl md:text-4xl font-extrabold text-center pb-10" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                                    Need <span className="text-blue-600">New Connection?</span>
                                </h2>

                                <div className="bg-white px-3 md:px-10 py-6 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                                    <form className="mt-6">
                                        <div className="flex-1">
                                            <label className="contact-label">Full Name</label>
                                            <input type="text" placeholder="Enter Your Name" className="contact-in" />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="contact-label">Number</label>
                                            <input type="number" placeholder="01XXXXXXXXX" className="contact-in" />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="contact-label">Email address</label>
                                            <input type="email" placeholder="example@gmail.com" className="contact-in" />
                                        </div>

                                        <div className="flex-1 mt-6">
                                            <label className="contact-label">Your District Name</label>
                                            <input type="text" className="contact-in" />
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
                        </div>

                        <div className="lg:w-1/2">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-center lg:mt-0 mt-10 pb-10" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                                24/7 Support <span className="text-blue-600">Service</span>
                            </h2>

                            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg bg-white shadow-lg px-10 py-7 rounded-lg lg:mt-12" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Let&apos;s Connect</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Tell us about yourself, and let&apos;s explore how we can create something remarkable together.</p>

                                <div className="py-10 flex flex-col gap-3">
                                    <div className="flex items-center gap-1 text-gray-700">
                                        <MdOutgoingMail size={32} />
                                        <p>broadband@sheikhgroup.net</p>
                                    </div>

                                    <div className="flex items-center gap-1 text-gray-700">
                                        < BsBuildings size={32} />
                                        <p>Plot 22, Road 4A, Uttara
                                            Dhaka-1230, Bangladesh</p>
                                    </div>
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
