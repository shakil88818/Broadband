import { ClientData } from "../../assets/Data"
import Slider from "react-slick";

const OurClient = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    initialSlide: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    rows: 2,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
    ]
  };
  return (
    <>
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <h2 className="title font-extrabold text-center pb-8" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
            Our<span className="text-blue-600"> Client</span>
          </h2>
          <div className="flex justify-center" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
            <p className="text-center w-2/3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">Our clients trust us to deliver fast, reliable, and affordable broadband services. Join our growing community of satisfied customers enjoying seamless connectivity and exceptional customer support.</p>
          </div>

          <div className="pt-14">
            <div className=" slider-container">
              <Slider {...settings}>
                {/* <div className="px-4 py-10 bg-white border rounded-md w-60 flex justify-center items-center">
                            <img src={client1} alt="" className="w-32" />
                        </div> */}

                {
                  ClientData.map((client) => {
                    return (
                      <div key={client.id} className="" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                        <div className="px-4 py-10 bg-white border  rounded-md flex justify-center items-center shadow-md">
                          <img src={client.image} alt="" className="w-22 h-12" />
                        </div>
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default OurClient
