import { useState } from "react";
import type { Ticket } from "../../data/Tickets";

interface Props {
  onAdd: (ticket: Ticket) => void;
}

export default function TicketForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] =
    useState<Ticket["priority"]>("Medium");
  const [assignee, setAssignee] =
    useState("");

  const submit = () => {
    if (!title || !assignee) return;

    onAdd({
      id: Date.now().toString(),
      title,
      priority,
      assignee,
      status: "Open",
    });

    setTitle("");
    setPriority("Medium");
    setAssignee("");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Create Ticket
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="Ticket Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <select
          className="border rounded-lg p-3"
          value={priority}
          onChange={(e)=>
            setPriority(e.target.value as Ticket["priority"])
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Critical</option>
        </select>

        <input
          className="border rounded-lg p-3"
          placeholder="Assign To"
          value={assignee}
          onChange={(e)=>setAssignee(e.target.value)}
        />

      </div>

      <button
        onClick={submit}
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
      >
        Create Ticket
      </button>

    </div>
  );
}