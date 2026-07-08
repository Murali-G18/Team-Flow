import { useState, useEffect } from "react";
import type { CalendarEvent } from "../../data/Calendar";

interface Props {
  open: boolean;
  selectedDate: string;
  onClose: () => void;
  onAdd: (event: CalendarEvent) => void;
}

export default function AddEventModal({
  open,
  selectedDate,
  onClose,
  onAdd,
}: Props) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#2563eb");

  useEffect(() => {
    if (open) {
      setTitle("");
      setColor("#2563eb");
    }
  }, [open]);

  if (!open) return null;

  const submit = () => {
    if (!title.trim()) return;

    onAdd({
      id: Date.now().toString(),
      title,
      date: selectedDate,
      color,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl p-6 w-96">

        <h2 className="text-2xl font-bold mb-5">
          Add Event
        </h2>

        <input
          className="w-full border rounded-lg p-3 mb-4"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="color"
          className="w-full h-12 mb-6"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white"
          >
            Add
          </button>

        </div>
      </div>
    </div>
  );
}