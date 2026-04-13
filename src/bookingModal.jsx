import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function BookingModal({ isOpen, onClose, selectedRoom}) {
 const [rooms, setRooms] = useState([])

useEffect(()=>{
    fetch("http://localhost:3000/api/v1/rooms")
    .then((res)=>res.json())
    .then((data)=> setRooms(data.data.Rooms))
    
},[])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  if (!isOpen) return null;




  const submitForm = async (data) => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        room: selectedRoom?.name
      }),
    });

    const result = await response.json();

    if (!response.ok) throw new Error(result.message || "Failed to create reservation"); 
     toast.success("Reservation done successfully 🎉" + "" + "It will be confirmed shortly");

    reset();
    onClose();
  } catch (error) {
    console.error("Error creating reservation:", error);

    // ❌ ERROR TOAST
    toast.error(error.message || "Something went wrong")
  }
};
  return (
    <div className="fixed pt-50 md:pt-0 overflow-y-auto md:overflow-none inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Book a Room</h2>
          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* MAIN GRID (FORM + ROOM CARD) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

             {/* ROOM CARD SECTION */}
          <div className="border rounded-xl overflow-hidden shadow-md bg-gray-50">

            {/* Image */}
            <img
              src={
    selectedRoom?.images?.[0]
      ? `http://localhost:3000/${selectedRoom.images[0]}`
      : "https://via.placeholder.com/400"
  }
              alt="Room"
              className="w-full h-48 object-cover"
            />

            {/* Room Details */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{selectedRoom?.name || "Room Name"}</h3>
              <p className="text-sm text-gray-600">{selectedRoom?.description || "Room details go here."}</p>

              <p className="text-blue-600 font-semibold text-lg mt-2">
                ${selectedRoom?.price} / day
              </p>
            </div>

          </div>

          {/* FORM SECTION */}
          <form onSubmit={handleSubmit(submitForm)} className="space-y-4">

            {/* Guest */}
            <div>
              <label className="block mb-1 font-medium">Guest Name</label>
              <input
                {...register("guestName", { required: "Guest name is required" })}
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.guestName && <p className="text-red-600 text-sm">{errors.guestName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>

            {/* Contact */}
            <div>
              <label className="block mb-1 font-medium">Contact</label>
              <input
                {...register("phoneNumber", { required: "Contact is required" })}
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.phoneNumber && <p className="text-red-600 text-sm">{errors.phoneNumber.message}</p>}
            </div>
             <div className="flex justify-between">
            {/* Country */}
            <div>
              <label className="block mb-1 font-medium">Country</label>
              <input
                {...register("country", { required: "Country is required" })}
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.country && <p className="text-red-600 text-sm">{errors.country.message}</p>}
            </div>
            {/* City */}
            <div>
              <label className="block mb-1 font-medium">City</label>
              <input
                {...register("city", { required: "City is required" })}
                className="w-full border rounded-md px-3 py-2"
              />
              {errors.city && <p className="text-red-600 text-sm">{errors.city.message}</p>}
            </div>
            </div>
            {/* Dates */}
            <div className="flex gap-4">
              <div className="w-full">
                <label className="block mb-1 font-medium">Check-In</label>
                <input
                  type="date"
                  {...register("checkIn", { required: "Check-in date is required" })}
                  className="w-full border rounded-md px-3 py-2"
                />
                {errors.checkIn && <p className="text-red-600 text-sm">{errors.checkIn.message}</p>}
              </div>

              <div className="w-full">
                <label className="block mb-1 font-medium">Check-Out</label>
                <input
                  type="date"
                  {...register("checkOut", { required: "Check-out date is required" })}
                  className="w-full border rounded-md px-3 py-2"
                />
                {errors.checkOut && <p className="text-red-600 text-sm">{errors.checkOut.message}</p>}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-md border"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
              
                Confirm Booking
              </button>
            </div>

          </form>

         

        </div>
      </div>
    </div>
  );
}

export default BookingModal;
