import React from "react";
import CreateReviewForm from "./components/CreateReviewForm";
import ReviewRestaurantCard from "./components/ReviewRestaurantCard";

function UserReview() {
  return (
    <div className=" max-w-[1024] w-10/12 mx-auto flex flex-col items-center bg-gray_primary ">
      <ReviewRestaurantCard />
      <CreateReviewForm />
    </div>
  );
}

export default UserReview;
