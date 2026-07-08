import Card from "../ui/Card";

const activities = [
  {
    user: "Sai",
    action: "completed Login Module",
    time: "10 mins ago",
  },
  {
    user: "Rahul",
    action: "created Project Alpha",
    time: "30 mins ago",
  },
  {
    user: "Anjali",
    action: "reviewed RCA Report",
    time: "1 hour ago",
  },
  {
    user: "Kiran",
    action: "updated Dashboard",
    time: "2 hours ago",
  },
];

export default function TeamActivity() {
  return (
    <Card>

      <h2 className="text-xl font-semibold mb-6">
        Team Activity
      </h2>

      <div className="space-y-5">

        {activities.map((activity, index) => (

          <div
            key={index}
            className="flex items-start gap-4"
          >

            <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {activity.user[0]}
            </div>

            <div>

              <p>

                <span className="font-semibold">
                  {activity.user}
                </span>{" "}

                {activity.action}

              </p>

              <p className="text-sm text-slate-500">
                {activity.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
}