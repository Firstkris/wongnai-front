import React from "react";
import Router from "./route/index";
import ProfileContextProvider from "./feature/Profiles/context/ProfileContext";
import UserContextProvider from "./feature/ีuser/contexts/UserContext";
import { ToastContainer, Slide } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
        transition={Slide}
      />
      <UserContextProvider>
        <ProfileContextProvider>
          <Router />
        </ProfileContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
