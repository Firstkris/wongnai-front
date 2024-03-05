import React from "react";
import { StarIcon } from "../../../../icons/icon";
import { useUser } from "../../../../feature/ีuser/contexts/UserContext";
import { useParams } from "react-router-dom";

export default function ReviewItem({ otherUser, review }) {
  const { user } = useUser();
  const { userId } = useParams();

  const starIcon = [];
  for (let i = 0; i < review?.star; i++) {
    starIcon.push(<StarIcon className="w-4 h-4 fill-red_primary" />);
  }

  return (
    <div className="w-1/2 mx-auto bg-white rounded-lg min-h-[300px] p-4 mb-10">
      {userId ? (
        <h1 className="font-bold text-xl mb-5">
          รีวิว {review.restaurant?.restaurantName}{" "}
        </h1>
      ) : (
        <h1 className="font-bold text-xl mb-5">
          รีวิว BONHOMIE CRAFT BEER BAR
        </h1>
      )}
      <div className="flex gap-4">
        {userId ? (
          <img
            className="h-[50px] w-[50px] object-cover rounded-full"
            src={otherUser?.imgProfile}
          />
        ) : (
          <img
            className="h-[50px] w-[50px] object-cover rounded-full"
            src={user?.imgProfile}
          />
        )}
        <div>
          <div className="text-sm">
            {userId ? (
              <div>{/* {otherUser.name} */}</div>
            ) : (
              <>
                <span className="font-bold">{user?.name}</span> รีวิว{" "}
              </>
            )}
            {userId ? (
              <span className="font-bold">
                {review.restaurant?.restaurantName}{" "}
              </span>
            ) : (
              <span className="font-bold">BONHOMIE CRAFT BEER BAR </span>
            )}
          </div>
          <div className="text-xs text-gray_secondary pr-3  mt-1.5">
            เมื่อ 2 วันที่แล้ว
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 mt-2">
        {userId ? (
          <>{starIcon}</>
        ) : (
          <StarIcon className="w-4 h-4 fill-red_primary" />
        )}
      </div>
      <div>
        <div className="text-sm font-bold mt-3">{review?.title}</div>
        {/* <div className="text-sm mt-3">ราคาต่อหัว : 501 - 1,000 บาท </div> */}
        <div className="text-sm mt-3">{review?.description}</div>
        <div className="flex justify-around mt-5 pb-2">
          {userId ? (
            <>
              {review.reviewImgs.map((a) => (
                <img className="w-2/5 h-1/5 object-cover " src={a.img} />
              ))}{" "}
            </>
          ) : (
            <img
              className="aspect-video w-2/5 h-1/5 object-cover "
              src="https://img.wongnai.com/p/400x0/2024/02/29/aa961f815e844974990ce348d50a8bf2.jpg"
            />
          )}
        </div>
      </div>
    </div>
  );
}
