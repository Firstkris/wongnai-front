import React from "react";
import { DarkModeIcon, ProfileIcon } from "../../../../icons/icon";
import { Link } from "react-router-dom";

export default function Setting({
  setIsProfileInfo,
  isProfileInfo,
  setIsEditPassword,
}) {
  const className1 = isProfileInfo
    ? "text-blue_primary bg-blue_secondary hover:bg-blue_secondary_hv cursor-pointer"
    : " hover:bg-gray_primary_hv";
  const className2 = !isProfileInfo
    ? "text-blue_primary bg-blue_secondary hover:bg-blue_secondary_hv cursor-pointer"
    : "hover:bg-gray_primary_hv";

  const handleOnProfile = () => {
    setIsProfileInfo(true);
    setIsEditPassword(false);
  };

  return (
    <div className="pl-24 pr-10  pt-16 flex flex-col gap-5 font-bold w-1/4 border-r-2 min-h-screen">
      <div className="text-xl">ตั้งค่า</div>

      <div
        to={"/profile/EditProfile"}
        onClick={handleOnProfile}
        className={`px-4 py-4 flex gap-2 rounded-lg cursor-pointer  ${className1}`}
      >
        <ProfileIcon className="w-5 h-5" />
        ตั้งค่าโปรไฟล์
      </div>
      <div
        onClick={() => setIsProfileInfo(false)}
        to={"/profile/settingDarkMode"}
        className={`px-4 py-4 flex gap-2 rounded-lg cursor-pointer  ${className2}`}
      >
        <DarkModeIcon className="w-5 h-5" />
        จอภาพและกาารแสลงผล
      </div>
    </div>
  );
}
