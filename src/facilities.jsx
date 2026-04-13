import { FaSwimmer } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { IoGameController } from "react-icons/io5";
import { FaParking } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import { MdOutlineLocalLaundryService } from "react-icons/md";


import FacilityCard from "./facilitiesCard";



function Facilities(){


       return (
           <div className=" bg-gray-50 flex mt-14 py-10 items-center flex-col justify-center">
                <h1 className="flex sans-font items-center gap-4` justify-center text-[#8c744f] text-center"><hr className="w-6"/>Our Facilities <hr className="w-6"/></h1>
                <p className="text-center text-3xl serif-font text-[#081628]">We offer modern (5 star) hotel facilities for your comfort.</p>
           <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-20 p-10"> 
          
        <FacilityCard FacilityName={"Swimming Pool"} icon={<FaSwimmer size={24} md:size={40} />}/>
        <FacilityCard FacilityName={"Free WiFi"}     icon={<FaWifi size={24} md:size={40} />}/>
        <FacilityCard FacilityName={"Fitness Center"} icon={<FaDumbbell size={24} md:size={40} />}/>
        <FacilityCard FacilityName={"24/7 Electricity"} icon={<HiLightBulb size={24} md:size={40} />}/>
        <FacilityCard FacilityName={"Parking"}         icon={<FaParking size={24} md:size={40} />}/>
        <FacilityCard FacilityName={"Gaming Zone"} icon={<IoGameController size={24} md:size={40} />}/>
        <FacilityCard FacilityName={"Restaurant & Bar"}  icon={<GiBarbecue size={24} md:size={40} />}/>
        <FacilityCard FacilityName={"Laundry Service"}    icon={<MdOutlineLocalLaundryService size={24} md:size={40} />}/>      
           </div>
           </div>
       )
   }
   export default Facilities;   
