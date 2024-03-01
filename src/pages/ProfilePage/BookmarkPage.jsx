import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileNavBookMark from "./components/Bookmarks/ProfileNavBookMark";
import BookmarkItem from "./components/Bookmarks/BookmarkItem";

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
