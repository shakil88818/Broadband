import { Link } from "react-router-dom"
import Hero2img from "../../assets/images/hero2-2.png"


const BuyTech = () => {
    return (
        <>
            <section className="">
                <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${Hero2img})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    <div className=" container mx-auto px-5 relative z-10 flex items-center justify-center md:justify-start  h-full ">
                        <div className="text-white text-center md:text-start">
                            <h1 className="text-4xl md:text-6xl font-bold ">Buy Tech Items <br/> on sheikh technologies</h1>
                            <div className="mt-10">
                                <Link>
                                    <button className="btn-2 border-blue-900">
                                        Buy Now&rarr;
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BuyTech
