import React from "react";
import { CrossIcon, StarIcon } from "../../../../icons/icon";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../../../feature/user/contexts/UserContext";

export default function ReviewItem({ otherUser, review, myReview }) {
  const { user, deleteReviewById } = useUser();
  const { userId } = useParams();

  const [isToggle, setIsToggle] = useState(false);

  // console.log("myReview.id", myReview.id);

  const agoTime = () => {
    let reviewPostTime;
    if (review) {
      reviewPostTime = new Date(review?.createdAt);
    } else if (myReview) {
      reviewPostTime = new Date(myReview?.createdAt);
    }
    const currentTime = new Date();
    const timeDifferenceInHours = Math.round(
      (currentTime - reviewPostTime) / (1000 * 60 * 60)
    );
    // console.log("timeDifferenceInHours", timeDifferenceInHours);
    if (timeDifferenceInHours < 24) {
      return `เมื่อ ${timeDifferenceInHours} ชั่วโมงที่แล้ว`;
    } else {
      return `เมื่อ ${Math.round(timeDifferenceInHours / 24)} วันที่แล้ว`;
    }
  };

  const otherUserStarIcon = [];
  for (let i = 0; i < review?.star; i++) {
    otherUserStarIcon.push(<StarIcon className="w-4 h-4 fill-red_primary" />);
  }

  const myUserStarIcon = [];
  for (let i = 0; i < myReview?.star; i++) {
    myUserStarIcon.push(<StarIcon className="w-4 h-4 fill-red_primary" />);
  }

  return (
    <div className="w-1/2 mx-auto bg-white rounded-lg min-h-[300px] p-4 mb-10">
      {userId ? (
        <h1 className="font-bold text-xl mb-5">
          รีวิว {review.restaurant?.restaurantName}
        </h1>
      ) : (
        <div className="flex justify-between">
          <h1 className="font-bold text-xl mb-5">
            รีวิว {myReview.restaurant?.restaurantName}
          </h1>
          <div
            className="cursor-pointer"
            onClick={() => deleteReviewById(myReview.id)}
          >
            <CrossIcon />
          </div>
        </div>
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
              <>
                <span className="font-bold">{otherUser?.name}</span> รีวิว{" "}
              </>
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
              <span className="font-bold">
                {myReview.restaurant?.restaurantName}{" "}
              </span>
            )}
          </div>
          <div className="text-xs text-gray_secondary pr-3  mt-1.5">
            {agoTime()}
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 mt-2">
        {userId ? <>{otherUserStarIcon}</> : <>{myUserStarIcon}</>}
      </div>
      <div>
        {userId ? (
          <div className="text-sm font-bold mt-3">{review?.title}</div>
        ) : (
          <div className="text-sm font-bold mt-3">{myReview?.title}</div>
        )}
        {/* <div className="text-sm mt-3">ราคาต่อหัว : 501 - 1,000 บาท </div> */}
        {userId ? (
          <div className="text-sm mt-3">{review?.description}</div>
        ) : (
          <div className="text-sm mt-3">{myReview?.description}</div>
        )}
        {/* <div className="flex justify-around mt-5 pb-2"> */}
        <div className="relative grid grid-cols-3 gap-4 mt-5 ">
          {userId ? (
            <>
              {!isToggle ? (
                <>
                  {review.reviewImgs.slice(0, 3).map((a) => (
                    <img
                      className=" aspect-video object-cover h-full w-full "
                      src={a.img}
                      alt="Review Image"
                    />
                  ))}{" "}
                  {review.reviewImgs.length >= 3 ? (
                    <div
                      className="absolute right-0 flex justify-center items-center bg-black opacity-70 aspect-video h-full w-1/3 text-white text-4xl  cursor-pointer"
                      onClick={() => setIsToggle((c) => !c)}
                    >
                      <div>+{review.reviewImgs?.length - 3}</div>
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  {review.reviewImgs.map((a) => (
                    <img
                      className="aspect-video object-cover h-full w-full"
                      src={a.img}
                      alt="Review Image"
                    />
                  ))}{" "}
                </>
              )}
            </>
          ) : (
            <>
              {!isToggle ? (
                <>
                  {myReview.reviewImgs.slice(0, 3).map((a) => (
                    <img
                      className=" aspect-video object-cover h-full w-full"
                      src={a.img}
                      alt="Review Image"
                    />
                  ))}{" "}
                  {myReview.reviewImgs.length >= 3 ? (
                    <div
                      className="absolute right-0 flex justify-center items-center  bg-black opacity-70 aspect-video h-full w-1/3 text-white text-4xl cursor-pointer"
                      onClick={() => setIsToggle((c) => !c)}
                    >
                      <div>+{myReview.reviewImgs?.length - 3}</div>
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  {myReview.reviewImgs.map((a) => (
                    <img
                      className="aspect-video object-cover h-full w-full"
                      src={a.img}
                      alt="Review Image"
                    />
                  ))}{" "}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
