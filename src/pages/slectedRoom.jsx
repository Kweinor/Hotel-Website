import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BookingModal from "../bookingModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/rooms/${id}`)
      .then((res) => res.json())
      .then((data) => setRoom(data.data.room));
  }, [id]);

{console.log(room?.images)}


  if (!room) return <p>Loading...</p>;


  const handleBooking = (data) => {
    console.log("Booking:", data);

    // Example: send to API
    // fetch('/api/book-room', { method: 'POST', body: JSON.stringify(data) })

    setOpen(false);
  };

    return(
        <div className="h-full">
            <div className="flex flex-col md:flex-row flex-6 h-full p-10">
              <div className="flex flex-col flex-4">
               <figure>
                <img src={`http://localhost:3000/${room.images[0]}`} alt={room.name} />

               </figure>
               <div className="grid grid-cols-4 gap-2 mt-4">
               <figure>
                <img src={`http://localhost:3000/${room.images[1]}`} alt={room.name} />
               </figure>
               <figure>
            <img src={`http://localhost:3000/${room.images[1]}`} alt={room.name} />
               </figure>
               <figure>
            <img src={`http://localhost:3000/${room.images[1]}`} alt={room.name} />
               </figure>
               <figure>
            <img src={`http://localhost:3000/${room.images[1]}`} alt={room.name} />
               </figure>
               
               </div>
              </div>
                <div className="flex flex-2 flex-col p-6">
                    <h2 className="text-4xl mb-4 bold">{room.name}</h2>
                    <p className="mb-4">{room.description}</p>
                    <p className="mb-4">Capacity: {room.capacity} persons</p>
                    <p className="mb-4">Size: {room.size} sqft</p>
                   <div className="grid grid-cols-2 gap-3 mb-4">
                            {room.amenities.map((item, index) => (
                                 <div key={index} className="flex items-center gap-2">
                                   <span className="text-green-600 text-lg">✓</span>
                                      <p>{item}</p>
                                  </div>
                                    ))}
                     </div>
                    <span className="text-2xl mb-4">${room.price} / night</span>
                    <button  onClick={() => setOpen(true)} className="bg-blue-400 px-4 py-2 rounded-sm mt-4 w-32">Book Now</button>
                <BookingModal
                selectedRoom={room}
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={handleBooking}
      />
                </div>
            </div>
             <ToastContainer position="top-right" autoClose={10000} />
        </div>
    )

}
export default RoomDetails;