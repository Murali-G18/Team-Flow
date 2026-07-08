import type { WorkspaceActivity } from "../../data/Workspace";

interface Props {
  activity: WorkspaceActivity[];
}

export default function ActivitySection({
  activity,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Activity Timeline
      </h2>

      <div className="space-y-5">

        {activity.map((item) => (

          <div
            key={item.id}
            className="flex justify-between border-b pb-3"
          >

            <span>{item.action}</span>

            <span className="text-slate-500">
              {item.date}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}