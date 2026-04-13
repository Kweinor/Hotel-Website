//import { useState, useEffect } from "react"; 
import { Pencil, Trash } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import DashboardCard from "../../DashhboardCard";
import EditItem from "../../EditReservation";
import { useState } from "react";
import DeleteReservation from "../../DeleteReservation";

function AdminReservation() {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [opendelete, setOpenDelete] = useState(false);
  const [reservationToDelete, setReservationToDelete] = useState(null);

    
const {data: reservations = [], isLoading, error} = useQuery({
   queryKey: ["reservations"],
   queryFn: async ()=>{
    const res = await fetch("http://localhost:3000/api/v1/reservations")
   if (!res.ok) throw new Error("Fail to fetch")
    const result = await res.json()
     return result.data.reservations;
   }
})

   
 const {data: Rooms = []} = useQuery({
     queryKey:["Rooms"],
     queryFn: async()=>{
        const res = await fetch("http://localhost:3000/api/v1/rooms");
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        return result.data.Rooms;
     }
 })
 {/*
 useEffect(() => {
        fetch("http://localhost:3000/api/v1/reservations")
            .then((res) => res.json())
            .then((data) => setReservations(data.data.reservations))
            .catch((err) => console.log("Fetch error:", err));
    }, []);
 */}  
  function getAutomatedStatus(reservations) {
  const today = new Date();
  const checkInDate = new Date(reservations.checkIn);
  const checkOutDate = new Date(reservations.checkOut);

  if (reservations.status === "cancelled") {
    return "cancelled";
  }

  if (today < checkInDate) {
    return "upcoming"; // guest hasn’t arrived yet
  }

  if (today >= checkInDate && today <= checkOutDate) {
    return "checked-in"; // guest is currently staying
  }

  if (today > checkOutDate) {
    return "checked-out"; // guest has already left
  }

  return reservations.status || "unknown";
}
 const totalReservations = reservations.length;
  const totalCheckin = reservations.filter(
    (r) => getAutomatedStatus(r) === "checked-in"
  ).length;
  const totalCheckout = reservations.filter(
    (r) => getAutomatedStatus(r) === "checked-out"
  ).length;
  const totalCancellations = reservations.filter(
    (r) => getAutomatedStatus(r) === "cancelled"
  ).length;

function formatCreatedAt(createdAt) {
  if (!createdAt) return "N/A";

  const createdDate = new Date(createdAt);
  const today = new Date();

  const isToday =
    createdDate.getDate() === today.getDate() &&
    createdDate.getMonth() === today.getMonth() &&
    createdDate.getFullYear() === today.getFullYear();

  return isToday
    ? createdDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : createdDate.toLocaleDateString();
}

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






  return (
    <div className="flex flex-col justify-center Geist-font">
      <h1>Admin Reservation Page</h1>
      <div className="flex flex-col pt-10 md:flex-row gap-4 md:gap-10">
                <DashboardCard header={"TOTAL RESERVATIONS"} content={totalReservations} color={"bg-amber-950"}/>
                <DashboardCard header={"TOTAL CHECKIN"} content={totalCheckin} color={"bg-green-300"}/>
                <DashboardCard header={"TOTAL CHECKOUT"} content={totalCheckout} color={"bg-blue-400"}/>
                <DashboardCard header={"TOTAL CANCELLATIONS"} content={totalCancellations} color={"bg-purple-300"}/>
                </div>
      <div className="mt-5">
                    <div className="overflow-x-auto bg-white">
                    <table className="text-sm md:text-md divide-y min-w-[1000px]  divide-gray-200">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 text-left  font-medium">Date</th>
                            <th className="px-6 py-3 text-left  font-medium">Name</th>
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

        <td className="px-6 py-4">{formatCreatedAt(reservation.createdAt)}</td>
        <td className="px-6 py-4">{reservation.guestName}</td>
        <td className="px-6 py-4">{reservation.room}</td>
       { <td className="px-6 py-4">{`$${calculateAmount(reservation).toFixed(2)}`}</td>}
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
                </div>
                <EditItem open={openEdit} setOpen={setOpenEdit} reservation={selectedRoom}/>
              <DeleteReservation open={opendelete} onClose={() => { setOpenDelete(false); setReservationToDelete(null); }} reservationId={reservationToDelete}/>

    </div>
  );
}
export default AdminReservation;