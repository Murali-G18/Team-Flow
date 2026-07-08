import type { RCAIncident } from "../../data/RCA";

interface Props {
  incidents: RCAIncident[];
}

export default function RCASummary({ incidents }: Props) {
  const open = incidents.filter(i => i.status === "Open").length;
  const progress = incidents.filter(i => i.status === "In Progress").length;
  const resolved = incidents.filter(i => i.status === "Resolved").length;

  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-red-500 text-white rounded-xl p-6">
        <h3>Open</h3>
        <p className="text-4xl font-bold mt-3">{open}</p>
      </div>

      <div className="bg-yellow-500 text-white rounded-xl p-6">
        <h3>In Progress</h3>
        <p className="text-4xl font-bold mt-3">{progress}</p>
      </div>

      <div className="bg-green-600 text-white rounded-xl p-6">
        <h3>Resolved</h3>
        <p className="text-4xl font-bold mt-3">{resolved}</p>
      </div>

    </div>
  );
}