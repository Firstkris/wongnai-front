import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProfileNavReview() {
  const { userId } = useParams();

  return (
    <div className="flex w-1/2 m-auto py-10">
      <div className=" relative bg-white grow text-center  text-red_primary font-bold rounded-l-lg py-4 text-lg">
        รีวิว
        <div className="absolute bottom-0 inset-x-1/2 transform -translate-x-1/2 border-b-4 border-red_primary w-1/4"></div>
      </div>
      {userId ? (
        <Link
          to={`/profile/Bookmark/${userId}`}
          className=" bg-white grow border-l-2 border-gray_primary text-center   rounded-r-lg py-4 text-lg "
        >
          รายการที่บันทึกไว้
        </Link>
      ) : (
        <Link
          to={"/profile/Bookmark"}
          className=" bg-white grow border-l-2 border-gray_primary text-center  rounded-r-lg py-4 text-lg "
        >
          รายการที่บันทึกไว้
        </Link>
      )}
    </div>
  );
}
