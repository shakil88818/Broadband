import { Link } from "react-router-dom"
import homtop from "../../assets/images/hometop.webp"
const HomeTop = () => {
    return (
        <>
            <section className="flex flex-col lg:flex-row items-center lg:items-start gap-5 p-6 lg:p-12 bg-white">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-end mb-6 lg:mb-0">
                    <img
                        src={homtop}
                        className="w-full max-w-lg rounded-lg shadow-lg"
                    />
                </div>

                <div className="order-1 lg:order-2 lg:w-1/2 lg:pl-12 text-center lg:text-left">
                    <h2 className="text-2xl lg:text-3xl font-semibold text-blue-700 mb-4">
                        Get the best WiFi for your home backed by Fiber technology
                    </h2>
                    <ul className="text-gray-700 text-lg space-y-4 mb-6">
                        <li className="flex items-center">
                            <span className=" mr-2">✔️</span> Stream and Download with ease
                        </li>
                        <hr />
                        <li className="flex items-center">
                            <span className=" mr-2">✔️</span> In a matter of seconds, you can share photos and videos
                        </li>
                        <hr />
                        <li className="flex items-center">
                            <span className=" mr-2">✔️</span> Enjoy Seamless Video Conferencing
                        </li>
                        <hr className="text-red-600" />
                    </ul>


                    <div className="inline-flex gap-4 justify-center lg:justify-start flex-wrap">
                        <a href="#connection"><button className="btn-2 w-40">New Connection</button></a>
                        <Link to="/selfcare">                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Self Care
                        </button></Link>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Pay Bill
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTop
