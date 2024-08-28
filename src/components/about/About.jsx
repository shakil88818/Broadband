

import about1 from "../../assets/images/experience.png"
import about2 from "../../assets/images/transparency.png"
import about3 from "../../assets/images/approch.png"
import about4 from "../../assets/images/management.png"



const About = () => {
  return (
    <>
      <section className="text-gray-700 body-font pt-16 md:pt-20">
        <div className="container mx-auto flex px-5   flex-col items-center md:items-start">
          <div className=" flex flex-col mb-3 md:mb-0 items-center text-center lg:flex-grow ">

            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center title-font sm:text-4xl text-3xl font-semibold mb-1 text-gray-900" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">Creating Advanced <span className="text-blue-700">Brilliance:</span>
              </h1>
              <p className="text-center mb-4 md:mb-6 sm:text-3xl text-2xl font-medium ">One line at a time.</p>
            </div>


            <p className="mb-1 leading-relaxed" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">Experience a new world of connectivity with Sheikh Broadband.Beginning our journey in the year 2021, We offer high-speed internet services that empower you to stay connected, entertained, and productive. Our reliable and fast broadband solutions cater to both residential and commercial needs. Enjoy seamless streaming, smooth online gaming, and efficient work from home with our cutting-edge network. At Sheikh Broadband, we are committed to delivering exceptional customer service and ensuring a truly connected experience.
              <br /><br />
            At Sheikh Broadband, we put the client at the center of our trade and our profoundly prepared group of experts guarantee a level of quality and benefit which stay unmatched by any other player within the industry. We accept in enhancing to disentangle and in taking possession of our activities and administrations. Whether it be individuals or organizations, we see it as our obligation to improve the lives of all our clients and to ended up the favored choice for a computerized way of life within the showcase.
            </p>


            <div className="py-5 columns-1 sm:columns-2 md:col-span-3 lg:columns-4">

              <div className="max-w-xs py-6 bg-white  flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                <div className="flex items-center justify-center md:justify-start md:items-start ">
                  <img src={about1} alt="" className="w-16" />
                </div>
                <h2 className="text-xl font-semibold">Expertise and Innovation</h2>
                <p className="mb-3 font-normal h-20 text-gray-700 dark:text-gray-400">We pride ourselves on always staying ahead of the curve and constantly pushing boundaries to redefine whats possible</p>
              </div>

              <div className="max-w-xs py-6 bg-white  flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                <div className="flex items-center justify-center md:justify-start md:items-start ">
                  <img src={about2} alt="" className="w-16" />
                </div>
                <h2 className="text-xl font-semibold">Transparent Process</h2>
                <p className="mb-3 font-normal h-20 text-gray-700 dark:text-gray-400">Be with us at each step of the way. Our objective is to demystify the travel from concept to conveyance.</p>
              </div>

              <div className="max-w-xs py-6 bg-white  flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                <div className="flex items-center justify-center md:justify-start md:items-start ">
                  <img src={about3} alt="" className="w-16" />
                </div>
                <h2 className="text-xl font-semibold">Client-Centric Approach</h2>
                <p className="mb-3 font-normal h-20 text-gray-700 dark:text-gray-400">We commit ourselves to tuning in, collaborating, and guaranteeing that each interaction could be a step toward your victory.</p>
              </div>

              <div className="max-w-xs py-6 bg-white  flex flex-col items-center gap-3" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                <div className="flex items-center justify-center md:justify-start md:items-start ">
                  <img src={about4} alt="" className="w-16" />
                </div>
                <h2 className="text-xl font-semibold">Expertise and Innovation</h2>
                <p className="mb-3 font-normal h-20 text-gray-700 dark:text-gray-400">We pride ourselves on always staying ahead of the curve and constantly pushing boundaries to redefine whats possible</p>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  )
}

export default About
