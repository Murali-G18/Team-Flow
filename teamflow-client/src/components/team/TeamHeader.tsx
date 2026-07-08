interface Props {
  total: number;
}

export default function TeamHeader({ total }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-6">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-bold">
            Team Management
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your team members
          </p>
        </div>

        <div className="bg-blue-100 text-blue-700 px-6 py-4 rounded-xl">

          <p>Total Members</p>

          <h2 className="text-3xl font-bold">
            {total}
          </h2>

        </div>

      </div>

    </div>
  );
}