import NotificationCard from "./NotificationCard";
import type { Notification } from "../../data/Notifications";

interface Props {
  notifications: Notification[];
  onDelete: (id: string) => void;
  onToggleRead: (id: string) => void;
}

export default function NotificationList({
  notifications,
  onDelete,
  onToggleRead,
}: Props) {
  if (notifications.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-10 text-center">

        <h2 className="text-2xl font-bold">
          No Notifications
        </h2>

        <p className="text-slate-500 mt-3">
          You're all caught up!
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-4">

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
          onDelete={onDelete}
          onToggleRead={onToggleRead}
        />
      ))}

    </div>
  );
}