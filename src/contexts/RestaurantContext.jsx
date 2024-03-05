import { useState, createContext } from "react"
import {
  filterPageGetRestaurant,
  getFilterRestaurant,
  getUserBookmark,
} from "../apis/restaurants"
import { useUser } from "../feature/user/contexts/UserContext"

import {
  getCategory,
  getDistrict,
  getProvince,
  getSubDistrict,
  merchantCreateRestaurant,
} from "../apis/merchant"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [filterPageData, setFilterPageData] = useState({})
  const [filterInput, setFilterInput] = useState({ rating: [] })
  const [isLoading, setLoading] = useState(false)

  const { user } = useUser()

  const [provinces, setProvince] = useState([])
  const [district, setDistrict] = useState([])
  const [subDistrict, setSubDistrict] = useState([])
  const [category, setCategory] = useState([])

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

  const fetchProvince = async () => {
    const res = await getProvince()
    // console.log(res.data.province);
    setProvince(res.data.province)
  }

  const fetchDistrict = async (provinceCode) => {
    const res = await getDistrict(+provinceCode)
    setDistrict(res.data.district)
  }

  const fetchSubDistrict = async (districtCode) => {
    const res = await getSubDistrict(+districtCode)
    console.log(res.data.subDistrict)
    setSubDistrict(res.data.subDistrict)
  }

  const fetchCategory = async () => {
    const res = await getCategory()
    setCategory(res.data.categories)
  }

  const createRestaurant = async (data) => {
    const res = await merchantCreateRestaurant(data)
    console.log(res)
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
        fetchProvince,
        provinces,
        district,
        fetchDistrict,
        subDistrict,
        fetchSubDistrict,
        category,
        createRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  )
}
