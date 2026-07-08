import type { UserProfile } from "../../data/Profile";

interface Props {
  profile: UserProfile;
}

export default function ProfileCard({
  profile,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <div className="flex flex-col items-center">

        <img
          src={profile.avatar}
          className="w-32 h-32 rounded-full"
        />

        <h2 className="text-2xl font-bold mt-4">
          {profile.name}
        </h2>

        <p className="text-slate-500">
          {profile.role}
        </p>

      </div>

      <div className="mt-8 space-y-3">

        <p><strong>Email:</strong> {profile.email}</p>

        <p><strong>Department:</strong> {profile.department}</p>

        <p><strong>Phone:</strong> {profile.phone}</p>

        <p><strong>Location:</strong> {profile.location}</p>

      </div>

    </div>
  );
}