import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (ticket: any) => void;
}

export default function AddTicketModal({
  open,
  onClose,
  onSave,
}: Props) {
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Open",
    assignedTo: "",
  });

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[600px] rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Create Ticket
        </h2>

        <div className="space-y-4">

          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="description"
            placeholder="Description"
            rows={4}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="priority"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>Low</option>
            <option selected>Medium</option>
            <option>High</option>
          </select>

          <select
            name="status"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
            <option>Closed</option>
          </select>

          <input
            name="assignedTo"
            placeholder="Assign To"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(ticket);
              onClose();
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}