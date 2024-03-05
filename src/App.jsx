import React from "react"
import Router from "./route/index"
import AuthContextProvider from "./feature/auth/contexts/AuthContext"
import ProfileContextProvider from "./feature/Profiles/context/ProfileContext"

function App() {
  return (
    <AuthContextProvider>
      <ProfileContextProvider>
        <Router />
      </ProfileContextProvider>
    </AuthContextProvider>
  )
}

export default App
