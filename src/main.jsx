import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { RestaurantContextProvider } from "./contexts/RestaurantContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <RestaurantContextProvider>
    <App />
  </RestaurantContextProvider>
)
