import broadband from "../../assets/images/brodband.png"

import { MdOutlineKeyboardArrowRight } from "react-icons/md";



import { FaFacebook, FaLinkedinIn, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="bg-gray-100 py-14 text-black">
        <div className="container mx-auto px-3 flex flex-col md:justify-between md:flex-row  gap-10">

            <div className=" flex flex-col items-center md:items-start md:w-2/5">
                <img src={broadband } className="w-[100px]" alt="logo" />
                <p className="text-black pt-3 text-sm text-center md:text-left leading-7">Sheikh Broadband is a telecommunications company offering high-speed internet services, reliable connectivity, and customer support, primarily serving residential and business clients with various affordable packages</p>
                <div className="text-black flex gap-5 mt-10">
                <a href="https://www.facebook.com/sheikhgroup07" target="_blank"><FaFacebook size={25}/></a>
                <a href="" target="_blank"><FaLinkedinIn size={25} /></a>
                <a href="" target="_blank"><FaInstagramSquare size={25}/></a>
                <a href="" target="_blank"><FaYoutube size={25}/></a>
              </div>
            </div>



            <div className="">
            <h4 className="text-[#0e4f9d] font-bold mb-5 text-center md:text-left ">Others Pages</h4>
              <ul className="text-sm flex flex-col gap-3 items-center md:items-start">
                <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>Home</span></a>
                </li>

                <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>Business</span></a>
                </li>

                <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>About us</span></a>
                </li>

                <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>Packeges</span></a>
                </li>

                <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>Blogs</span></a>
                </li>

                <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>News & Events</span></a>
                </li>


              </ul>
            </div>

            <div className="">
            <h4 className="text-[#0e4f9d] font-bold mb-5 text-center md:text-left ">Quick Links</h4>
              <ul className="text-sm flex flex-col items-center md:items-start gap-3">

              <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>Career</span></a>
                </li>

                <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>Our Policies</span></a>
                </li>

                <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>Self Care</span></a>
                </li>

                <li>
                  <a href="" className="flex items-center gap-1 hover:text-[#0e4f9d]"> 
                  < MdOutlineKeyboardArrowRight size={20} /> 
                  <span>FAQ</span></a>
                </li>
              </ul>
            </div>




            <div className="">
            <h4 className="text-[#0e4f9d] font-bold mb-5 text-center md:text-left" >Contact Us</h4>
              <ul className="flex flex-col md:text-sm items-center md:items-start gap-3">
                <p>Sector 15, Uttara</p>
                <p>Dhaka-1230</p>
                <p>Dhaka, Bangladesh</p>
                <p>Email: contact@sheikhgroup.net</p>
              </ul>
            </div>

        </div>

        <hr className="mt-10 h-[1px] bg-gray-400 border-0" />

        <div className=" text-center pt-16 mt-5">
          <p className="text-sm">© <span>Copyright</span> <strong className="sitename">Sheikh Broadband</strong> <span>All Rights Reserved</span></p>
        </div>

      </section>
    </>
  )
}

export default Footer
