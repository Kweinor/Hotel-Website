import { useEffect,useState } from "react";
import DashboardCard from "../../DashhboardCard";
import { Pencil, Trash } from "lucide-react";
import Facility from "../../facility";



function AdminFacilities(){
        const [faci,setFaci]=useState([])

useEffect(()=>{
    fetch("http://localhost:3000/api/v1/facilities")
    .then((res)=>res.json())
    .then((data)=>setFaci(data.data.facilities))
},[])


    return(
        <div>
            <div className="flex gap-10">
                <DashboardCard header={"Total Facility"}/>
                <DashboardCard header={"Active Facility"}/>
                <DashboardCard header={"Total Facility"}/>
                <DashboardCard/>
            </div>
            <div className="mt-8 mx-10">
                <div className="flex justify-end gap-6">
                    <input type="text"className="w-80 h-10 border-1 border-gray-400 text-gray-400 " />
                    <button className="py-2 px-3 bg-blue-200">Add Faciltiy</button>
                </div>
                <div className="mt-5">
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
                           
                            {faci.map((facility)=>{
                                return (
                              <tr key={facility._id} className="px-6 py-3 text-left  font-medium text-gray-500">
                                <td className="px-6 py-4 text-left   text-gray-500">{facility.name}</td>
                                <td className="px-6 py-4 text-left   text-gray-500">{facility.category}</td>
                                <td className="px-6 py-4 text-left   text-gray-500">{facility.status}</td>
                                <td className="flex gap-4 items-center px-6 py-4 text-left   text-gray-500">
                                    <Pencil size={18} color="blue" />
                                    <Trash size={18} color="red" /> 
                               </td>
                              </tr>)
                            })}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default AdminFacilities;