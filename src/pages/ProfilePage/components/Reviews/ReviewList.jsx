import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as userApi from "../../../../apis/user";
import ReviewItem from "./ReviewItem";

export default function ReviewList() {
  const { userId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [myReviews, setMyReviews] = useState([]);

  const [otherUser, setOtherUser] = useState({});

  useEffect(() => {
    userApi
      .getUserById(userId)
      .then((res) => {
        setOtherUser(res.data.user);
        setReviews(res.data.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
    userApi
      .fetchMe()
      .then((res) => {
        setMyReviews(res.data.reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!userId ? (
        <>
          {myReviews.map((myReview) => (
            <ReviewItem key={myReview.id} myReview={myReview} />
          ))}
        </>
      ) : (
        <>
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} otherUser={otherUser} />
          ))}
        </>
      )}
    </div>
  );
}
