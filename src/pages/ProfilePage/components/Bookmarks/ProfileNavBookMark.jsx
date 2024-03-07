import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProfileNavBookMark() {
  const { userId } = useParams();

  return (
    <div className="flex w-1/2 m-auto py-10">
      {userId ? (
        <Link
          to={`/profile/${userId}`}
          className="bg-white grow text-center border-r-2 border-gray_primary rounded-l-lg py-4 text-lg"
        >
          รีวิว
        </Link>
      ) : (
        <Link
          to={"/profile"}
          className="bg-white grow text-center border-r-2 border-gray_primary rounded-l-lg py-4 text-lg"
        >
          รีวิว
        </Link>
      )}
      <div className="relative bg-white grow text-red_primary  text-center font-bold  rounded-r-lg py-4 text-lg ">
        รายการที่บันทึกไว้
        <div className="absolute bottom-0 inset-x-1/2 transform -translate-x-1/2 border-b-4 border-red_primary w-2/5"></div>
      </div>
    </div>
  );
}
