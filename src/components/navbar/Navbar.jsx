import { Link } from "react-router-dom";
import broadband from "../../assets/images/brodband.png"

import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
    <>
      <header className="bg-white text-[#0e4f9d] h-[80px] flex justify-center">
        <div className="container mx-auto px-3 flex justify-between items-center">
          <div className="">
            <img className="w-32" src={broadband} alt="" />
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center justify-center font-semibold gap-7">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/business">Business</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/paybill">Pay Bill</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>

              <Link to="/contact"><button className="btn-2" >Self Carer</button></Link>
            </ul>
          </div>

          <div className="md:hidden">
          <GiHamburgerMenu size={38} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar

