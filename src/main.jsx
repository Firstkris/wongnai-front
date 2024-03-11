import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RestaurantContextProvider } from "./contexts/RestaurantContext";
import UserContextProvider from "./feature/user/contexts/UserContext";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <RestaurantContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </RestaurantContextProvider>
  </UserContextProvider>
);
