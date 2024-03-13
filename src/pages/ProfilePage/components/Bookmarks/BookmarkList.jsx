import React from "react";
import BookmarkItem from "./BookmarkItem";
import { useParams } from "react-router-dom";

export default function BookmarkList({
  bookmarks,
  myBookmarks,
  setMyBookmarks,
}) {
  const { userId } = useParams();

  return (
    <div>
      {userId ? (
        <>
          {bookmarks.map((bookmark) => (
            <BookmarkItem key={bookmark.id} bookmark={bookmark} />
          ))}
        </>
      ) : (
        <>
          {myBookmarks.map((myBookmark) => (
            <BookmarkItem
              setMyBookmarks={setMyBookmarks}
              key={myBookmark.id}
              myBookmark={myBookmark}
            />
          ))}
        </>
      )}
    </div>
  );
}
