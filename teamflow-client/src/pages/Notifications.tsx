import { useState } from "react";

import NotificationHeader from "../components/notifications/NotificationHeader";
import NotificationFilters from "../components/notifications/NotificationFilters";
import NotificationList from "../components/notifications/NotificationList";

import {
  notificationsData,
  type Notification,
} from "../data/Notifications";

export default function Notifications() {

  const [notifications, setNotifications] =
    useState<Notification[]>(notificationsData);

  const [filter, setFilter] =
    useState("All");

  const deleteNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    );
  };

  const toggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id
          ? {
              ...n,
              read: !n.read,
            }
          : n
      )
    );
  };

  const filteredNotifications =
    notifications.filter((notification) => {

      if (filter === "Unread")
        return !notification.read;

      if (filter === "Read")
        return notification.read;

      return true;
    });

  return (
    <div className="space-y-6">

      <NotificationHeader
        total={notifications.length}
        unread={
          notifications.filter(
            (n) => !n.read
          ).length
        }
      />

      <NotificationFilters
        filter={filter}
        setFilter={setFilter}
      />

      <NotificationList
        notifications={filteredNotifications}
        onDelete={deleteNotification}
        onToggleRead={toggleRead}
      />

    </div>
  );
}