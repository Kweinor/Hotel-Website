import { IoLocationSharp } from "react-icons/io5";
import { RiHotelFill } from "react-icons/ri";
import { IoCalendarClear } from "react-icons/io5";
import Footer from "./Footer";

function BookAtHome(){
    return(
        <div className="bg-white z-1 -mt-30 shadow hidden md:flex justify-between px-8 py-4 h-20 w-250">
          <div className="flex flex-col justify-center">
            <span className="text-center flex items-center gap-2"> <RiHotelFill className="text-gray-700" /> Room type</span>
            <select name="checkin" id="checkin">
                <option value="standard">Standard</option>
                <option value="standard">Standard</option>
                <option value="standard">Standard</option>
                <option value="standard">Standard</option>
                <option value="standard">Standard</option>
                <option value="standard">Standard</option>
            </select>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-center flex items-center gap-2"><IoLocationSharp className="text-gray-700"/> Person</span>
               <select name="checkin" id="checkin">
                <option value="01">01</option>
                <option value="02">02</option>
               
            </select>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-center flex items-center gap-2"><IoCalendarClear className="text-gray-700"/> Check in</span>
            <input type="date" name="checkout" id="checkout" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-center flex items-center gap-2"><IoCalendarClear className="text-gray-700"/> Check out</span>
            <input type="date" name="checkout" id="checkout" />
           
          </div>
          <div className="flex flex-col justify-center" >
            <button className="py-2 px-4 items-center bg-gray-700 text-white" type="button">Book Now</button>
          </div>
         
        </div>
    )
}
export default BookAtHome;