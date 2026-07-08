const deadlines = [
  {
    project: "CRM Dashboard",
    date: "Tomorrow",
  },
  {
    project: "Authentication Module",
    date: "2 Days",
  },
  {
    project: "Mobile App",
    date: "5 Days",
  },
];

export default function UpcomingDeadlines() {
  return (
    <div className="bg-white rounded-2xl shadow border p-6 h-full">

      <h2 className="text-xl font-bold mb-6">
        Upcoming Deadlines
      </h2>

      <div className="space-y-4">

        {deadlines.map((item, index) => (

          <div
            key={index}
            className="flex justify-between items-center border rounded-xl p-4"
          >

            <div>

              <h3 className="font-semibold">
                {item.project}
              </h3>

              <p className="text-sm text-gray-500">
                Deadline
              </p>

            </div>

            <span className="font-bold text-red-600">
              {item.date}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}