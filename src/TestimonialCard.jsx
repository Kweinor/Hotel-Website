function TestimonialCard({ className = "" }) {
  return (
    <div
      className={`w-[320px] shrink-0 p-8 bg-white/5 rounded-sm border border-gray-700 shadow-md ${className}`}
    >
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">2 Mar, 2023</p>
        <span className="text-[#8c744f]">★★★★★</span>
      </div>

      <div className="pt-6">
        <p className="text-gray-300 text-sm leading-relaxed italic">
          The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely.
        </p>
      </div>

      <div className="flex pt-6 gap-2 items-center">
        <div className="w-6 h-[1px] bg-gray-500"></div>
        <p className="text-gray-400 text-xs tracking-wider">
          ANTHONY BRUFF
        </p>
      </div>
    </div>
  );
}
export default TestimonialCard;