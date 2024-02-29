import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import Setting from "./components/EditProfiles/Setting";
import ProfileInfo from "./components/EditProfiles/ProfileInfo";

export default function EditProfilePage() {
  return (
    <div>
      <ProfileHeader />
      <div className="flex justify-center">
        <Setting />
        <ProfileInfo />
      </div>
    </div>
  );
}
