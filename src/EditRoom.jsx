//mport { useQuery } from "@tanstack/react-query";
import { useQueryClient, useMutation} from "@tanstack/react-query";
import { useState } from "react";

function EditRoom({room, open}) {
   const queryClient = useQueryClient();
  const editMutation = useMutation({
  mutationFn: async (room) => {
    const res = await fetch(`http://localhost:3000/api/v1/rooms/${room._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(room)
    });
    const responseText = await res.text();
    console.log('Response body:', responseText);

    if (!res.ok) {
      throw new Error(`Failed to update room: ${responseText}`);
    }
    // Handle 204 No Content or empty response
    if (res.status === 204 || !responseText.trim()) {
      return {};
    }
    return JSON.parse(responseText);
  }})

  
  const [name, setName] = useState(room?.name ?? "");
  const [price, setPrice] = useState(room?.price ?? "");
  const [capacity, setCapacity] = useState(room?.capacity ?? "");
  const [description, setDescription] = useState(room?.description ?? "");
  const [amenities, setAmenities] = useState(room?.amenities ?? "");
  const [status, setStatus] = useState(room?.status ?? "Available");

 function handleSubmit(e) {
  e.preventDefault();
  const updatedRoom = {
   ...room, // keep original values
    name: name || room.name,           // fallback if empty
    price: price || room.price,
    capacity: capacity || room.capacity,
    description: description || room.description,
    amenities: amenities || room.amenities,
    status: status || room.status
  };
  console.log("Updated room:", updatedRoom);

  // Call the mutation
  editMutation.mutate(updatedRoom, {
    onSuccess: () => {
      // Invalidate and refetch rooms list so UI updates
      queryClient.invalidateQueries(["rooms"]);
      alert("Room updated successfully!");
    },
    onError: (error) => {
      console.error("Error updating room:", error);
      alert("Failed to update room.");
    },
  });
}

  if (!open) return null;
    return(
        <div className="flex fixed inset-0 bg-black/15 backdrop-blur-sm items-center justify-center bg-opacity-5">
           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
           <form  action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name:</label>
                <input className="border border-gray-300 rounded-md py-2 px-3" type="text" placeholder={room?.name || "Enter room name"} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Price:</label>
                <input className="border border-gray-300 rounded-md py-2 px-3 " type="text"   placeholder={room?.price || "Enter price"}  onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Capacity:</label>
                <input className="border border-gray-300 rounded-md py-2 px-3 " type="text" placeholder={room?.capacity || "Enter capacity"} onChange={(e) => setCapacity(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Amenities:</label>
                <input className="border border-gray-300 rounded-md py-2 px-3 " type="text" placeholder={room?.amenities || "Enter amenities"} onChange={(e) => setAmenities(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Status:</label>
                <select className="border border-gray-300 rounded-md py-2 px-3 " value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Available">Available</option>
                    <option value="Occupied">Occupied</option>
                    <option value="Maintenance">Maintenance</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Description:</label>
                <input className="border border-gray-300 rounded-md py-2 px-3 " type="text" placeholder={room?.description || "Enter description"} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
           </form>
          </div>
        </div>
    )
}
export default EditRoom;