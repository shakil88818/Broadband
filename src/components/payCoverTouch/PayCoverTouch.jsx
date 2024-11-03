import coverage from "../../assets/images/covarage.jpg"

const PayCoverTouch = () => {
  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-5" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
          <div className="flex flex-col md:flex-row items-center justify-center rounded-md bg-blue-100 text-black">
            <div className=" order-2  md:w-1/2 text-center p-9 md:text-left space-y-4 ">
              <h2 className="text-3xl lg:text-5xl font-bold">Ready to start?<br />Locate our coverage area</h2>
              <p>
                Sheikh Broadband is spread almost everywhere in Dhaka city & Mymensingh.<br />
                Check the availability of all coverage areas in Dhaka  & Mymensingh.
              </p>
              <button className="btn-2">
                Coverage Area
              </button>
            </div>

            <div className="md:w-1/2 relative">
              <img
                src={coverage}
                alt="Coverage Area Background"
                className="w-full h-full object-cover bg-cover rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                <h2 className="text-4xl md:text-5xl font-bold text-white"></h2>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default PayCoverTouch
