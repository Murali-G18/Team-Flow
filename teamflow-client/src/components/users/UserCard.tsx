import { Pencil, Trash2 } from "lucide-react";

interface Props {
  user: any;
  onEdit: () => void;
  onDelete: () => void;
}

export default function UserCard({
  user,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow border p-5 flex justify-between items-center">

      <div className="flex gap-4 items-center">

        <img
          src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff`}
          className="w-12 h-12 rounded-full"
        />

        <div>
          <h2 className="font-bold">{user.name}</h2>

          <p className="text-gray-500">
            {user.email}
          </p>

          <span className="text-blue-600 font-medium">
            {user.role}
          </span>
        </div>

      </div>

      <div className="flex gap-3">

        <button
          onClick={onEdit}
          className="bg-blue-500 text-white p-2 rounded"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={onDelete}
          className="bg-red-500 text-white p-2 rounded"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}