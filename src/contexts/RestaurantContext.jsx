import { useState, createContext } from "react"
import {
  filterPageGetRestaurant,
  getFilterRestaurant,
  getUserBookmark,
} from "../apis/restaurants"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [filterPageData, setFilterPageData] = useState({})
  const [filterInput, setFilterInput] = useState({})
  const [isLoading, setLoading] = useState(false)

  const fetchFilterPage = async () => {
    try {
      setLoading(true)
      const response = await filterPageGetRestaurant()
      setFilterPageData(response.data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
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
      if (response.data?.restaurants?.length > 0) {
        setFilterPageData((prev) => ({
          ...prev,
          restaurants: response.data?.restaurants,
        }))
      } else {
        setFilterPageData((prev) => ({
          ...prev,
          restaurants: [],
        }))
      }
    } catch (err) {
      console.log("error")
    }
  }

  const clearFilters = () => {
    setFilterInput({})
    fetchFilterPage()
  }

  const fetchRestaurantWithUserLogin = async () => {
    //if user is login
    try {
      const response = await getUserBookmark()
      console.log(response.data.restaurants)
      setFilterPageData((prev) => ({
        ...prev,
        restaurants: response.data?.restaurants,
      }))
    } catch (err) {
      console.log(err)
    }
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
        fetchRestaurantWithUserLogin,
        isLoading,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  )
}
