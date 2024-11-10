
import { Link } from "react-router-dom"
import broadband from "../../assets/images/brodband.png"

const NavbarSelfCare = () => {

  return (
    <>
      <header className="bg-white h-[80px] flex justify-center shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-3 flex justify-between items-center">
          <Link to="/" className="">
            <img className="w-32" src={broadband} alt="" />
          </Link>


          <div className="">
            <Link to="/selfcare/login"><button className="btn-2" >Login</button></Link>
          </div>

        </div>
      </header>




    </>
  )
}

export default NavbarSelfCare

