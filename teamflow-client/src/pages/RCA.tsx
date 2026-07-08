import { useState } from "react";

import {
  incidents,
  type RCAIncident,
} from "../data/RCA";

import RCASummary from "../components/rca/RCASummary";
import IncidentForm from "../components/rca/IncidentForm";
import IncidentList from "../components/rca/IncidentList";

export default function RCA() {

  const [data, setData] =
    useState<RCAIncident[]>(incidents);

  const [search, setSearch] =
    useState("");

  const addIncident = (
    incident: RCAIncident
  ) => {
    setData((prev) => [incident, ...prev]);
  };

  const filtered = data.filter((incident) =>
    incident.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Root Cause Analysis
        </h1>

        <p className="text-slate-500 mt-2">
          Track incidents and resolutions.
        </p>

      </div>

      <RCASummary incidents={data} />

      <div className="bg-white rounded-2xl shadow p-6">

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Search Incident..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <IncidentForm
        onAdd={addIncident}
      />

      <IncidentList
        incidents={filtered}
      />

    </div>
  );
}