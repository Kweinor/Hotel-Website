import { Wifi, AirVent, Coffee, Tv, Phone, Projector, SquarePen } from "lucide-react";

const amenityIcons = {
  "Wi-Fi": Wifi,
  "Air Conditioning": AirVent,
  "Coffee Machine": Coffee,
  "TV": Tv,
  "Conference Phone": Phone,
  "Projector": Projector,
  "Whiteboard": SquarePen,
};

function RoomsCard({roomName, roomPrice, status, OnClick, amenities,picture, description}) {
    return(
        <div className=" my-6  rounded-sm border  border-gray-200 w-80 bg-white" onClick={OnClick}>     
          <div>

           <img className="rounded-t-sm h-40 w-full" src={`http://localhost:3000/${picture}`} alt="room" />
           <h5 className="px-5 pt-3 serif-font text-[#0B1F3A] bold text-large">{roomName}</h5>
             <span className="-mt-20 z-20 px-5">{status}</span>
           <p className="px-5 text-gray-600 text-sm">{description}</p>
             <div className="flex pt-3 px-5 justify-between">
              <div className="flex pt-3 px-5 justify-between">
  <div className="flex  flex-wrap pb-5 gap-3 mt-3">
          {amenities.map((amenity, index) => {
            const IconComponent = amenityIcons[amenity];
            return (
              <div
                key={index}
                className="flex items-center gap-2 p-2 rounded-xl bg-gray-100"
              >
                {IconComponent ? <IconComponent size={12} /> : null}
                <span className="text-[9px] text-gray-700">{amenity}</span>
              </div>
            );
          })}
        </div>
      </div>

            
            </div>
         </div>
          <div className=" px-1 pb-4 items-center border-t  border-gray-400 w-full flex justify-between ">
    <div className="px-5">
<h6 className="text-[12px] text-">PER NIGHT FROM</h6>
    <span className="flex items-center ">{roomPrice} <p className="text-[12px]">/night</p></span>
    </div>
              
        <div className="px-4 py-3   flex justify-end">
          <button className="text-amber-50 px-3 py-1.5 bg-[#0B1F3A] ">Book Now</button>
        </div>
        </div>
       </div>
    )
}
export default RoomsCard;