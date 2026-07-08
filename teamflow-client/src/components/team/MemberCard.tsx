import type { TeamMember } from "../../data/Team";

interface Props {
  member: TeamMember;
}

export default function MemberCard({ member }: Props) {

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center gap-4">

        <img
          src={member.avatar}
          className="w-16 h-16 rounded-full"
        />

        <div>

          <h2 className="text-xl font-bold">
            {member.name}
          </h2>

          <p className="text-slate-500">
            {member.role}
          </p>

        </div>

      </div>

      <div className="mt-6 space-y-2">

        <p><strong>Department:</strong> {member.department}</p>

        <p><strong>Email:</strong> {member.email}</p>

        <p><strong>Phone:</strong> {member.phone}</p>

        <p>
          <strong>Status:</strong>

          <span
            className={`ml-2 px-2 py-1 rounded-full text-xs ${
              member.status === "Online"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {member.status}
          </span>
        </p>

      </div>

    </div>
  );
}