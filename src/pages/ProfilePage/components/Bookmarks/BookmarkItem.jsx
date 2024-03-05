import React from "react";
import { useParams } from "react-router-dom";

export default function BookmarkItem({ bookmark, myBookmark }) {
  const { userId } = useParams();

  return (
    <div className=" bg-white w-1/2 mx-auto rounded-lg mb-5">
      <div className="flex">
        {userId ? (
          <img
            className="w-[150px] h-[150px] rounded-l-lg"
            src={bookmark?.restaurant.profileImg}
          />
        ) : (
          <img
            className="w-[150px] h-[150px] rounded-l-lg"
            src={myBookmark?.restaurant.profileImg}
          />
        )}
        <div className="flex flex-col pl-4 mt-4 gap-2">
          {userId ? (
            <div className="font-bolds">
              {bookmark?.restaurant.restaurantName}
            </div>
          ) : (
            <div className="font-bolds">
              {myBookmark?.restaurant.restaurantName}
            </div>
          )}
          {userId ? (
            <div className="text-gray_secondary text-sm">
              {bookmark?.restaurant.address}
            </div>
          ) : (
            <div className="text-gray_secondary text-sm">
              {myBookmark?.restaurant.address}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
