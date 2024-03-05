import { useContext } from "react";
import { RestaurantContext } from "../contexts/RestaurantContext";


export default function useRestaurantContext() {
    return useContext(RestaurantContext)
}
