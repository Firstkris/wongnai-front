import React from "react";
import { useParams } from "react-router-dom";
import { CrossIcon } from "../../../../icons/icon";
import { useUser } from "../../../../feature/user/contexts/UserContext";

export default function BookmarkItem({ bookmark, myBookmark, setMyBookmarks }) {
  const { userId } = useParams();
  const { deleteBookmarkById } = useUser();

  return (
    <div className=" bg-white w-1/2 mx-auto rounded-lg mb-5">
      <div className="flex ">
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
        <div
          className="flex flex-col w-full
        pl-4 mt-4 gap-2"
        >
          {userId ? (
            <>
              <div className="font-bolds">
                {bookmark?.restaurant.restaurantName}
              </div>
            </>
          ) : (
            <div className="flex justify-between font-bolds pr-4 ">
              {myBookmark?.restaurant.restaurantName}
              <div
                onClick={() => {
                  console.log("**********", myBookmark?.id);
                  console.log("myBookmark", myBookmark);
                  setMyBookmarks((r) =>
                    r.filter((item) => item.id != myBookmark?.id)
                  );
                  deleteBookmarkById(myBookmark?.restaurant.id);
                }}
              >
                <CrossIcon className={"cursor-pointer"} />
              </div>
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
