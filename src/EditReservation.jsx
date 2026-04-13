import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";

function EditItem({ reservation, open, onClose }) {
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: async (updatedReservation) => {
      const res = await fetch(
        `http://localhost:3000/api/v1/reservations/${reservation._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedReservation),
        }
      );
      if (!res.ok) {
        const responseText = await res.text();
        throw new Error(`Failed to update reservation: ${responseText}`);
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reservations"]);
      alert("Reservation updated successfully!");
      onClose();
    },
    onError: (error) => {
      console.error("Error updating reservation:", error);
      alert("Failed to update reservation.");
    },
  });

  // Local state (start empty, fallback to reservation values later)
  const [guestName, setGuestName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const updatedReservation = {
      guestName: guestName || reservation.guestName,
      checkIn: checkIn || reservation.checkIn,
      checkOut: checkOut || reservation.checkOut,
      status: status || reservation.status,
    };
    editMutation.mutate(updatedReservation);
  }

  if (!open) return null;

  return (
    <div className="flex fixed inset-0 bg-black/15 backdrop-blur-sm items-center justify-center bg-opacity-5">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <X
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer"
          size={20}
        />
        <form onSubmit={handleSubmit}>
          <div className="gap-">
            <label>Guest Name:</label>
            <input
              className="border rounded-md py-2 px-3"
              type="text"
              defaultValue={reservation?.guestName}
              onChange={(e) => setGuestName(e.target.value)}
            />
          </div>
          <div>
            <label>Check-In:</label>
            <input
              className="border rounded-md py-2 px-3"
              type="date"
              defaultValue={reservation?.checkIn?.split("T")[0]}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            <label>Check-Out:</label>
            <input
              className="border rounded-md py-2 px-3"
              type="date"
              defaultValue={reservation?.checkOut?.split("T")[0]}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div>
            <label>Status:</label>
            <select
              className="border rounded-md py-2 px-3"
              defaultValue={reservation?.status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Confirmed">Confirmed</option>
              <option value="CheckedIn">Check In</option>
              <option value="CheckedOut">Check Out</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditItem;
