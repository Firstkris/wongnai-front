import React from "react";
import { Link } from "react-router-dom";

export default function ProfileNavBookMark() {
  return (
    <div className="flex w-1/2 m-auto py-10">
      <div className="relative bg-white grow text-red_primary  text-center font-bold  rounded-l-lg py-4 text-lg ">
        รายการที่บันทึกไว้
        <div className="absolute bottom-0 inset-x-1/2 transform -translate-x-1/2 border-b-4 border-red_primary w-2/5"></div>
      </div>
      <Link
        to={"/profile/review"}
        className="bg-white grow text-center border-l-2 border-gray_primary rounded-r-lg py-4 text-lg"
      >
        รีวิว
      </Link>
    </div>
  );
}
