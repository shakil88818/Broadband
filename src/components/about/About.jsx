import { MdDeveloperBoard } from "react-icons/md";
import { FaMoneyBillTransfer, FaPenClip } from "react-icons/fa6";
import { FaRegClipboard } from "react-icons/fa6";




const About = () => {
  return (
    <>
      <section className="text-gray-700 body-font py-20">
        <div className="container mx-auto flex px-5   flex-col items-center md:items-start">
          <p className="bg-gray-200 p-2 mb-4 md:mb-6 text-sm rounded-lg"># About Sheikh Communications #</p>
          <div className="lg:flex-grow  flex flex-col md:items-start md:text-left mb-3 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-semibold mb-1 text-gray-900">Creating Advanced <span className="text-blue-700">Brilliance:</span>
            </h1>
            <p className="mb-4 md:mb-6 sm:text-3xl text-2xl font-medium ">One line at a time.</p>


            <p className="mb-1 leading-relaxed">Sheikh Communications is a dynamic IT solutions provider committed to bridging the digital divide through innovative and reliable technology.We are dedicated to delivering exceptional service, building long-lasting partnerships, and driving digital transformation</p>


            <div className="py-5 columns-1 sm:columns-2 md:col-span-3 lg:columns-4">

              <div className="max-w-xs py-6 bg-white  flex flex-col gap-3">
                <div className="flex items-center justify-center md:justify-start md:items-start ">
                  <MdDeveloperBoard size={60} className="text-center" />
                </div>
                <h2 className="text-xl font-semibold">Expertise and Innovation</h2>
                <p className="mb-3 font-normal h-20 text-gray-700 dark:text-gray-400">We pride ourselves on always staying ahead of the curve and constantly pushing boundaries to redefine whats possible</p>
              </div>

              <div className="max-w-xs py-6 bg-white  flex flex-col gap-3">
                <div className="flex items-center justify-center md:justify-start md:items-start ">
                  <FaMoneyBillTransfer size={60} className="text-center" />
                </div>
                <h2 className="text-xl font-semibold">Transparent Process</h2>
                <p className="mb-3 font-normal h-20 text-gray-700 dark:text-gray-400">Be with us at each step of the way. Our objective is to demystify the travel from concept to conveyance.</p>
              </div>

              <div className="max-w-xs py-6 bg-white  flex flex-col gap-3">
                <div className="flex items-center justify-center md:justify-start md:items-start ">
                  <FaRegClipboard size={60} className="text-center" />
                </div>
                <h2 className="text-xl font-semibold">Client-Centric Approach</h2>
                <p className="mb-3 font-normal h-20 text-gray-700 dark:text-gray-400">We commit ourselves to tuning in, collaborating, and guaranteeing that each interaction could be a step toward your victory.</p>
              </div>

              <div className="max-w-xs py-6 bg-white  flex flex-col gap-3">
                <div className="flex items-center justify-center md:justify-start md:items-start ">
                  <FaPenClip size={60} className="text-center" />
                </div>
                <h2 className="text-xl font-semibold">Expertise and Innovation</h2>
                <p className="mb-3 font-normal h-20 text-gray-700 dark:text-gray-400">We pride ourselves on always staying ahead of the curve and constantly pushing boundaries to redefine whats possible</p>
              </div>

            </div>

          </div>

        </div>

        <div className="md:mb-5 text-center">
          <button className="g-btn ">
            Detail More &rarr;
          </button>
        </div>
      </section>
    </>
  )
}

export default About
