import React from "react";
import ProfileNavReview from "./components/Reviews/ProfileNavReview";
import ProfileHeader from "./components/ProfileHeader";
import ReviewItem from "./components/Reviews/ReviewItem";

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
