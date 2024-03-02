import { useState, createContext } from "react"
import {
  filterPageGetRestaurant,
  getFilterRestaurant,
} from "../apis/restaurants"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [filterPageData, setFilterPageData] = useState({})
  const [filterInput, setFilterInput] = useState({})

  const fetchFilterPage = async () => {
    try {
      const response = await filterPageGetRestaurant()
      setFilterPageData(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchFilterData = async (filterData) => {
    try {
      if (Object.keys(filterData).length === 0) {
        console.log("no filter")
      }
      const response = await getFilterRestaurant(filterData)
      console.log(response.data)
      // setFilterPageData(response.data)
      // const queryParams = Object.keys(filterData)
      //   .map((key) => {
      //     return `${key}=${filterData[key]}`
      //   })
      //   .join("&")
      // console.log(queryParams, "Params")
      //setFilterPageData(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(filterInput)
  return (
    <RestaurantContext.Provider
      value={{
        filterPageData,
        setFilterInput,
        fetchFilterPage,
        filterInput,
        fetchFilterData,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  )
}
