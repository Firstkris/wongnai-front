import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { RestaurantContextProvider } from "./contexts/RestaurantContext"
import UserContextProvider from "./feature/user/contexts/UserContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <RestaurantContextProvider>
      <App />
    </RestaurantContextProvider>
  </UserContextProvider>
)
