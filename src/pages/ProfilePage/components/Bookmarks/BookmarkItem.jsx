import React from "react";
import { useParams } from "react-router-dom";
import { CrossIcon } from "../../../../icons/icon";
import { useUser } from "../../../../feature/user/contexts/UserContext";
import { Link } from "react-router-dom";

export default function BookmarkItem({ bookmark, myBookmark, setMyBookmarks }) {
  const { userId } = useParams();
  const { deleteBookmarkById } = useUser();

  // console.log("bookmark", bookmark);
  console.log("myBookmark", myBookmark);

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
              <Link
                to={`/restaurants/${bookmark?.restaurantId}`}
                className="font-bolds"
              >
                {bookmark?.restaurant.restaurantName}
              </Link>
            </>
          ) : (
            <Link
              to={`/restaurants/${myBookmark?.restaurantId}`}
              className="flex justify-between font-bolds pr-4 "
            >
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
            </Link>
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
