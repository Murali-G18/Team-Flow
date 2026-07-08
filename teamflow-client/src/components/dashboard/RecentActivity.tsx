const activities = [
  {
    id: 1,
    title: "New Project Created",
    user: "John",
    time: "5 mins ago",
  },
  {
    id: 2,
    title: "Task Completed",
    user: "Alice",
    time: "20 mins ago",
  },
  {
    id: 3,
    title: "Ticket Resolved",
    user: "Mike",
    time: "1 hour ago",
  },
  {
    id: 4,
    title: "Document Uploaded",
    user: "Sarah",
    time: "2 hours ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow border p-6 h-full">
      <h2 className="text-xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="border-l-4 border-blue-600 pl-4"
          >
            <h3 className="font-semibold">
              {activity.title}
            </h3>

            <p className="text-sm text-gray-500">
              {activity.user}
            </p>

            <span className="text-xs text-gray-400">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}