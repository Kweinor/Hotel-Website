import TestimonialCard from "./TestimonialCard";

function Testimonies(){
    return(
        <div className="py-30 flex bg-[#0B1F3A] flex-col justify-center px-20">
            <h1 className="text-center sans-font text-[#8c744f] flex justify-center items-center gap-4 "><hr className="w-12"/>GUEST STORY <hr className="w-12"/></h1>
            <p className="text-center serif-font text-gray-300 text-3xl">What Our Customers Say About Us</p>
            <div className="flex justify-center pt-6 gap-10">
                <TestimonialCard/>
                <TestimonialCard/>
                <TestimonialCard/>
            </div>
        </div>
    )
}
export default Testimonies;