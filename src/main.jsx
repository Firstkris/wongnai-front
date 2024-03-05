import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { RestaurantContextProvider } from "./contexts/RestaurantContext"
import AuthContextProvider from "./feature/auth/contexts/AuthContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RestaurantContextProvider>
      <App />
    </RestaurantContextProvider>
  </AuthContextProvider>
)
