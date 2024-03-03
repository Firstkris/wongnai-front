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
        categoryId: filterData?.categoryName,
      }

      const response = await getFilterRestaurant(filterDataParams)
      console.log(response.data?.restaurants, "restaurant after filter")
      if (response.data?.restaurants?.length == 0) {
        return
      } else {
        setFilterPageData((prev) => ({
          ...prev,
          restaurants: response.data?.restaurants,
        }))
      }
    } catch (err) {
      fetchFilterPage()
      console.log("pass")
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
