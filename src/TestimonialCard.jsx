function TestimonialCard(){
    return(
        <div className="p-8 w-80 bg-white/5 rounded-sm border border-gray-700 shadow-md">
            <div className="flex justify-between">
                <p className="text-gray-600 sans-font text-sm">2 Mar, 2023</p>
                <span className="text-[#8c744f]">★★★★★</span>
            </div>
            <div className="pt-8">
                <i className="text-sm text-gray-200 serif-font">    The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely
                     that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a 
                      marketing professor),</i>
            </div>
           
                <div className="flex pt-4 gap-2 items-center">
                    
                    <p className="flex text-gray-600 sans-font items-center text-sm gap-2"><hr className="w-6"/>ANTHONY BRUFF</p>
                </div>
                
            
        </div>
    )
}
export default TestimonialCard;