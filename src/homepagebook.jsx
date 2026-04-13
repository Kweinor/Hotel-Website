import { IoLocationSharp } from "react-icons/io5";
import { RiHotelFill } from "react-icons/ri";
import { IoCalendarClear } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function BookAtHome() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomType: "Standard",
    persons: "01",
    checkIn: "",
    checkOut: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  return (
    <div className="bg-white z-1 -mt-30 shadow hidden md:flex justify-between px-8 py-4 h-20 w-250">
      <div className="flex flex-col justify-center">
        <span className="text-center flex items-center gap-2">
          <RiHotelFill className="text-gray-700" /> Room type
        </span>
        <select name="roomType" value={formData.roomType} onChange={handleChange}>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
        </select>
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-center flex items-center gap-2">
          <IoLocationSharp className="text-gray-700" /> Person
        </span>
        <select name="persons" value={formData.persons} onChange={handleChange}>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
        </select>
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-center flex items-center gap-2">
          <IoCalendarClear className="text-gray-700" /> Check in
        </span>
        <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-center flex items-center gap-2">
          <IoCalendarClear className="text-gray-700" /> Check out
        </span>
        <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
      </div>

      <div className="flex flex-col justify-center">
        <button
          className="py-2 px-4 items-center bg-gray-700 text-white"
          type="button"
          onClick={() => navigate('/signin')}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default BookAtHome;
