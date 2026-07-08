import {
  Bell,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Info,
  Trash2,
} from "lucide-react";
import type { Notification } from "../../data/Notifications";

interface Props {
  notification: Notification;
  onDelete: (id: string) => void;
  onToggleRead: (id: string) => void;
}

export default function NotificationCard({
  notification,
  onDelete,
  onToggleRead,
}: Props) {
  const icon = {
    success: <CheckCircle className="text-green-600" />,
    warning: <AlertTriangle className="text-yellow-500" />,
    error: <XCircle className="text-red-500" />,
    info: <Info className="text-blue-500" />,
  };

  return (
    <div
      className={`rounded-xl border p-4 shadow-sm transition hover:shadow-md ${
        notification.read ? "bg-white" : "bg-blue-50"
      }`}
    >
      <div className="flex justify-between">

        <div className="flex gap-3">

          <div>{icon[notification.type]}</div>

          <div>

            <h3 className="font-semibold">
              {notification.title}
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              {notification.message}
            </p>

            <p className="text-xs text-slate-400 mt-2">
              {notification.time}
            </p>

          </div>

        </div>

        <div className="flex gap-2">

          <button
            onClick={() => onToggleRead(notification.id)}
            className="text-green-600 hover:text-green-800"
          >
            <Bell size={18} />
          </button>

          <button
            onClick={() => onDelete(notification.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={18} />
          </button>

        </div>
      </div>
    </div>
  );
}