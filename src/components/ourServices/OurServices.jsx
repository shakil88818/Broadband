import { useState } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { RiMenu2Fill } from "react-icons/ri"

{/* <div className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
<GiHamburgerMenu size={38} />
</div> */}




const OurServices = () => {

   const [show, setShow] = useState(false)


   return (
      <>



         <button onClick={() => {setShow(!show)}} className="text-left">
         {show ? <IoMdCloseCircleOutline size={48} /> : <RiMenu2Fill size={48} />}
         </button>



         {

            show &&          <div id="drawer-navigation" className=" fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform  bg-white dark:bg-gray-800 " >
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase ">Menu</h5>
            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center " >
               <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               <span className="sr-only">Close menu</span>
            </button>
            <div className="py-4 overflow-y-auto">
               <ul className="space-y-2 font-medium">
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  group">
                        <span className="ms-3">Dashboard</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">Pro</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">3</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg d group">

                        <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg ">

                        <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg  group">
                        <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         }


      </>
   )
}

export default OurServices








