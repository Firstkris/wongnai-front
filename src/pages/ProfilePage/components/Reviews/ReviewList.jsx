import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as userApi from "../../../../apis/user";
import ReviewItem from "./ReviewItem";

export default function ReviewList() {
  const { userId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [otherUser, setOtherUser] = useState({});

  useEffect(() => {
    userApi
      .getUserById(userId)
      .then((res) => {
        setOtherUser(res.data.user);
        setReviews(res.data.reviews);
        console.log("otherUser", otherUser);
        console.log("reviews", reviews);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} otherUser={otherUser} />
      ))}
    </div>
  );
}
