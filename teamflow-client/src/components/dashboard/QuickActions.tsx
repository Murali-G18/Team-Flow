import {
  FolderPlus,
  UserPlus,
  Upload,
  TicketPlus,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function QuickActions() {

  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow border p-6 h-full">

      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <button
          onClick={() => navigate("/projects")}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-5 flex flex-col items-center"
        >
          <FolderPlus size={30} />
          <span className="mt-2">New Project</span>
        </button>

        <button
          onClick={() => navigate("/team")}
          className="bg-green-600 hover:bg-green-700 text-white rounded-xl p-5 flex flex-col items-center"
        >
          <UserPlus size={30} />
          <span className="mt-2">Invite Member</span>
        </button>

        <button
          onClick={() => navigate("/documents")}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl p-5 flex flex-col items-center"
        >
          <Upload size={30} />
          <span className="mt-2">Upload File</span>
        </button>

        <button
          onClick={() => navigate("/tickets")}
          className="bg-red-600 hover:bg-red-700 text-white rounded-xl p-5 flex flex-col items-center"
        >
          <TicketPlus size={30} />
          <span className="mt-2">New Ticket</span>
        </button>

      </div>

    </div>
  );
}