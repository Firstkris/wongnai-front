import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import * as merchantApi from "../../../apis/merchant";
import * as Token from "../../../utils/local-storage";
import { createContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const MerchantAuthContext = createContext();
export default function MerchantAuthContextProvider({ children }) {
  const [merchant, setMerchant] = useState(null);
  // const [review, setReview] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  const getMerchant = async () => {
    console.log(Token.getTokenMerchant());
    if (Token.getTokenMerchant()) {
      const data = await axios.get(
        "http://localhost:8000/merchant/getMerchant",
        // { headers: `Bearer ${Token.getTokenMerchant()}` }
        { headers: { Authorization: `Bearer ${Token.getTokenMerchant()}` } }
      );
      console.log("data.data.merchant", data.data.merchant);
      setMerchant(data.data.merchant);
    }
  };

  useEffect(() => {
    getMerchant();
  }, []);

  const logout = () => {
    setMerchant(null);
    Token.clearToken();
    <Link to="/merchant/login" />;
  };

  const merchantRegister = async (merchant) => {
    const res = await merchantApi.register(merchant);
    setMerchant(res.data.newUser);
    console.log(res.data.token);
    Token.setToken(res.data.token);
  };

  return (
    <MerchantAuthContext.Provider
      value={{
        initialLoading,
        merchant,
        setMerchant,
        merchantRegister,
        setInitialLoading,
        logout,
      }}
    >
      {children}
    </MerchantAuthContext.Provider>
  );
}

export const useMerchant = () => {
  return useContext(MerchantAuthContext);
};
