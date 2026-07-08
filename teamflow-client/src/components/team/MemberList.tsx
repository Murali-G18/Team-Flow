import MemberCard from "./MemberCard";
import type { TeamMember } from "../../data/Team";

interface Props {
  members: TeamMember[];
}

export default function MemberList({ members }: Props) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {members.map((member) => (

        <MemberCard
          key={member.id}
          member={member}
        />

      ))}

    </div>
  );
}