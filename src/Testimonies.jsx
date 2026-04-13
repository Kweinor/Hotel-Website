import TestimonialCard from "./TestimonialCard";
function Testimonies() {
  return (
    <div className="py-20 bg-[#0B1F3A]">
      
      <div className="px-6 md:px-20">
        
        <h1 className="text-center text-[#8c744f] flex justify-center items-center gap-4 text-sm tracking-widest">
          <hr className="w-12 border-gray-600" />
          GUEST STORY
          <hr className="w-12 border-gray-600" />
        </h1>

        <p className="text-center text-gray-300 text-2xl md:text-3xl mt-4">
          What Our Customers Say About Us
        </p>

      </div>

      {/* Scroll Area */}
     <div className="
  mt-10 
  flex gap-6 
  overflow-x-auto md:overflow-visible 
  snap-x snap-mandatory md:snap-none 
  px-6 md:px-20 
  justify-start md:justify-center
  scrollbar-hide
">
  <TestimonialCard className="snap-center shrink-0" />
  <TestimonialCard className="snap-center shrink-0" />
  <TestimonialCard className="snap-center shrink-0" />
</div>

    </div>
  );
}
export default Testimonies;