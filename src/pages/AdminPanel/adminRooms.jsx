import { useState,  } from "react";
import DashboardCard from "../../DashhboardCard";
import { Pencil, Trash } from "lucide-react";
import MobileNavbar from "../../MobileNavbar";
import DeleteModal from "../../DeleteModal";
import { useQuery} from '@tanstack/react-query';
import EditRoom from "../../EditRoom";
import AddRoom from "../../AddRoom";

function AdminRooms(){

       const [opendelete, setOpenDelete] = useState(false);
       const [roomToDelete, setRoomToDelete] = useState(null);
       const [openEdit, setOpenEdit] = useState(false);
         const [openAdd, setOpenAdd] = useState(false);

       const [selectedRoom, setSelectedRoom] = useState(null);
    
   // const [loading, setLoading] = useState(true);
   
 const {data: Rooms = [], isLoading, error} = useQuery({
     queryKey:["Rooms"],
     queryFn: async()=>{
        const res = await fetch("http://localhost:3000/api/v1/rooms");
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        return result.data.Rooms;
     }
 })
{/* useEffect(() => {
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
*/}
  
const bookedRooms = Rooms.filter(room => room.status === "Occupied").length;
const availableRooms = Rooms.filter(room => room.status === "Available").length;
const maintenanceRooms = Rooms.filter(room => room.status === "Maintenance").length;

       return(
        <div className="overflow-scroll Geist-font">
            <MobileNavbar/>
             <div className="flex flex-col pt-10 md:flex-row gap-4 md:gap-10">
                <DashboardCard header={"Total Rooms"} content={Rooms.length} color={"bg-amber-950"}/>
                <DashboardCard header={"Available Rooms"} content={availableRooms} color={"bg-green-300"}/>
                <DashboardCard header={"Booked Rooms"} content={bookedRooms} color={"bg-blue-400"}/>
                <DashboardCard header={"Maintenance Rooms"} content={maintenanceRooms} color={"bg-purple-300"}/>
                </div>
                     <div className="mt-8 mx-10">
                <div className="flex justify-end">
                    <button className="py-2 px-3 bg-blue-200" onClick={() => setOpenAdd(true)}>
                        Add Facility
                    </button>
                </div>
                <div className="bg-white">
                    <table className=" divide-y min-w-full text-sm md:text-md  divide-gray-200">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 text-left  font-medium">Name</th>
                            <th className="px-6 py-3 text-left  font-medium">Price</th>
                            <th className="px-6 py-3 text-left  font-medium ">Category</th>
                            <th className="px-6 py-3 text-left  font-medium ">Status</th>
                            <th className="px-6 py-3 text-left  font-medium ">Action</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                           
                            {isLoading ? (
                                <tr>
                                <td colSpan={4} className="text-center py-4">
                                    Loading...
                                </td>
                                </tr>
                            ) : error ? (
                                <tr>
                                <td colSpan={4} className="text-center py-4 text-red-500">
                                    Error loading rooms
                                </td>
                                </tr>
                            ) : 
                            Rooms.map((room)=>{
                                return (
                              <tr key={room._id} className="px-6 py-3 text-left  font-medium text-gray-500">
                                <td className="px-6 py-4 text-left   text-gray-500">{room.name}</td>
                                <td className="px-6 py-4 text-left   text-gray-500">${room.price}</td>
                                <td className="px-6 py-4 text-left text-gray-500">
                                     <span className={`px-2 py-1 text-sm rounded-xl ${room.status === "Occupied" ? "bg-blue-400 text-white" : room.status === "Available" ? "bg-green-300  text-white" : "bg-purple-300 text-white"}`}>
                                     {room.status}
                                     </span>
                                </td>

                                <td className="flex gap-4 items-center px-6 py-4 text-left text-gray-500">
                               <button  onClick={() => {setSelectedRoom(room); setOpenEdit(true)}}>   <Pencil size={18} color="blue" /></button>  
                              <button onClick={() => { setRoomToDelete(room._id); setOpenDelete(true); }}> <Trash  size={18} color="red" /> </button>
                               </td>
                              </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <DeleteModal open={opendelete} onClose={() => { setOpenDelete(false); setRoomToDelete(null); }} roomId={roomToDelete}/>
            <EditRoom open={openEdit} room={selectedRoom} onClose={() => { setOpenEdit(false); setSelectedRoom(null); }} /> 
                <AddRoom 
  open={openAdd} 
  onClose={() => setOpenAdd(false)} 
/>

        </div>
       )
}
export default AdminRooms;