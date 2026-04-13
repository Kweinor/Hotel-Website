import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DashboardCard from "./DashhboardCard";
import EditItem from "./EditReservation";
import { Delete, Pencil, Search, Trash } from "lucide-react";
import DeleteReservation from "./DeleteReservation";
import SearchComponent from "./SearchReservation";


function Guest() {

      const [openEdit, setOpenEdit] = useState(false);
      const [selectedRoom, setSelectedRoom] = useState(null);
      const [opendelete, setOpenDelete] = useState(false);
      const [reservationToDelete, setReservationToDelete] = useState(null);




    const{data: reservations =[], isLoading, error} = useQuery({
        queryKey:["reservations"],
        queryFn: async ()=>{
            const res =  await fetch("http://localhost:3000/api/v1/reservations")
            if (!res.ok) throw new Error("Failed to fetch")
            const result =  await res.json()
        return result.data.reservations
        }
    });
   
 const {data: Rooms = []} = useQuery({
     queryKey:["Rooms"],
     queryFn: async()=>{
        const res = await fetch("http://localhost:3000/api/v1/rooms");
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        return result.data.Rooms;
     }
 })


function getRoomPrice(roomName) {
  const room = Rooms.find(r => r.name === roomName || r._id === roomName);
  return room ? room.price : 0;
}

function calculateAmount(reservation) {
  const checkIn = new Date(reservation.checkIn);
  const checkOut = new Date(reservation.checkOut);
  const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
  const pricePerNight = getRoomPrice(reservation.room);
  const daysStay = nights > 0 ? nights : 1; // Ensure at least 1 day charge
  return daysStay * pricePerNight;
}

// Total guests = number of reservations


// Checked-in guests
const totalCheckedIn = reservations.filter(r => r.status === "checked-in").length;

// Arriving today
const today = new Date().toISOString().split("T")[0];
const arrivingToday = reservations.filter(r => r.checkIn.split("T")[0] === today).length;

// Departing today
const departingToday = reservations.filter(r => r.checkOut.split("T")[0] === today).length;


  return (
    <div className=" flex flex-col justify-center Geist-font">
      <div className="flex pt-6 gap-10">
        <DashboardCard header={"Total Guests"} content={reservations.length} color={"bg-blue-500"} />
        <DashboardCard header={"CHECKED IN"} content={totalCheckedIn} color={"bg-green-500"} />
        <DashboardCard header={"ARRIVING TODAY"} content={arrivingToday} color={"bg-yellow-500"} />
        <DashboardCard header={"DEPARTING TODAY"} content={departingToday} color={"bg-red-500"} />
       
        </div>
     <SearchComponent/>
  <div className="overflow-x-auto mt-10 bg-white">
                    <table className="text-sm md:text-md divide-y min-w-[1000px]  divide-gray-200">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 text-left  font-medium">Name</th>
                            <th className="px-6 py-3 text-left  font-medium">Phone</th>
                            <th className="px-6 py-3 text-left  font-medium ">Room</th>
                            <th className="px-6 py-3 text-left  font-medium ">Price </th>
                            <th className="px-6 py-3 text-left  font-medium ">Checkin</th>
                            <th className="px-6 py-3 text-left  font-medium ">Checkout</th>
                            <th className="px-6 py-3 text-left  font-medium ">status</th>
                            <th className="px-6 py-3 text-left  font-medium ">Action</th>
                        </tr>
                        </thead>
                      <tbody className="divide-y divide-gray-200">
  {isLoading ? (
    <tr>
      <td colSpan="7" className="text-center py-4">Loading...</td>
    </tr>
  ) : error ? (
    <tr>
      <td colSpan="7" className="text-center py-4">Fail to fetch</td>
    </tr>
  ) : (
    reservations.map((reservation) => (
      <tr key={reservation._id} className="px-6 py-3 text-left font-medium text-gray-500">
        <td className="px-6 py-4 flex flex-col">{reservation.guestName} <span className="text-[10px]"> {reservation.email}</span></td>
        <td className="px-6 py-4">{reservation.phoneNumber}</td>
        <td className="px-6 py-4">{reservation.room}</td>
        <td className="px-6 py-4">${calculateAmount(reservation).toFixed(2)}</td>
        <td className="px-6 py-4">{reservation.checkIn.split("T")[0]}</td>
        <td className="px-6 py-4">{reservation.checkOut.split("T")[0]}</td>
        <td className="px-6 py-4">{reservation.status}</td>
        <td className="flex gap-4 items-center px-6 py-4">
           <button onClick={() => {setSelectedRoom(reservation); setOpenEdit(true)}}>  <Pencil size={18} color="blue" /></button>
                                <button onClick={() => { setReservationToDelete(reservation._id); setOpenDelete(true); } } > <Trash size={18} color="red" /> </button>

        </td>
      </tr>
    ))
  )}
</tbody>

                    </table>
                    </div>
                     <EditItem open={openEdit} setOpen={setOpenEdit} reservation={selectedRoom} onClose={() => { setOpenEdit(false); setSelectedRoom(null); }} />
                     <DeleteReservation open={opendelete} onClose={() => { setOpenDelete(false); setReservationToDelete(null); }} reservationId={reservationToDelete} />
        </div>
      
     
    
  );
}
export default Guest;