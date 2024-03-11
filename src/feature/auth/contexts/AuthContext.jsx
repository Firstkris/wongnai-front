import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import * as merchantApi from "../../../apis/merchant";
import * as Token from "../../../../src/utils/local-storage";
import { createContext } from "react";

const MerchantAuthContext = createContext();
export default function MerchantAuthContextProvider({ children }) {
  const [merchant, setMerchant] = useState(null);
  // const [review, setReview] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  console.log("merchant", merchant);

  useEffect(() => {
    if (Token.getToken()) {
      merchantApi
        .fetchMe()
        .then((res) => {
          setMerchant(res.data.merchant);
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
    setMerchant(null);
    Token.clearToken();
  };

  const merchantRegister = async (merchant) => {
    const res = await merchantApi.register(merchant);
    setMerchant(res.data.newUser);
    Token.setToken(res.data.accessToken);
  };

  return (
    <MerchantAuthContext.Provider
      value={{
        merchant,
        initialLoading,
        merchantRegister,
        setInitialLoading,
        logout,
      }}
    >
      {children}
    </MerchantAuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(MerchantAuthContext);
};
