import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  member: any;
  onClose: () => void;
  onSave: (member: any) => void;
}

export default function EditMemberModal({
  open,
  member,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Developer",
    department: "Development",
  });

  useEffect(() => {
    if (member) {
      setForm({
        name: member.name,
        email: member.email,
        role: member.role,
        department: member.department,
      });
    }
  }, [member]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[450px] rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Edit Team Member
        </h2>

        <div className="space-y-4">

          <input
            className="border p-3 rounded-lg w-full"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="border p-3 rounded-lg w-full"
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
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(form);
              onClose();
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}