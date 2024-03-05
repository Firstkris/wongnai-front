import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileNavBookMark from "./components/Bookmarks/ProfileNavBookMark";
import BookmarkItem from "./components/Bookmarks/BookmarkItem";
import * as userApi from "../../apis/user";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BookmarkList from "./components/Bookmarks/BookmarkList";

export default function BookmarkPage() {
  const { userId } = useParams();
  const [otherUser, setOtherUser] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [myBookmarks, setMyBookmarks] = useState([]);

  useEffect(() => {
    userApi
      .getUserById(userId)
      .then((res) => {
        setOtherUser(res.data.user);
        setBookmarks(res.data.bookmarks);
      })
      .catch((err) => {
        console.log(err);
      });
    userApi
      .fetchMe()
      .then((res) => {
        setMyBookmarks(res.data.bookmarks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ProfileHeader otherUser={otherUser} />
      <ProfileNavBookMark />
      <BookmarkList bookmarks={bookmarks} myBookmarks={myBookmarks} />
    </div>
  );
}
