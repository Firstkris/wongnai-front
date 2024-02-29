import React from "react";
import { DarkModeIcon, ProfileIcon } from "../../../../icons/icon";

export default function Setting() {
  return (
    <div className="pl-24 pr-10  pt-16 flex flex-col gap-5 font-bold w-1/4 border-r-2 min-h-screen">
      <div className="text-xl">ตั้งค่า</div>

      <div className="px-4 py-4 flex gap-2 text-blue_primary bg-blue_secondary rounded-lg hover:bg-blue_secondary_hv cursor-pointer">
        <ProfileIcon className="w-5 h-5" />
        ตั้งค่าโปรไฟล์
      </div>
      <div className="px-4 py-4 flex gap-2 rounded-lg hover:bg-gray_primary_hv cursor-pointer">
        <DarkModeIcon className="w-5 h-5" />
        จอภาพและกาารแสลงผล
      </div>
    </div>
  );
}
