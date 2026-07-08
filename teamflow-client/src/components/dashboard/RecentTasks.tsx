import Card from "../ui/Card";

const tasks = [
  {
    id: "TSK-101",
    title: "Design Login Page",
    assignee: "Sai",
    status: "Completed",
    priority: "High",
  },
  {
    id: "TSK-102",
    title: "API Integration",
    assignee: "Rahul",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TSK-103",
    title: "Fix Dashboard Bugs",
    assignee: "Kiran",
    status: "Pending",
    priority: "High",
  },
  {
    id: "TSK-104",
    title: "Create Reports",
    assignee: "Anjali",
    status: "Review",
    priority: "Low",
  },
];

export default function RecentTasks() {
  const statusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-purple-100 text-purple-700";
    }
  };

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-6">
        Recent Tasks
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="border-b">

            <tr>

              <th className="py-3">ID</th>

              <th>Task</th>

              <th>Assignee</th>

              <th>Status</th>

              <th>Priority</th>

            </tr>

          </thead>

          <tbody>

            {tasks.map((task) => (

              <tr
                key={task.id}
                className="border-b hover:bg-slate-50"
              >

                <td className="py-4">{task.id}</td>

                <td>{task.title}</td>

                <td>{task.assignee}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${statusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>

                </td>

                <td>{task.priority}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Card>
  );
}