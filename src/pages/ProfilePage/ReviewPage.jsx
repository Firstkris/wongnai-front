import React from "react";
import ProfileNavReview from "./components/ProfileNavReview";
import ProfileHeader from "./components/ProfileHeader";
import ReviewItem from "./components/ReviewItem";

export default function ReviewPage() {
  return (
    <div>
      <ProfileHeader />
      <ProfileNavReview />
      <ReviewItem />
      <ReviewItem />
    </div>
  );
}
