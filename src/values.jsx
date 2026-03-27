function Values(){
    return(
        <div className="bg-[#0B1F3A] flex flex-col items-center text-gray-700 p-6 bg-cover py-10">
            <h1 className="flex sans-font items-center gap-4 justify-center text-[#8c744f] text-center"><hr className="w-6"/>Our Values <hr className="w-6"/></h1>
            <p className="text-center text-3xl serif-font text-gray-300">We are committed to providing exceptional service and unforgettable experiences.</p>
            <div>
                <div className="flex flex-col md:flex-row gap-10 mt-10">
                    <div className="flex flex-col w- items-center gap-4">
                         <span className="p-6 text-4xl bg-amber-100 rounded-full">🏆</span>
                        <h3 className="text-xl md:text-2xl text-[#8c744f]">Exceptional Service</h3>
                        <p className="text-center w-80 text-sm md:text-base text-gray-300">We prioritize our guests' needs and strive to exceed their expectations.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                         <span className="p-6 text-4xl bg-amber-100 rounded-full">❤️</span>
                        <h3 className="text-xl md:text-2xl text-[#8c744f]">Unmatched Comfort</h3>
                        <p className="text-center w-80 text-sm md:text-base text-gray-300">Our rooms and facilities are designed to provide the utmost comfort and relaxation.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <span className="p-6 text-4xl bg-amber-100 rounded-full">🌟</span>
                        <h3 className="text-xl md:text-2xl text-[#8c744f]">Memorable Experiences</h3>
                        <p className="text-center w-80 text-sm md:text-base text-gray-300">We create unforgettable moments for our guests through personalized service and unique offerings.</p>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Values;