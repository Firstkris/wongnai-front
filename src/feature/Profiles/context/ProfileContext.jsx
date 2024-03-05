import React from "react"
import { useContext } from "react"

import { createContext } from "react"
import { useState } from "react"
import { useUser } from "../../user/contexts/UserContext"

const ProfileContext = createContext()
export default function ProfileContextProvider({ children }) {
  // const { setUser, user } useUser();

  // const [input, setInput] = useState(user);
  // const [onEditInfo, setOnEditInfo] = useState(false);

  // const handleOnEdit = () => {
  //   console.log("input", input);
  //   // setUser(input);
  //   // setInput()
  //   setOnEditInfo((c) => !c);
  // };

  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  )
}

export const useProfile = () => {
  return useContext(ProfileContext)
}
