import { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  Plus,
  Pencil,
  Trash2,
  Search,
} from "lucide-react";

import {
  getTeam,
  addTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from "../services/teamService";

import AddMemberModal from "../components/team/AddMemberModal";
import EditMemberModal from "../components/team/EditMemberModal";

export default function Team() {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [search, setSearch] = useState("");

  // ============================
  // Fetch Team Members
  // ============================

  const {
    data: members = [],
    isLoading,
  } = useQuery({
    queryKey: ["team"],
    queryFn: getTeam,
  });

  // ============================
  // Add Member
  // ============================

  const createMutation = useMutation({
    mutationFn: addTeamMember,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["team"],
      });

      setOpen(false);
    },
  });

  // ============================
  // Update Member
  // ============================

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: any;
    }) => updateTeamMember(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["team"],
      });

      setEditOpen(false);
    },
  });

  // ============================
  // Delete Member
  // ============================

  const deleteMutation = useMutation({
    mutationFn: deleteTeamMember,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["team"],
      });
    },
  });

  // ============================
  // Search Filter
  // ============================

  const filteredMembers = members.filter((member: any) =>
    member.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="text-center text-xl font-semibold py-10">
        Loading Team...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Team Management
          </h1>

          <p className="text-gray-500">
            Total Members : {members.length}
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
        >
          <Plus size={20} />
          Add Member
        </button>

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search Member..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border rounded-xl py-3 pl-10 pr-4"
        />

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredMembers.map((member: any) => (

          <div
            key={member._id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
          >

            <div className="flex justify-between">

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">

                  {member.name?.charAt(0).toUpperCase()}

                </div>

                <div>

                  <h2 className="text-xl font-bold">

                    {member.name}

                  </h2>

                  <p className="text-gray-500 text-sm">

                    {member.email}

                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <button
                  onClick={() => {
                    setSelectedMember(member);
                    setEditOpen(true);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pencil size={18} />
                </button>

                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Delete this member?"
                      )
                    ) {
                      deleteMutation.mutate(
                        member._id
                      );
                    }
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>

            <div className="mt-6 flex justify-between items-center">

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold

                ${
                  member.role === "Admin"
                    ? "bg-red-100 text-red-700"
                    : member.role === "Manager"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {member.role}
              </span>

              <span className="text-gray-500 text-sm">
                {member.department}
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* Add Member Modal */}

      <AddMemberModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={(member) =>
          createMutation.mutate(member)
        }
      />

      {/* Edit Member Modal */}

      <EditMemberModal
        open={editOpen}
        member={selectedMember}
        onClose={() => setEditOpen(false)}
        onSave={(member) =>
          updateMutation.mutate({
            id: selectedMember._id,
            data: member,
          })
        }
      />

    </div>
  );
}