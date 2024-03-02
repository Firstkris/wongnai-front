import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import * as userApi from "../../../apis/user";
import * as Token from "../../../../src/utils/local-storage";
import { createContext } from "react";

const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  // const [review, setReview] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

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
        .finally(() => setInitialLoading(false));
    } else {
      setInitialLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, initialLoading, setInitialLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
