import { useState } from "react";
import type { TeamMember } from "../../data/Team";

interface Props {
  onAdd: (member: TeamMember) => void;
}

export default function MemberForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const submit = () => {
    if (!name || !role || !email) return;

    onAdd({
      id: Date.now().toString(),
      name,
      role,
      department,
      email,
      phone,
      status: "Online",
      avatar: `https://i.pravatar.cc/150?u=${email}`,
    });

    setName("");
    setRole("");
    setDepartment("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Add Team Member
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

      </div>

      <button
        onClick={submit}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        Add Member
      </button>

    </div>
  );
}