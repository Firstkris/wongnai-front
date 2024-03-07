import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import * as merchantApi from "../../../apis/merchant";
import * as userApi from "../../../apis/user";
import * as Token from "../../../../src/utils/local-storage";
import { createContext } from "react";

const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
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
    if (Token.getToken()) {
      merchantApi
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

  const logout = () => {
    setUser(null);
    Token.clearToken();
  };

  const merchantRegister = async merchant => {
    const res = await merchantApi.register(merchant);
    setUser(res.data.newUser);
    Token.setToken(res.data.accessToken);
  };

  const merchantLogin = async credential => {
    const res = await merchantApi.login(credential);
    setUser(res.data.merchant);
    Token.setToken(res.data.accessToken);
  };
  return (
    <AuthContext.Provider
      value={{ user, setUser,merchantLogin, initialLoading, merchantRegister,setInitialLoading, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
