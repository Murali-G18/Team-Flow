import { useState } from "react";
import type { RCAIncident } from "../../data/RCA";

interface Props {
  onAdd: (incident: RCAIncident) => void;
}

export default function IncidentForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [engineer, setEngineer] = useState("");
  const [priority, setPriority] =
    useState<"High" | "Medium" | "Low">("Medium");

  const submit = () => {
    if (!title || !engineer) return;

    onAdd({
      id: `INC${Date.now()}`,
      title,
      engineer,
      priority,
      status: "Open",
      rootCause: "Pending Investigation",
      resolution: "Pending",
    });

    setTitle("");
    setEngineer("");
    setPriority("Medium");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        Add Incident
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="Incident Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Engineer"
          value={engineer}
          onChange={(e) => setEngineer(e.target.value)}
        />

        <select
          className="border rounded-lg p-3"
          value={priority}
          onChange={(e) =>
            setPriority(
              e.target.value as "High" | "Medium" | "Low"
            )
          }
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

      </div>

      <button
        onClick={submit}
        className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
      >
        Add Incident
      </button>

    </div>
  );
}