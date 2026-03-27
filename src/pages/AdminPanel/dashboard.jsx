import { NotebookPen } from 'lucide-react';
import { MdOutlineBedroomParent } from "react-icons/md";
import MobileNavbar from "../../MobileNavbar"
import { useState, useEffect } from "react";
import DashboardCard from "../../DashhboardCard";
import WeeklyChart from "../../WeeklyChart";
import ReservationToday from "../../Recent";



function Dashboard(){

       const [rooms,setRooms]=useState([])
   // const [loading, setLoading] = useState(true);
       const [dailyReservations, setDailyReservations] = useState([]);

 useEffect(() => {
  fetch("http://localhost:3000/api/v1/rooms")
    .then((res) => res.json())
    .then((data) => {
      setRooms(data.data.Rooms);
    //  setLoading(false);   // stop skeleton
    })
    .catch((err) => {
      console.log("Fetch error:", err);
      
    });
}, []);
 useEffect(() => {
  fetch("http://localhost:3000/api/v1/reservations/daily")
    .then((res) => res.json())
    .then((data) => {
      setDailyReservations(data.data.reservations);
    //  setLoading(false);   // stop skeleton
    })
    .catch((err) => {
      console.log("Fetch error:", err);
      
    });
}, []);


// Build a lookup map of room prices
const roomPriceMap = rooms.reduce((map, room) => {
  map[room._id] = room.price; // assumes room schema has "price"
  return map;
}, {});

// Calculate total revenue for today's reservations
const todaysRevenue = dailyReservations.reduce((sum, reservation) => {
  const checkInDate = new Date(reservation.checkIn);
  const checkOutDate = new Date(reservation.checkOut);

  // Number of nights stayed
  const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

  // Find the room price from the lookup map
  const roomPrice = roomPriceMap[reservation.room] || 0;

  // Add to total
  return sum + roomPrice * nights;
}, 0);


       return(
        <div className="Geist-font">
          <MobileNavbar/>
             <div className="flex flex-col mt-10 gap-3 md:flex-row lg:gap-10 ">
                <DashboardCard color={"bg-amber-950"} icon={<MdOutlineBedroomParent size={15}/>} header={ "TOTAL ROOMS"} content={rooms.length}/>
                <DashboardCard color={"bg-purple-300"} icon={<NotebookPen />} header={"TODAY'S RESERVATIONS"} content={dailyReservations.length}/>
                <DashboardCard color={"bg-green-300"} icon={<MdOutlineBedroomParent />} header={"TODAY'S CHECKINS/OUTS"} content={"2"}/>
                <DashboardCard color={"bg-blue-400"} icon={<MdOutlineBedroomParent />} header={"TODAY'S REVENUE"} content={`$${todaysRevenue}`}/>
                </div>
                <div className="flex flex-col md:flex-row mt-16 gap-10">
                <div className=" shadow-sm py-10 bg-white px-5 w-120 border border-gray-300 rounded-sm">
        <WeeklyChart  />
         </div>
         <div className='bg-white'>
          <ReservationToday dailyReservations={dailyReservations}/>
         </div>
        </div>
             <div className="mt-8">
                    <table className=" divide-y min-w-full divide-gray-200">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 text-left  font-medium">Name</th>
                            <th className="px-6 py-3 text-left  font-medium ">Category</th>
                            <th className="px-6 py-3 text-left  font-medium ">Status</th>
                            <th className="px-6 py-3 text-left  font-medium ">Action</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                           
                         {/*   {rooms.map((room)=>{
                                return (
                              <tr key={room._id} className="px-6 py-3 text-left  font-medium text-gray-500">
                                <td className="px-6 py-4 text-left   text-gray-500">{"Room"}</td>
                                <td className="px-6 py-4 text-left   text-gray-500">${"Price"}</td>
                                <td className="px-6 py-4 text-left text-gray-500">
                                     <span className={`px-2 py-1 text-sm rounded-xl ${room.status === "Booked" ? "bg-blue-400 text-white" : room.status === "Available" ? "bg-green-300  text-white" : "bg-purple-300 text-white"}`}>
                                     {room.status}
                                     </span>
                                </td>

                                <td className="flex gap-4 items-center px-6 py-4 text-left text-gray-500">
                                    <Pencil size={18} color="blue" />
                                    <Trash size={18} color="red" /> 
                               </td>
                              </tr>)
                            })}
                           */}
                        </tbody>
                    </table>
                </div>
                </div>
       )
}
export default Dashboard;