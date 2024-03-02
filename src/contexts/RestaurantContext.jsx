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
      const filterDataParams = {
        districtId: filterData?.districtNameTh,
        facilityId: filterData?.facilityName,
        rating: filterData?.rating,
        priceLength: filterData?.priceLength,
      }

      const response = await getFilterRestaurant(filterDataParams)
      console.log(response.data, "data after filter")
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

  const clearFilters = () => {
    setFilterInput({})
  }

  return (
    <RestaurantContext.Provider
      value={{
        filterPageData,
        setFilterInput,
        fetchFilterPage,
        filterInput,
        fetchFilterData,
        clearFilters,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  )
}
