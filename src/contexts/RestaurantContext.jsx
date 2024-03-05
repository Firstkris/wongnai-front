import { useState, createContext } from "react"
import {
  filterPageGetRestaurant,
  getFilterRestaurant,
  getUserBookmark,
} from "../apis/restaurants"
import { useAuth } from "../feature/auth/contexts/AuthContext"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [filterPageData, setFilterPageData] = useState({})
  const [filterInput, setFilterInput] = useState({})
  const [isLoading, setLoading] = useState(false)

  const { user } = useAuth()

  const fetchFilterPage = async () => {
    try {
      // setLoading(true)
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
        return console.log("no filter")
      } else if (Object.values(filterData).every((arr) => arr.length === 0)) {
        return fetchFilterPage()
      }
      const filterDataParams = {
        districtId: filterData?.districtNameTh,
        facilityId: filterData?.facilityName,
        rating: filterData?.rating,
        priceLength: filterData?.priceLength,
        categoryId: filterData?.categoryName,
      }
      // if no user login >> other path
      const response = await getFilterRestaurant(filterDataParams)

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
    try {
      setFilterInput({})
      if (!user) {
        fetchFilterPage()
      } else {
        fetchRestaurantWithUserLogin()
      }
    } catch (err) {
      console.log(err)
    }
  }

  const fetchRestaurantWithUserLogin = async () => {
    //if user is login
    try {
      const response = await getUserBookmark()
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
