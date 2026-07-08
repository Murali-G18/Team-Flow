import { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getUsers,
  updateRole,
  deleteUser,
} from "../services/userService";

import UserCard from "../components/users/UserCard";
import EditRoleModal from "../components/users/EditRoleModal";

export default function UserManagement() {
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");

  const [selectedUser, setSelectedUser] = useState<any>(null);

  const [open, setOpen] = useState(false);

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const roleMutation = useMutation({
    mutationFn: ({ id, role }: any) =>
      updateRole(id, role),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });

      setOpen(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  const filtered = users.filter((u: any) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-2">
        User Management
      </h1>

      <p className="text-gray-500 mb-8">
        Manage all users in TeamFlow
      </p>

      <input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-xl p-3 w-96 mb-8"
      />

      <div className="space-y-4">

        {filtered.map((user: any) => (
          <UserCard
            key={user._id}
            user={user}
            onEdit={() => {
              setSelectedUser(user);
              setOpen(true);
            }}
            onDelete={() => {
              if (
                window.confirm(
                  "Delete this user?"
                )
              ) {
                deleteMutation.mutate(user._id);
              }
            }}
          />
        ))}

      </div>

      <EditRoleModal
        open={open}
        user={selectedUser}
        onClose={() => setOpen(false)}
        onSave={(role) =>
          roleMutation.mutate({
            id: selectedUser._id,
            role,
          })
        }
      />

    </div>
  );
}