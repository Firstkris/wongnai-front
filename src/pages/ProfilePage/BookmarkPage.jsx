import React from "react";
import ProfileHeader from "./components/ProfileHeader";
import ProfileNavBookMark from "./components/Bookmarks/ProfileNavBookMark";
import * as userApi from "../../apis/user";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BookmarkList from "./components/Bookmarks/BookmarkList";
import { Loading } from "../../components/Loading";
import { useUser } from "../../feature/user/contexts/UserContext";

export default function BookmarkPage() {
  const { onFetch } = useUser();
  const { userId } = useParams();
  const [otherUser, setOtherUser] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [myBookmarks, setMyBookmarks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

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
        console.log(res.data.bookmarks);
        setMyBookmarks(res.data.bookmarks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [onFetch]);

  return isLoading ? (
    <div className=" flex justify-center items-center h-screen bg-opacity-50">
      <Loading />
    </div>
  ) : (
    <div>
      <ProfileHeader otherUser={otherUser} />
      <ProfileNavBookMark />
      <BookmarkList bookmarks={bookmarks} myBookmarks={myBookmarks} />
    </div>
  );
}
