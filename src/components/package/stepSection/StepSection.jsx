
import step1 from "../../../assets/images/icon-step-1.svg"
import step2 from "../../../assets/images/icon-step-2.svg"
import step3 from "../../../assets/images/icon-step-3.svg"



const StepSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-5">
                <div className="flex justify-center gap-3 md:gap-14" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="60">
                    <div className=" md:mb-0">
                        <div className="flex items-center justify-center gap-3 md:gap-10">
                            <img src={step1} className="w-10 md:w-16" alt="" />
                            <p className="text-blue-800 text-4xl md:text-7xl">&rarr;</p>
                        </div>
                        <p className="pt-6 text-sm font-semibold md:text-lg">Check Network Coverage</p>
                    </div>

                    <div className="md:mb-0">
                        <div className="flex items-center justify-center gap-3 md:gap-10">
                            <img src={step2} className="w-10 md:w-16" alt="" />
                            <p className="text-blue-800 text-4xl md:text-7xl">&rarr;</p>
                        </div>
                        <p className="pt-6 text-sm font-semibold md:text-lg">Choose Package</p>
                    </div>

                    <div className="" >
                        <img src={step3} className="w-14 md:w-24" alt="" />
                        <p className=" pt-6 text-sm font-semibold md:text-lg">Get Connected</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StepSection;