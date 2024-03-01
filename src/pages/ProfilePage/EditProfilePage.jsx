import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import Setting from "./components/EditProfiles/Setting";
import ProfileInfo from "./components/EditProfiles/ProfileInfo";
import DarkModeItem from "./components/DarkModeItem/DarkModeItem";
import { useState } from "react";
import EditPassword from "./components/EditProfiles/EditPassword";

export default function EditProfilePage() {
  const [isProfileInfo, setIsProfileInfo] = useState(true);
  const [isEditPassword, setIsEditPassword] = useState(false);

  return (
    <div>
      <ProfileHeader />
      <div className="flex justify-center">
        <Setting
          setIsProfileInfo={setIsProfileInfo}
          setIsEditPassword={setIsEditPassword}
          isProfileInfo={isProfileInfo}
        />
        {isProfileInfo ? (
          <>
            {isEditPassword ? (
              <EditPassword />
            ) : (
              <ProfileInfo setIsEditPassword={setIsEditPassword} />
            )}
          </>
        ) : (
          <DarkModeItem />
        )}
      </div>
    </div>
  );
}
