import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import * as userApi from "../../../apis/user";
import * as Token from "../../../utils/local-storage";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UserContext = createContext();
export default function UserContextProvider({ children }) {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const logout = () => {
    setUser(null);
    Token.clearToken();
    toast.success("Logout success");
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
