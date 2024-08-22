
import { CounterData } from "../../assets/Data"
import counterTick from "../../assets/images/counter.png"


const AllCount = () => {
    return (
        <>
            <section className="bg-slate-300 py-[60px]">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-12">



                        {
                            CounterData.map((count)=>{
                                return(
                                    <div key={count.id} className="flex items-center gap-4">
                                    <img className="w-[60px]" src={counterTick} alt="" />
        
                                    <div className="">
                                        <p className="text-6xl font-bold">{count.count}</p>
                                        <h3 className="text-lg lg:text-1xl font-medium pt-2">{count.title}</h3>
                                    </div>
                                </div>
                                )
                            })
                        }




                    </div>
                </div>
            </section>
        </>
    )
}

export default AllCount