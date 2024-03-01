import { useContext } from "react"
import { RestaurantContext } from "../contexts/RestaurantContext"

export const useRestaurant = () => {
  return useContext(RestaurantContext)
}
