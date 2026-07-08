import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (member: any) => void;
}

export default function AddMemberModal({
  open,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Developer",
    department: "Development",
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white w-[450px] rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-5">
          Add Team Member
        </h2>

        <div className="space-y-4">

          <input
            className="border p-3 rounded-lg w-full"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="border p-3 rounded-lg w-full"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <select
            className="border p-3 rounded-lg w-full"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          >
            <option>Admin</option>
            <option>Manager</option>
            <option>Developer</option>
          </select>

          <input
            className="border p-3 rounded-lg w-full"
            placeholder="Department"
            value={form.department}
            onChange={(e) =>
              setForm({
                ...form,
                department: e.target.value,
              })
            }
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(form);
              onClose();
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}