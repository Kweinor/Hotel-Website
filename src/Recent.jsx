
import { useNavigate } from "react-router-dom";


function ReservationToday({dailyReservations}) {
    const navigate = useNavigate();
    return(
        <div className="w-140 h-100 p-4 border rounded-sm shadow-sm border-gray-300">
            <div className="flex justify-between items-center mb-4">
            <div  >
            <h2 className="sans-font text-sm">Recent Reservation</h2>
            <p className="sans-font text-sm">Today's activities</p>
            </div>
            <button onClick={() => navigate("/admin/reservations")} className=" border border-gray-300 text-gray-700 py-2 px-4 rounded">
                View All
            </button>
            </div>
            <div>
                <table className=" divide-y min-w-full divide-gray-200">
                    <thead className="divide-y text-gray-600 text-sm divide-gray-300">
                        <tr>
                            <th className=" p-2">Guest Name</th>
                            <th className=" p-2">Room Type</th>
                            <th className=" p-2">Check-in Date</th>
                            <th className=" p-2">Check-out Date</th>
                            <th className=" p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y text-[10px] divide-gray-300">    
                      {  dailyReservations.map((reservation)=>{
                            return (
                          <tr key={reservation._id} className="px-6 py-3 text-left  font-medium text-gray-500">
                            <td className="px-6 py-4 text-left   text-gray-500">{reservation.guestName}</td>
                            <td className="px-6 py-4 text-left   text-gray-500">{reservation.room}</td>
                            <td className="px-6 py-4 text-left   text-gray-500">{reservation.checkIn.split("T")[0]}</td>
                            <td className="px-6 py-4 text-left   text-gray-500">{reservation.checkOut.split("T")[0]}</td>
                            <td className="px-6 py-4 text-left   text-gray-500">{reservation.status}</td>
                          </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
           
        </div>
    )
}
export default ReservationToday;