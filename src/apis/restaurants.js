import axios from "../configs/axios"

export const filterPageGetRestaurant = async () =>
  await axios.get("/restaurants")

export const getFilterRestaurant = async (filterData) =>
  await axios.get("/restaurants/filter", { params: filterData })
