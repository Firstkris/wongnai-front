import React from "react";
import ProfileNavReview from "./components/Reviews/ProfileNavReview";
import ProfileHeader from "./components/ProfileHeader";
import ReviewList from "./components/Reviews/ReviewList";

export default function ReviewPage() {
  return (
    <div>
      <ProfileHeader />
      <ProfileNavReview />
      <ReviewList />
    </div>
  );
}
