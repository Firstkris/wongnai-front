import { useState, createContext } from "react"
import axios from "axios"
import { getProvince } from "../apis/merchant"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [filterPageData, setFilterPageData] = useState({})
  const [filterInput, setFilterInput] = useState({})

  const [provinces, setProvince] = useState([]);

  const fetchFilterPage = async () => {
    const response = await axios.get(`http://localhost:8000/restaurants`)
    setFilterPageData(response.data)
  }

  const fetchProvince = async () => {
    const res = await getProvince()
    console.log(res.data.province);
    setProvince(res.data.province)
  }

  console.log(filterInput)
  return (
    <RestaurantContext.Provider
      value={{ filterPageData, setFilterInput, fetchFilterPage, filterInput, fetchProvince, provinces }}
    >
      {children}
    </RestaurantContext.Provider>
  )
}
