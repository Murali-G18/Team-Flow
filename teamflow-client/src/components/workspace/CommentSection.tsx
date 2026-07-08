import type { WorkspaceComment } from "../../data/Workspace";

interface Props {
  comments: WorkspaceComment[];
}

export default function CommentSection({
  comments,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Comments
      </h2>

      <div className="space-y-4">

        {comments.map((comment) => (

          <div
            key={comment.id}
            className="border rounded-lg p-4"
          >

            <h3 className="font-semibold">
              {comment.user}
            </h3>

            <p className="text-slate-600 mt-2">
              {comment.comment}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}