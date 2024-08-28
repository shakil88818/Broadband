
import { IoSearchSharp } from "react-icons/io5";

import { HomePackagesData } from "../../../assets/Data";
import PackagesCard from "./PackagesCard"


const HomePackages = () => {
  return (
    <>
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center pb-10" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
              Home Internet<span className="text-blue-600"> Packages</span>
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pb-10" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
            <button className="btn-2 flex items-center gap-1"><span>Advance Search</span> <IoSearchSharp /></button>
            <button className="btn-2 bg-gray-400">Popular Packages</button>
          </div>



          <div className="flex items-center justify-center flex-wrap gap-10 grow" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">

            {
              HomePackagesData.map((packages) => {
                return (
                  <PackagesCard 
                  key={packages.id} 
                  mbps={packages.mbps}
                  tk={packages.tk}
                  dial={packages.dial}
                  
                  />
                )
              })
            }
            
          </div>




        </div>
      </section>
    </>
  )
}

export default HomePackages










// <div className="px-5 py-7 bg-white rounded-lg shadow-lg border relative">
// {/* Ribbon */}
// <div className="absolute top-0 right-0 bg-blue-500 text-white text-sm  px-2 py-1 rounded-bl-lg">
//   Popular
// </div>

// {/* Card Content */}
// <div className="mb-4">
//   <h2 className="text-3xl font-bold hover:text-[#0e4f9d] cursor-pointer">20Mbps</h2>
// </div>

// <div className="flex justify-between px-3 sm:px-8 py-5">

//   <div className="py-4">
//     <p className="text-xs text-gray-500">Upto</p>
//     <span className=" text-5xl md:text-6xl text-gray-600 font-semibold">20</span>
//     <span className="text-lg ml-1 text-gray-600 font-semibold">Mbps</span>
//   </div>

//   <div className="h-auto w-[2px] bg-gray-400"></div>

//   <div className="flex flex-col items-center justify-center py4">
//     <h3 className="text-xl font-semibold text-gray-600">BDT <span className="text-4xl">1050</span></h3>
//     <p className="text-lg font-semibold text-gray-500">Per Month</p>
//     <p className="text-xs text-gray-400">*Including VAT</p>
//   </div>

// </div>


// {/* Offer Toggle */}
// <div className="text-center pb-5">
//   <button
//     className="btn-2 text-gray-800 bg-gray-200"
//     onClick={toggleOffer}>

//     {showOffer ?
//     <> <div className="flex items-center gap-1"><span>Hide Offer</span> <IoIosArrowUp /></div> </>
//     :
//     <><div className="flex items-center gap-1"><span>Show offer</span><IoIosArrowDown/></div></>}
//   </button>
// </div>

// {/* Exclusive Privileges */}
// {showOffer && (
//   <div className="flex flex-col gap-5">

//     <div className="flex items-center justify-between ">
//       <h4 className="text-base font-semibold text-gray-600 ">Exclusive Privileges</h4>
//       <div className="w-40 h-[2px] bg-gray-400"></div>
//     </div>

//     <div className="flex items-center">
//       <img src={dial} className="w-10" alt="" />
//       <p className="text-sm text-gray-700">Dial 100 Min TalkTime</p>
//     </div>

//     <div className="text-center">
//       <button className="btn-2 w-52"> Choose this package</button>
//     </div>

//   </div>
// )}


// </div>