import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  ticket: any;
  onClose: () => void;
  onSave: (ticket: any) => void;
}

export default function EditTicketModal({
  open,
  ticket,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState(ticket);

  useEffect(() => {
    setForm(ticket);
  }, [ticket]);

  if (!open || !form) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[600px] rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Edit Ticket
        </h2>

        <div className="space-y-4">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="description"
            rows={4}
            value={form.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            name="status"
            value={form.status}
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
            value={form.assignedTo}
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
              onSave(form);
              onClose();
            }}
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Update
          </button>

        </div>

      </div>
    </div>
  );
}