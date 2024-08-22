import { FaPython,FaReact,FaVuejs,FaBootstrap,FaPhp,FaLaravel} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaUnity } from "react-icons/fa6";



const Technology = () => {
  return (
    <>

      <section className="bg-slate-100 text-slate-800 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5  sm:px-6 lg:px-8 text-center cursor-pointer">
        <h2 className="title text-start mb-12">Technology we used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8 items-center">
          <div className="hover:scale-[1.2] transition ease-in-out duration-500">
            <FaPython size={48} className="mx-auto h-12"/><p>Python</p>
          </div>

          <div className="hover:scale-[1.2] transition ease-in-out duration-500">
            <FaReact size={48} className="mx-auto h-12"/><p>React</p>
          </div>

          <div className="hover:scale-[1.2] transition ease-in-out duration-500">
            <FaVuejs size={48} className="mx-auto h-12"/><p>Vue.js</p>
          </div>

          <div className="hover:scale-[1.2] transition ease-in-out duration-500">
            <RiTailwindCssFill size={48} className="mx-auto h-12"/><p>Tailwind CSS</p>
          </div>

          <div className="hover:scale-[1.2] transition ease-in-out duration-500">
            <FaBootstrap size={48} className="mx-auto h-12"/><p>Bootstrap</p>
          </div>

          <div className="hover:scale-[1.2] transition ease-in-out duration-500">
            <FaUnity size={48} className="mx-auto h-12"/><p>Unity</p>
          </div>
 
          <div className="hover:scale-[1.2] transition ease-in-out duration-500">
            <FaPhp size={48} className="mx-auto h-12"/><p>PHP</p>
          </div>
          <div className="hover:scale-[1.2] transition ease-in-out duration-500">
            <FaLaravel size={48} className="mx-auto h-12"/><p>Laravel</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Technology
