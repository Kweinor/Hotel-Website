import { NotebookPen, Pencil, Trash } from 'lucide-react';
import { MdOutlineBedroomParent } from "react-icons/md";
import MobileNavbar from "../../MobileNavbar"
import { useState, useEffect } from "react";
import DashboardCard from "../../DashhboardCard";
import WeeklyChart from "../../WeeklyChart";
import ReservationToday from "../../Recent";

function Dashboard() {
  const [rooms, setRooms] = useState([]);
  const [dailyReservations, setDailyReservations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data.data.Rooms))
      .catch((err) => console.log("Room fetch error:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/reservations/daily")
      .then((res) => res.json())
      .then((data) => {
        // Double check your console to ensure 'data.data.reservations' is an array
        console.log("Reservations received:", data.data.reservations);
        setDailyReservations(data.data.reservations || []);
      })
      .catch((err) => console.log("Reservation fetch error:", err));
  }, []);

 // 1. Build the lookup map using room NAMES as keys
const roomPriceMap = rooms.reduce((map, room) => {
  // We use room.name because your reservation data uses the name string
  if (room.name) {
    map[room.name] = Number(room.price) || 0;
  }
  return map;
}, {});

// 2. Calculate Revenue
const todaysRevenue = dailyReservations.reduce((sum, reservation) => {
  // Look up price using the room name string (e.g., "Royal Suite")
  const roomPrice = roomPriceMap[reservation.room] || 0;

  const checkIn = new Date(reservation.checkIn);
  const checkOut = new Date(reservation.checkOut);

  // Calculate nights
  const diffTime = Math.abs(checkOut - checkIn);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // If check-in and check-out are the same day, count as 1 night
  const nights = diffDays === 0 ? 1 : diffDays;

  return sum + (roomPrice * nights);
}, 0);
  return (
    <div className="Geist-font">
      <MobileNavbar />
      
      <div className="flex flex-col mt-10 gap-3 md:flex-row lg:gap-10">
        <DashboardCard 
          color="bg-amber-950" 
          icon={<MdOutlineBedroomParent size={15} />} 
          header="TOTAL ROOMS" 
          content={rooms.length} 
        />
        <DashboardCard 
          color="bg-purple-300" 
          icon={<NotebookPen />} 
          header="TODAY'S RESERVATIONS" 
          content={dailyReservations.length} 
        />
        <DashboardCard 
          color="bg-green-300" 
          icon={<MdOutlineBedroomParent />} 
          header="TODAY'S CHECKINS/OUTS" 
          content="2" 
        />
        <DashboardCard 
          color="bg-blue-400" 
          icon={<MdOutlineBedroomParent />} 
          header="TODAY'S REVENUE" 
          content={`$${todaysRevenue.toLocaleString()}`} 
        />
      </div>

      <div className="flex flex-col md:flex-row mt-16 gap-10">
        <div className="shadow-sm py-10 bg-white px-5 w-120 border border-gray-300 rounded-sm">
          <WeeklyChart />
        </div>
        <div className="bg-white">
          <ReservationToday />
        </div>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Name</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Price</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Status</th>
              <th className="px-6 py-3 text-left font-medium text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {rooms.map((room) => (
              <tr key={room._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-gray-600">{room.name || "Room"}</td>
                <td className="px-6 py-4 text-gray-600">${room.price}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs rounded-full text-white ${
                    room.status === "Booked" ? "bg-blue-400" : 
                    room.status === "Available" ? "bg-green-400" : "bg-purple-400"
                  }`}>
                    {room.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-4">
                  <Pencil size={18} className="text-blue-500 cursor-pointer" />
                  <Trash size={18} className="text-red-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;