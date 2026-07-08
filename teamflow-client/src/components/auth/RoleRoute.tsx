import { Navigate } from "react-router-dom";

interface Props {
  roles: string[];
  children: React.ReactNode;
}

export default function RoleRoute({
  roles,
  children,
}: Props) {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  if (!user.role) {
    return <Navigate to="/login" replace />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}