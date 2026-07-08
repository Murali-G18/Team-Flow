import type { RCAIncident } from "../../data/RCA";

interface Props {
  incident: RCAIncident;
}

export default function IncidentCard({ incident }: Props) {

  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between">

        <h2 className="font-bold text-lg">
          {incident.title}
        </h2>

        <span
          className={`px-3 py-1 rounded-full text-sm ${priorityColor[incident.priority]}`}
        >
          {incident.priority}
        </span>

      </div>

      <div className="mt-4 space-y-2">

        <p>
          <strong>Status:</strong> {incident.status}
        </p>

        <p>
          <strong>Engineer:</strong> {incident.engineer}
        </p>

        <p>
          <strong>Root Cause:</strong> {incident.rootCause}
        </p>

        <p>
          <strong>Resolution:</strong> {incident.resolution}
        </p>

      </div>

    </div>
  );
}