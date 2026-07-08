import IncidentCard from "./IncidentCard";
import type { RCAIncident } from "../../data/RCA";

interface Props {
  incidents: RCAIncident[];
}

export default function IncidentList({
  incidents,
}: Props) {
  return (
    <div className="space-y-5">

      {incidents.map((incident) => (

        <IncidentCard
          key={incident.id}
          incident={incident}
        />

      ))}

    </div>
  );
}