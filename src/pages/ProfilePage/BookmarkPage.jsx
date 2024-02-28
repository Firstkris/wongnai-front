import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileNavBookMark from "./components/ProfileNavBookMark";
import BookmarkItem from "./components/BookmarkItem";

export default function BookmarkPage() {
  return (
    <div>
      <ProfileHeader />
      <ProfileNavBookMark />
      {/* <ProfileNavReview /> */}
      <BookmarkItem />
      <BookmarkItem />
      <BookmarkItem />
    </div>
  );
}
