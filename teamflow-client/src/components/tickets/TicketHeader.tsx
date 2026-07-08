interface Props {
  total: number;
}

export default function TicketHeader({ total }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex justify-between">

      <div>
        <h1 className="text-3xl font-bold">
          Help Desk
        </h1>

        <p className="text-slate-500 mt-2">
          Manage support tickets
        </p>
      </div>

      <div className="bg-red-100 text-red-700 px-6 py-4 rounded-xl">

        <p>Total Tickets</p>

        <h2 className="text-3xl font-bold">
          {total}
        </h2>

      </div>

    </div>
  );
}