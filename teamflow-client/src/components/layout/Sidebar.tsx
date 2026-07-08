import {
  LayoutDashboard,
  FolderKanban,
  ClipboardList,
  Calendar,
  Bell,
  BarChart3,
  ShieldAlert,
  Settings,
  Users,
  MessageSquare,
  Columns3,
  BriefcaseBusiness,
  FolderOpen,
  LifeBuoy,
  UserCog,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const role = user.role || "Developer";

  const menu = [
    {
      to: "/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      roles: ["Admin", "Manager", "Developer"],
    },

    {
  to: "/users",
  icon: UserCog,
  label: "User Management",
  roles: ["Admin"],
},

    {
      to: "/workspace",
      icon: BriefcaseBusiness,
      label: "Workspace",
      roles: ["Admin", "Manager", "Developer"],
    },
    {
      to: "/kanban",
      icon: Columns3,
      label: "Kanban",
      roles: ["Admin", "Manager", "Developer"],
    },
    {
      to: "/projects",
      icon: FolderKanban,
      label: "Projects",
      roles: ["Admin", "Manager"],
    },
    {
      to: "/documents",
      icon: FolderOpen,
      label: "Documents",
      roles: ["Admin", "Manager", "Developer"],
    },
    {
      to: "/tickets",
      icon: LifeBuoy,
      label: "Help Desk",
      roles: ["Admin", "Manager"],
    },
    {
      to: "/chat",
      icon: MessageSquare,
      label: "Team Chat",
      roles: ["Admin", "Manager", "Developer"],
    },
    {
      to: "/team",
      icon: Users,
      label: "Team",
      roles: ["Admin"],
    },
    {
      to: "/tasks",
      icon: ClipboardList,
      label: "Tasks",
      roles: ["Admin", "Manager", "Developer"],
    },
    {
      to: "/calendar",
      icon: Calendar,
      label: "Calendar",
      roles: ["Admin", "Manager", "Developer"],
    },
    {
      to: "/notifications",
      icon: Bell,
      label: "Notifications",
      roles: ["Admin", "Manager", "Developer"],
    },
    {
      to: "/analytics",
      icon: BarChart3,
      label: "Analytics",
      roles: ["Admin", "Manager"],
    },
    {
      to: "/rca",
      icon: ShieldAlert,
      label: "RCA",
      roles: ["Admin", "Manager"],
    },
  ];

  return (
    <aside className="w-72 xl:w-80 min-w-[320px] border-r bg-white flex flex-col">

      <div className="h-20 flex items-center px-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            TeamFlow
          </h1>

          <p className="text-xs text-slate-500">
            Enterprise Platform
          </p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">

        {menu
          .filter((item) => item.roles.includes(role))
          .map((item) => (
            <SidebarItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
            />
          ))}

      </nav>

      <div className="p-4">

        {["Admin"].includes(role) && (
          <SidebarItem
            to="/settings"
            icon={Settings}
            label="Settings"
          />
        )}

      </div>

    </aside>
  );
}