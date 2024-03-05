import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as userApi from "../../../apis/user";
import axios from "axios";
import ProfileNavReview from "./Reviews/ProfileNavReview";
import ProfileHeader from "./ProfileHeader";
import ReviewItem from "./Reviews/ReviewItem";
import ReviewList from "./Reviews/ReviewList";

export default function OtherUserProfilePage() {
  const { userId } = useParams();
  const [otherUser, setOtherUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userApi
      .getUserById(userId)
      .then((res) => {
        setOtherUser(res.data.user);
        console.log("otherUser", otherUser);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <ProfileHeader otherUser={otherUser} />
      <ProfileNavReview />
      <ReviewList />
      {/* <ReviewItem otherUser={otherUser} /> */}
    </>
  );
}
