import { Wifi, AirVent, Coffee, Tv, Phone, Projector, SquarePen } from "lucide-react";

function LuxuryRooms({ image, name,amenities,price }) {
    const amenityIcons = {
  "Wi-Fi": Wifi,
  "Air Conditioning": AirVent,
  "Coffee Machine": Coffee,
  "TV": Tv,
  "Conference Phone": Phone,
  "Projector": Projector,
  "Whiteboard": SquarePen,
};
  return (
    <div>
      <div className="relative w-90  shadow-lg rounded-2xl ">
        <img className="w-full h-80" src={image} alt="rooms" />

        <div className="absolute  -mt-40 bg-black/60  h-40 w-full flex flex-col items-center p-2">
        <div className="flex flex-col ">
        <div className="flex flex-col ">

           <span className="text-[#C2A878] serif-font">{name}</span>
            <div className="flex  flex-wrap gap-2 mt-3">
          {amenities.map((amenity, index) => {
               const IconComponent = amenityIcons[amenity];
               return (
            <div  key={index}
             className="flex gap-2   items-center justify-center p-2 rounded-xl bg-black/50 ">
        {IconComponent ? <IconComponent size={12} className="text-gray-400" /> : null}
         <span className="text-[9px] text-gray-400">{amenity}</span>
      </div>
    );
  })}
  </div>
         </div>
        <p className="text-gray-400 serif-font text-2xl">${price} <span className="text-[12px] text-[#C2A878]">/night</span></p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LuxuryRooms;