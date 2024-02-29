import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import Setting from "./components/EditProfiles/Setting";
import ProfileInfo from "./components/EditProfiles/ProfileInfo";
import DarkModeItem from "./components/DarkModeItem/DarkModeItem";
import { useState } from "react";

export default function EditProfilePage() {
  const [isProfileInfo, setIsProfileInfo] = useState(true);
  return (
    <div>
      <ProfileHeader />
      <div className="flex justify-center">
        <Setting
          setIsProfileInfo={setIsProfileInfo}
          isProfileInfo={isProfileInfo}
        />
        {isProfileInfo ? <ProfileInfo /> : <DarkModeItem />}
      </div>
    </div>
  );
}
