import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface Props {
  to: string;
  icon: LucideIcon;
  label: string;
}

export default function SidebarItem({
  to,
  icon: Icon,
  label,
}: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 transition-all
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-slate-600 hover:bg-slate-100"
        }`
      }
    >
      <Icon size={20} />

      <span>{label}</span>
    </NavLink>
  );
}