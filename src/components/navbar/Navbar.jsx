import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import broadband from "../../assets/images/brodband.png"

import { HiBars3BottomLeft } from "react-icons/hi2";

import { IoMdCloseCircleOutline } from "react-icons/io";




const Navbar = () => {
  const [show, setShow] = useState(false)

  const location = useLocation()

  useEffect(() => {
    return () => {
      setShow(false);
    };
  }, [location]);

  return (
    <>
      <header className="bg-white h-[80px] flex justify-center shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-3 flex justify-between items-center">
          <div className="">
            <img className="w-32" src={broadband} alt="" />
          </div>

          <div className="hidden md:block " id="sidebar">
            <ul className="flex items-center justify-center font-semibold gap-7 text-gray-800">
              <li><NavLink to="/" className="hover:text-[#3761fa] transition ease-in-out">Home</NavLink></li>
              <li><NavLink to="/packages" className="hover:text-[#3761fa] transition ease-in-out">Packages</NavLink></li>
              <li><NavLink to="/business" className="hover:text-[#3761fa] transition ease-in-out">Business</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#3761fa] transition ease-in-out">About Us</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#3761fa] transition ease-in-out">Contact Us</NavLink></li>

              <Link to="/selfcare"><button className="btn-2" >Self Carer</button></Link>
            </ul>
          </div>

          <div onClick={() => { setShow(!show) }} className="md:hidden">
            {show ? <IoMdCloseCircleOutline size={48} /> : <HiBars3BottomLeft size={48} />}
          </div>

        </div>
      </header>




      {/* Mobile Menu */}




      {

        show && <div id="drawer-navigation" className=" fixed top-20 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform   bg-white shadow-2xl " >

          <button onClick={() => { setShow(false) }} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center " >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>

          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">

              {/* <li>
                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 ">
                 Inbox
                </Link>
              </li> */}

              <li>
                <Link to="/" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100">Home</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100">Packages</Link>
              </li>
              <li>
                <Link to="/business" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100">Business</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100">About Us</Link></li>
              <li>
                <Link to="/contact" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100">Contact Us</Link>
              </li>


              <div className="pt-5">
                <Link to="/selfcare"><button className="btn-2" >Self Carer</button></Link>
              </div>

            </ul>
          </div>
        </div>
      }


    </>
  )
}

export default Navbar

