import axios from "axios";
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            axios.post("https://broadbandapi.sheikhgroup.net/api/contact", values)
            toast("Message Sent Successfully")
            setValues({
                name: "",
                email: "",
                subject: "",
                message: ""
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>

            <section className="bg-white">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="title font-bold text-center pb-5" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                        Want to <span className="text-blue-600"> get in touch?</span>
                    </h2>
                    <ToastContainer />
                    <p className="text-lg text-center font-bold text-gray-600 pb-10" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">Fill up the form and our team will get back to you within 24 hours.</p>


                    <div className="p-5 md:p-12 shadow-2xl rounded-xl">
                        <form onSubmit={handleSubmit} className="space-y-8" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                            <div>
                                <label className="contact-label">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="contact-in"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    required />
                            </div>

                            <div>
                                <label className="contact-label">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="contact-in"
                                    placeholder="xxxx@xxxx"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div>
                                <label className="contact-label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="contact-in"
                                    placeholder="Let us know how we can help you"
                                    name="subject"
                                    value={values.subject}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="contact-label">Your message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="contact-text-area"
                                    placeholder="Leave a comment..."
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn w-full">Send message</button>
                        </form>
                    </div>


                </div>
            </section>

        </>
    )
}

export default ContactUs
