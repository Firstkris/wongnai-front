import React from "react";
import { useContext } from "react";

import { createContext } from "react";
import { useAuth } from "../../auth/contexts/AuthContext";
import { useState } from "react";

const ProfileContext = createContext();
export default function ProfileContextProvider({ children }) {
  const { setUser, user } = useAuth();

  const [input, setInput] = useState(user);
  const [onEditInfo, setOnEditInfo] = useState(false);

  const handleOnEdit = () => {
    console.log("input", input);
    // setUser(input);
    // setInput()
    setOnEditInfo((c) => !c);
  };

  return (
    <ProfileContext.Provider
      value={{ handleOnEdit, onEditInfo, setOnEditInfo, input, setInput }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => {
  return useContext(ProfileContext);
};
