const filters = [
  "All",
  "Active",
  "Completed",
  "On Hold",
  "High Priority",
];

export default function ProjectFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter, index) => (
        <button
          key={filter}
          className={`
            px-5
            py-2
            rounded-full
            text-sm
            font-medium
            transition-all
            duration-200

            ${
              index === 0
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white border border-slate-300 text-slate-600 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}