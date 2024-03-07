import { useState, createContext } from "react"
import axios from "axios"
import { getCategory, getDistrict, getProvince, getSubDistrict, merchantCreateRestaurant } from "../apis/merchant"
import { useEffect } from "react"

export const RestaurantContext = createContext()

export const RestaurantContextProvider = ({ children }) => {
  const [filterPageData, setFilterPageData] = useState({})
  const [filterInput, setFilterInput] = useState({})

  const [provinces, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subDistrict, setSubDistrict] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchFilterPage = async () => {
    const response = await axios.get(`http://localhost:8000/restaurants`)
    setFilterPageData(response.data)
  }

  // const fetchProvince = async () => {
  //   const res = await getProvince()
  //   // console.log(res.data.province);
  //   setProvince(res.data.province)
  // }

  // const fetchDistrict = async (provinceCode) => {
  //   console.log(provinceCode);
  //   const res = await getDistrict(+provinceCode)
  //   setDistrict(res.data.district)
  // }

  // const fetchSubDistrict = async (districtCode) => {
  //   console.log(districtCode)
  //   const res = await getSubDistrict(+districtCode)
  //   console.log(res.data.subDistrict)
  //   setSubDistrict(res.data.subDistrict)
  // }

  // const fetchCategory = async () => {
  //   const res = await getCategory()
  //   setCategory(res.data.categories)
  // }

  // const createRestaurant = async (data) => {
  //   const res = await merchantCreateRestaurant(data)
  //   console.log(res);
  // }



  console.log(filterInput)
  return (
    <RestaurantContext.Provider
      value={{
        filterPageData,
        setFilterInput,
        fetchFilterPage,
        filterInput,
        // fetchProvince,
        // provinces,
        // district,
        // fetchDistrict,
        // subDistrict,
        // fetchSubDistrict,
        // category,
        // createRestaurant
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
}
