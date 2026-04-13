import { useState } from "react";

function AddRoom({ open, onClose }) {
  const [formData, setFormData] = useState({ name: "", price: "", description: "", amenities: "", status: "Available" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/v1/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to add room");
      onClose(); // close modal
    } catch (err) {
      console.error(err);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/5 backdrop-blur-sm bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-196">
        <h2 className="text-lg font-bold mb-4">Add Room</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input 
            type="text" 
            placeholder="Room Name" 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="border p-2 rounded"
          />
          
          <input 
            type="number" 
            placeholder="Price" 
            value={formData.price} 
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Description" 
            value={formData.description} 
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="border p-2 rounded"
          />
          <input 
            type="text" 
            placeholder="Amenities (comma separated)" 
            value={formData.amenities} 
            onChange={(e) => setFormData({...formData, amenities: e.target.value})}
            className="border p-2 rounded"
          />
          <select 
            value={formData.status} 
            onChange={(e) => setFormData({...formData, status: e.target.value})}
            className="border p-2 rounded"
          >
            <option value="Available">Available</option>
            <option value="Occupied">Occupied</option>
            <option value="Maintenance">Maintenance</option>
          </select>
          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-3 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-3 py-2 bg-blue-500 text-white rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRoom;
