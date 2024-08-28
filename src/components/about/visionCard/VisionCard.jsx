

const VisionCard = () => {
    return (
        <>
            <section className="pb-16 md:bp-20">
                <div className="container mx-auto px-5">
                    <div className="flex flex-wrap gap-10">

                        <div className="p-14 flex-1 flex-col shadow-2xl rounded-lg basis-1/3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                            <h2 className="title text-center pb-3">
                                Our <span className="text-blue-600"> Vision</span>
                            </h2>
                            <p className="text-center">In the next 5 years, Sheikh Broadband aspires to become the preferred choice in digital lifestyle using world-class technology and innovation.</p>
                        </div>

                        <div className="p-14 flex-1 flex-col shadow-2xl rounded-lg basis-1/3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                            <h2 className="title text-center pb-3">
                            Our<span className="text-blue-600"> Mission</span>
                            </h2>
                            <p className="text-center">Sheikh Broadband exists to seamlessly connect people and organizations, enrich their lives and open them to a world of possibilities</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default VisionCard
