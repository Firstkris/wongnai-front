import { useState, createContext } from "react"
import axios from "axios"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [filterPageData, setFilterPageData] = useState({})

  const fetchFilterPage = async () => {
    const response = await axios.get(`http://localhost:8000/restaurants`)
    setFilterPageData(response.data)
  }

  return (
    <RestaurantContext.Provider value={{ filterPageData, fetchFilterPage }}>
      {children}
    </RestaurantContext.Provider>
  )
}
