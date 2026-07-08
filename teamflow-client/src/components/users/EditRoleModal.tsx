import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  user: any;
  onClose: () => void;
  onSave: (role: string) => void;
}

export default function EditRoleModal({
  open,
  user,
  onClose,
  onSave,
}: Props) {
  const [role, setRole] = useState("Developer");

  useEffect(() => {
    if (user) {
      setRole(user.role);
    }
  }, [user]);

  if (!open || !user) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl w-[400px] p-6">

        <h2 className="text-2xl font-bold mb-6">
          Change User Role
        </h2>

        <p className="mb-4 font-medium">
          {user.name}
        </p>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border rounded-lg p-3 mb-6"
        >
          <option>Developer</option>
          <option>Manager</option>
          <option>Admin</option>
        </select>

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={() => onSave(role)}
            className="px-5 py-2 rounded bg-blue-600 text-white"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}