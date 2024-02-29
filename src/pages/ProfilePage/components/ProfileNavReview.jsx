import React from "react";
import { Link } from "react-router-dom";

export default function ProfileNavReview() {
  return (
    <div className="flex w-1/2 m-auto py-10">
      <Link
        to={"/profile"}
        className=" bg-white grow border-r-2 border-gray_primary text-center   rounded-l-lg py-4 text-lg "
      >
        รายการที่บันทึกไว้
      </Link>
      <div className=" relative bg-white grow text-center  text-red_primary font-bold rounded-r-lg py-4 text-lg">
        รีวิว
        <div className="absolute bottom-0 inset-x-1/2 transform -translate-x-1/2 border-b-4 border-red_primary w-1/4"></div>
      </div>
    </div>
  );
}
