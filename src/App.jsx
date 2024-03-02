import React from "react";
import Router from "./route/index";
import AuthContextProvider from "./feature/auth/contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
