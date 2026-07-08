interface Props {
  total: number;
  unread: number;
}

export default function NotificationHeader({
  total,
  unread,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Notifications
          </h1>

          <p className="text-slate-500 mt-2">
            Stay updated with project activities
          </p>
        </div>

        <div className="flex gap-4">

          <div className="bg-blue-100 text-blue-700 px-5 py-3 rounded-xl">

            <h2 className="text-sm">
              Total
            </h2>

            <p className="text-2xl font-bold">
              {total}
            </p>

          </div>

          <div className="bg-red-100 text-red-700 px-5 py-3 rounded-xl">

            <h2 className="text-sm">
              Unread
            </h2>

            <p className="text-2xl font-bold">
              {unread}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}