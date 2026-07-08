import type { WorkspaceTask } from "../../data/Workspace";

interface Props {
  tasks: WorkspaceTask[];
}

export default function TaskSection({ tasks }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Project Tasks
      </h2>

      <div className="space-y-4">

        {tasks.map((task) => (

          <div
            key={task.id}
            className="flex items-center justify-between border rounded-lg p-4"
          >

            <span>{task.title}</span>

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                task.completed
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}