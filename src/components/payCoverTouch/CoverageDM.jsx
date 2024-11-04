import { FiMapPin } from "react-icons/fi";


const CoverageDM = () => {
    const dhakaAreas = [
        'Adabor', 'Badda', 'Bangshal', 'Biman Bandar',
        'Banani', 'Chak Bazar', 'Dakshin Khan', 'Darus Salam',
        'Dhanmondi', 'Bhatara', 'Gulshan', 'Hazaribagh',
        'Kala Bagan', 'Kamrangir Char', 'Khilgaon',
        'Keraniganj',
        'Lalbagh',
        'Mirpur',
        'Mohammadpur',
        'New Market',
        'Pallabi',
        'Paltan',
        'Ramna',
        'Rampura',
        'Rupnagar',
        'Shahjahanpur',
        'Shah Ali',
        'Shahbagh',
        'Sher-e-Bangla',
        'Tejgaon',
        'Tejgaon Ind. Area',
        'Uttara',
    ];

    const mymensinghAreas = [
        'Mymensingh Sadar', 'Ishwarganj', 'Nandail', 'Phulpur','Dhobaura', 'Haluaghat', 'Muktagacha', 'Gauripur', 'Trishal'
    ]


    return (
        <>
            <section className="py-12 md:py-16">
                <div className="container mx-auto shadow-md bg-slate-50">
                    <div className="p-6 pb-12 max-w-screen-xl mx-auto">
                        <div className="text-center mb-6 shadow-md">
                            <div className="">
                                <h2 className="text-2xl lg:text-4xl font-semibold flex items-center justify-center gap-2"> <span><FiMapPin className="text-black" /></span><span>Dhaka</span></h2>
                                
                            </div>
                            <p className="text-gray-500 pt-2 pb-5">Check the available area for the Dhaka Region</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {dhakaAreas.map((dhaka) => (
                                <div key={dhaka} className="bg-white p-4 py-10 rounded-lg shadow-lg flex items-center justify-center gap-2">
                                    <span><FiMapPin className="text-[#3761fa]" /></span>
                                    <span className="text-lg font-medium text-gray-800">{dhaka}</span>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto mt-16 shadow-md bg-slate-50">
                    <div className="p-6 pb-12 max-w-screen-xl mx-auto">
                        <div className="text-center mb-6 shadow-md">
                            <div className="">
                                <h2 className="text-2xl lg:text-4xl font-semibold flex items-center justify-center gap-2"> <span><FiMapPin className="text-black" /></span><span>Mymensingh</span></h2>
                                
                            </div>
                            <p className="text-gray-500 pt-2 pb-5">Check the available area for the Mymensingh Region</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {mymensinghAreas.map((mymensingh) => (
                                <div key={mymensingh} className="bg-white p-4 py-10 rounded-lg shadow-lg flex items-center justify-center gap-2">
                                    <span><FiMapPin className="text-[#3761fa]" /></span>
                                    <span className="text-lg font-medium text-gray-800">{mymensingh}</span>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CoverageDM
