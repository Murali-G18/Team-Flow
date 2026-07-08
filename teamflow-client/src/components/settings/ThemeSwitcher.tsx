import { useState } from "react";

export default function ThemeSwitcher() {

  const [dark, setDark] = useState(false);

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        Theme
      </h2>

      <button
        onClick={() => setDark(!dark)}
        className={`px-5 py-3 rounded-xl text-white ${
          dark
            ? "bg-slate-800"
            : "bg-blue-600"
        }`}
      >
        {dark
          ? "Dark Mode"
          : "Light Mode"}
      </button>

    </div>

  );
}