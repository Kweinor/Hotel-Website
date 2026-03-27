import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DashboardCard from "./DashhboardCard";
import EditItem from "./EditReservation";


function Guest() {

      const [openEdit, setOpenEdit] = useState(false);
      const [selectedRoom, setSelectedRoom] = useState(null);
    const{data: reservations =[], isLoading, error} = useQuery({
        queryKey:["reservations"],
        queryFn: async ()=>{
            const res =  await fetch("http://localhost:3000/api/v1/reservations")
            if (!res.ok) throw new Error("Failed to fetch")
            const result = res.json()
        return result.data.reservations
        }
    })
  return (
    <div className=" flex flex-col justify-center">
      <div className="flex pt-6 gap-10">
        <DashboardCard header={"Total Guests"} content={120} color={"bg-blue-500"} />
        <DashboardCard header={"CHECKED IN"} content={80} color={"bg-green-500"} />
        <DashboardCard header={"ARRIVING TODAY"} content={30} color={"bg-yellow-500"} />
        <DashboardCard header={"DEPARTING TODAY"} content={10} color={"bg-red-500"} />
       
        </div>
     
  <div className="overflow-x-auto">
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
        <td className="px-6 py-4">{reservation.guestName}</td>
        <td className="px-6 py-4">{reservation.room}</td>
        <td className="px-6 py-4">{reservation.price}</td>
        <td className="px-6 py-4">{reservation.checkIn.split("T")[0]}</td>
        <td className="px-6 py-4">{reservation.checkOut.split("T")[0]}</td>
        <td className="px-6 py-4">{reservation.status}</td>
        <td className="flex gap-4 items-center px-6 py-4">
           <button onClick={() => {setSelectedRoom(reservation); setOpenEdit(true)}}>  <Pencil size={18} color="blue" /></button>
                                <button > <Trash size={18} color="red" /> </button>

        </td>
      </tr>
    ))
  )}
</tbody>

                    </table>
                    </div>
                     <EditItem open={openEdit} setOpen={setOpenEdit} reservation={selectedRoom}/>
        </div>
      
     
    
  );
}
export default Guest;