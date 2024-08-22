import people from "../../assets/images/pepole.png"
import time from "../../assets/images/time.png"
import price from "../../assets/images/price.png"

const Team = () => {
  return (
    <>
      <section className="text-white bg-slate-900 py-16 md:py-20">

      <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="title mb-16">Augment Your Development Team</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">

          <div className="flex flex-col items-center">
            <div className="bg-white text-darkblue-900 p-4 rounded-full mb-4">
              <img className="w-12 h-12" src={people} alt="" />
            </div>
            <h2 className="text-xl font-semibold mb-2">The Right People</h2>
            <p className="text-base">Work with our professional software developers and create flexible strategies and solutions.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-darkblue-900 p-4 rounded-full mb-4">
            <img className="w-12 h-12" src={time} alt="" />
            </div>
            <h2 className="text-xl font-semibold mb-2">The Right Time</h2>
            <p className="text-base">Teams start when you need and deliver when you want. Scale up or down with ease.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-darkblue-900 p-4 rounded-full mb-4">
            <img className="w-12 h-12" src={price} alt="" />
            </div>
            <h2 className="text-xl font-semibold mb-2">The Right Price</h2>
            <p className="text-base">Rein in development expenses with customized solutions for every project.</p>
          </div>
        </div>
        <div className="text-2xl md:text-3xl font-semibold pt-16">Lets gather your dream squad!</div>
        <div className="mt-8">
          <button className="g-btn">
            Craft Your Team →
          </button>
        </div>
      </div>
    </div>
      </section>
    </>
  )
}

export default Team;
