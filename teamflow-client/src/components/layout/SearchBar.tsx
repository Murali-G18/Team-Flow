import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-96">

      <Search
        className="absolute left-4 top-3 text-slate-400"
        size={18}
      />

      <input
        placeholder="Search projects or tasks..."
        className="w-full max-w-md border rounded-lg px-4 bg-slate-100 py-3 pl-11 pr-4 outline-none focus:border-blue-500"
      />

    </div>
  );
}