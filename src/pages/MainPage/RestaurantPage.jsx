import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  RestaurantDetailCard,
  RestaurantMapCard,
  TitleRestaurantCard,
} from "../../components/RestaurantPageCard"
import { useRestaurant } from "../../hooks/hooks"
import { Loading } from "../../components/Loading"

function RestaurantPage() {
  const { fetchRestaurantAndBookmarkById, restaurantData, isLoading } =
    useRestaurant()
  const params = useParams()

  useEffect(() => {
    fetchRestaurantAndBookmarkById(parseInt(params.id)) //<<<<
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <div className="max-w-[1024]  flex flex-col items-center bg-gray_primary">
      {/* image zone  */}
      <div className="h-[320px] flex gap-2">
        <img
          className=""
          src="https://img.wongnai.com/p/1600x0/2023/03/01/17147367ec614addb6bb907136a6661a.jpg"
        />
        <img
          className=""
          src="https://img.wongnai.com/p/1600x0/2023/03/01/17147367ec614addb6bb907136a6661a.jpg"
        />
      </div>
      <div className="mx-auto">
        <div className="flex  w-full gap-10">
          <div className="w-9/12">
            <TitleRestaurantCard restaurantData={restaurantData.restaurant} />
            <RestaurantMapCard />
          </div>
          <div className="w-3/12">
            <RestaurantDetailCard restaurantData={restaurantData.restaurant} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantPage
