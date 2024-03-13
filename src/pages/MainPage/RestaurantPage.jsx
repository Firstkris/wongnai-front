import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {
  RestaurantDetailCard,
  RestaurantMapCard,
  TitleRestaurantCard,
  RatingRestaurantCard,
} from "../../components/RestaurantPageCard"
import { useRestaurant } from "../../hooks/hooks"
import { Loading } from "../../components/Loading"
import NavRestaurantImg from "./NavRestaurantImg"
import { Breadcrumbs } from "../../components/BreadCrumb"

function RestaurantPage() {
  const { fetchRestaurantAndBookmarkById, restaurantData, isLoading } =
    useRestaurant()
  const params = useParams()

  useEffect(() => {
    fetchRestaurantAndBookmarkById(parseInt(params.id))
  }, [params.id])

  const breadcrumbs = [
    { label: "หน้าหลัก", link: "https://www.google.com" },
    {
      label: "ค้นหาร้านอาหาร",
      link: "http://localhost:5173/restaurants/filter",
    },
    {
      label: `${restaurantData?.restaurant?.restaurantName}`,
    },
  ]

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="max-w-[1024]  flex flex-col items-center bg-gray_primary">
        {/* <div className="w-full">
            <div className="mx-auto flex justify-center my-1">
              <div className="w-[807px] flex flex-col justify-start ">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
              </div>
            </div>
          </div> */}
        {/* image zone  */}
        <div className="w-full">
          <NavRestaurantImg
            restaurantImage={restaurantData?.restaurant?.restaurantImages}
          />
        </div>
        <div className="w-full">
          <div className="mx-auto flex justify-center  w-full gap-4 mt-4">
            <div className="min-w-[567px] flex flex-col gap-4">
              <TitleRestaurantCard
                restaurantData={restaurantData.restaurant}
                bookmarks={restaurantData?.bookmarks}
              />
              <RestaurantMapCard restaurantData={restaurantData.restaurant} />
              <RatingRestaurantCard
                restaurantData={restaurantData.restaurant}
              />
            </div>
            <div className="min-w-56">
              <RestaurantDetailCard
                restaurantData={restaurantData.restaurant}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantPage
