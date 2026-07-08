import ProjectHeader from "../components/workspace/ProjectHeader";
import ProjectStats from "../components/workspace/ProjectStats";
import TeamSection from "../components/workspace/TeamSection";
import TaskSection from "../components/workspace/TaskSection";
import CommentSection from "../components/workspace/CommentSection";
import ActivitySection from "../components/workspace/ActivitySection";

import { workspace } from "../data/Workspace";

export default function Workspace() {
  return (
    <div className="space-y-8">

      <ProjectHeader
        title={workspace.projectName}
      />

      <ProjectStats
        progress={workspace.progress}
        budget={workspace.budget}
        deadline={workspace.deadline}
        priority={workspace.priority}
        status={workspace.status}
      />

      <div className="grid lg:grid-cols-2 gap-8">

        <TeamSection
          members={workspace.members}
        />

        <TaskSection
          tasks={workspace.tasks}
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        <CommentSection
          comments={workspace.comments}
        />

        <ActivitySection
          activity={workspace.activity}
        />

      </div>

    </div>
  );
}