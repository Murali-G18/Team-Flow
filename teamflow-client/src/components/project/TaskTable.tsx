import type { Task } from "../../data/Tasks";

interface Props {
  tasks: Task[];
}

export default function TaskTable({ tasks }: Props) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Task</th>
            <th className="p-3 text-left">Project</th>
            <th className="p-3 text-left">Assignee</th>
            <th className="p-3 text-left">Priority</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Due Date</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <tr
              key={task.id}
              className="border-b hover:bg-slate-50 transition"
            >
              <td className="p-3">{task.id}</td>

              <td className="p-3 font-medium">
                {task.title}
              </td>

              <td className="p-3">
                {task.project}
              </td>

              <td className="p-3">
                {task.assignee}
              </td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm
                  ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-700"
                      : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {task.priority}
                </span>
              </td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm
                  ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : task.status === "Pending"
                      ? "bg-red-100 text-red-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {task.status}
                </span>
              </td>

              <td className="p-3">
                {task.dueDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}