interface Props {
  filter: string;
  setFilter: (filter: string) => void;
}

export default function NotificationFilters({
  filter,
  setFilter,
}: Props) {
  const filters = [
    "All",
    "Unread",
    "Read",
  ];

  return (
    <div className="flex gap-3 mb-6">

      {filters.map((item) => (

        <button
          key={item}
          onClick={() => setFilter(item)}
          className={`px-5 py-2 rounded-lg transition ${
            filter === item
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}