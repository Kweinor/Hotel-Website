import { useMutation, useQueryClient } from "@tanstack/react-query";

function DeleteModal({ open, onClose, roomId }) {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({


    mutationFn: async (roomId) => {
      console.log('Deleting room with ID:', roomId);
      const res = await fetch(`http://localhost:3000/api/v1/rooms/${roomId}`, {
        method: 'DELETE',
      });
      console.log('Response status:', res.status);
      const responseText = await res.text();
      console.log('Response body:', responseText);

      if (!res.ok) {
        console.error('Delete failed:', res.status, responseText);
        throw new Error(`Failed to delete room: ${responseText}`);
      }

      // Handle 204 No Content or empty response
      if (res.status === 204 || !responseText.trim()) {
        return {};
      }

      return JSON.parse(responseText);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["Rooms"]); // 🔥 refetch updated list
      onClose();
    }
  });
if (!open) return null;
  return (
    <div className="fixed inset-0  bg-black/15 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        
          <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
          <p>Are you sure you want to delete this room?</p>
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
           <button
  onClick={() => deleteMutation.mutate(roomId)}
  disabled={deleteMutation.isLoading}
  className={`px-4 py-2 rounded text-white ${deleteMutation.isLoading ? "bg-red-300" : "bg-red-500"}`}
>
  {deleteMutation.isLoading ? "Deleting..." : "Delete"}
</button>
          </div>
          {deleteMutation.isError && (
          <p className="text-red-500 mt-2">{deleteMutation.error.message}</p>
        )}
      </div>
    </div>
  );
}

export default DeleteModal;