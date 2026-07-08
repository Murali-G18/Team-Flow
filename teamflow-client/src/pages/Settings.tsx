import ProfileCard from "../components/settings/ProfileCard";
import ThemeSwitcher from "../components/settings/ThemeSwitcher";
import SettingsForm from "../components/settings/SettingsForm";

import { profile } from "../data/Profile";

export default function Settings() {

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">

          Settings

        </h1>

        <p className="text-slate-500 mt-2">

          Manage your profile and preferences.

        </p>

      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        <ProfileCard
          profile={profile}
        />

        <div className="lg:col-span-2 space-y-8">

          <ThemeSwitcher />

          <SettingsForm />

        </div>

      </div>

    </div>

  );
}