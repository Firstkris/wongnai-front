import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import * as userApi from "../../../apis/user";
import * as Token from "../../../utils/local-storage";
import { createContext } from "react";
import { useParams } from "react-router-dom";

const UserContext = createContext();
export default function UserContextProvider({ children }) {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  // const [otherUser, setOtherUser] = useState({});
  const [loading, setLoading] = useState(true);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (Token.getToken()) {
      userApi
        .fetchMe()
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  // useEffect(() => {
  //   userApi
  //     .getUserById(userId)
  //     .then((res) => {
  //       setOtherUser(res.data.user);
  //       setReviews(res.data.reviews);
  //       console.log("otherUser", otherUser);
  //       console.log("reviews", reviews);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const logout = () => {
    setUser(null);
    Token.clearToken();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout,
        //  otherUser,
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  return useContext(UserContext);
};
