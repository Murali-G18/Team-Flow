interface Props {
  total: number;
}

export default function ChatHeader({ total }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Team Chat</h1>
        <p className="text-slate-500 mt-2">
          Collaborate with your team
        </p>
      </div>

      <div className="bg-blue-100 text-blue-700 px-5 py-3 rounded-xl">
        <p>Messages</p>
        <h2 className="text-3xl font-bold">{total}</h2>
      </div>
    </div>
  );
}