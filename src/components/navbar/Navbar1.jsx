import { Link, NavLink, useLocation } from "react-router-dom";

import broadband from "../../assets/images/brodband.png"

import { useEffect, useRef, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = useState(false);


  const location = useLocation()
  const menuRef = useRef(null)


  useEffect(() => {
    return () => {
      setShow(false);
    };
  }, [location]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);



  return (
    <>
      <header className="bg-[#3761fa] py-2">
        <div className="text-white font-bold flex container px-3 items-center justify-center gap-2">
          <p><MdOutgoingMail size={32} /></p>
          <p>broadband@sheikhgroup.net</p>
        </div>
      </header>
      <header className="bg-gray-50 h-[100px]  flex justify-center shadow-xl sticky top-0 z-40">
        <div className="container mx-auto px-3 flex justify-between items-center">
          <Link to="/" className="">
            <img className="w-32" src={broadband} alt="" />
          </Link>

          <div className="hidden md:block " id="sidebar">
            <ul className="text-lg flex items-center justify-center md:gap-4 lg:gap-6 text-black">
            <li><NavLink to="/" className="hover:text-[#3761fa] transition ease-in-out text-lg">Home</NavLink></li>
              <li><NavLink to="/packages" className="hover:text-[#3761fa] transition ease-in-out text-lg">Packages</NavLink></li>
              <li><NavLink to="/coverage" className="hover:text-[#3761fa] transition ease-in-out text-lg">Coverage</NavLink></li>
              <li><NavLink to="/business" className="hover:text-[#3761fa] transition ease-in-out text-lg">Business</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#3761fa] transition ease-in-out text-lg">About</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#3761fa] transition ease-in-out text-lg">Contact</NavLink></li>

              <Link to="/selfcare"><button className="btn-2 bg-[#3761fa]" >Self Carer</button></Link>
            </ul>
          </div>

          <div className="hidden xl:block">
            <div className="flex items-center gap-2">
              <FaSquareWhatsapp size={45} className="text-white hover:text-white hover:bg-[#3761fa] bg-[#3761fa] p-1 rounded " />
              <div>
                <p className="text-[#3761fa]">Message Us Today</p>
                <strong className="hover:text-[#1eb7e6">+91 86706 39591</strong>
              </div>
              <div className="ms-5 flex flex-col gap-1 ">
                <a href="https://www.facebook.com/sheikhbroadband07" target="_blank" rel="noreferrer"><FaFacebook size={22} className="text-[#3761fa] hover:text-[#3761fa] transition-all duration-600" /></a>
                <a href=""><FaLinkedin size={22} className="text-[#3761fa] hover:text-[#3761fa] transition-all duration-600" /></a>
                <a href=""><FaInstagramSquare size={22} className="text-[#3761fa] hover:text-[#2f6897] transition-all duration-600" /></a>
              </div>
            </div>
          </div>

          <div onClick={() => { setShow(!show) }} className="md:hidden text-black">
            {show ? <IoMdCloseCircleOutline size={48} /> : <HiBars3BottomLeft size={48} />}
          </div>

        </div>
      </header>




      {/* Mobile Menu */}




      {

        show && <div id="drawer-navigation" ref={menuRef} className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-scroll   bg-white shadow-2xl"  >

          <button onClick={() => { setShow(false) }} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center " >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>

          <div className="py-4 overflow-y-auto">
            <ul className="flex flex-col gap-3 font-medium">
              <Link to="/" className="pb-2">
                <img className="w-32" src={broadband} alt="" />
              </Link>

              <li>
                <Link to="/" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100 text-lg">Home</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100 text-lg">Packages</Link>
              </li>
              <li><NavLink to="/coverage" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100 text-lg">Coverage</NavLink></li>
              <li>
                <Link to="/business" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100 text-lg">Business</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100 text-lg">About Us</Link></li>
              <li>
                <Link to="/contact" className="hover:text-[#3761fa] transition ease-in-out block p-2 rounded hover:bg-gray-100 text-lg">Contact Us</Link>
              </li>


              <div className="pt-5">
                <Link to="/selfcare"><button className="btn-2" >Self Carer</button></Link>
              </div>

            </ul >
          </div >
        </div >
      }


    </>
  )
}

export default Navbar