import { Link } from "react-router-dom"

function Sidebar(){
    return(
        <div className="h-full sticky hidden md:flex px-8 flex-col gap-10 pt-10 bg-[#1a2744] text-orange-50 w-full ">
         <div className="flex flex-col items-center border-b border-gray-700 pb-10">
            <h1 className="text-2xl font-bold">ADEHYEMBA</h1>
            <span className="text-sm text-gray-400">GUEST HOUSE</span>
            <p className="text-[9px] text-gray-400">Admin Panel</p>
         </div>
          <div className="flex flex-col gap-6 text-gray-400">
            <Link className="pointer hover:bg-[#2a9d8f] hover:text-white p-2 rounded" to='/admin/'> Dashboard</Link>
           
          
            <Link className="pointer hover:bg-[#2a9d8f] hover:text-white p-2 rounded" to='/admin/rooms'> Rooms</Link>
          
          
            <Link className="pointer hover:bg-[#2a9d8f] hover:text-white p-2 rounded" to='/admin/guests'>Guest</Link>
            
          
            <Link className="pointer hover:bg-[#2a9d8f] hover:text-white p-2 rounded" to='/admin/reservations'> Reservation</Link>
            
            <Link className="pointer hover:bg-[#2a9d8f] hover:text-white p-2 rounded" to='/admin/staff'> Staff</Link>
          
         </div> 
        </div>
    )
}
export default Sidebar;