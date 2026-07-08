import { useState } from "react";

export default function SettingsForm() {

  const [email, setEmail] = useState(true);

  const [push, setPush] = useState(false);

  const [language, setLanguage] =
    useState("English");

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-6">

        Preferences

      </h2>

      <div className="space-y-6">

        <label className="flex justify-between">

          Email Notifications

          <input
            type="checkbox"
            checked={email}
            onChange={() =>
              setEmail(!email)
            }
          />

        </label>

        <label className="flex justify-between">

          Push Notifications

          <input
            type="checkbox"
            checked={push}
            onChange={() =>
              setPush(!push)
            }
          />

        </label>

        <div>

          <p className="mb-2">

            Language

          </p>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            className="border rounded-lg p-3 w-full"
          >

            <option>English</option>

            <option>Hindi</option>

            <option>Telugu</option>

          </select>

        </div>

        <button
          className="bg-blue-600 text-white px-5 py-3 rounded-xl"
        >
          Save Settings
        </button>

      </div>

    </div>

  );
}