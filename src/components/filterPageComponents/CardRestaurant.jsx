import { BookmarkIcon } from "../BookmarkIcon"
import { useNavigate } from "react-router-dom"
import { ReviewScore } from "../ReviewScore"
import { ImageRender } from "./ImageRender"
export const CardRestaurant = ({ restaurant }) => {
  const navigate = useNavigate()
  const handleClickCard = () => {
    navigate(`/restaurants/${restaurant.id}`)
  }
  return (
    <div onClick={handleClickCard} className="w-full cursor-pointer">
      <div className="flex flex-col gap-2 p-4 bg-white rounded-lg   w-[480px] shadow-md">
        <div className="flex gap-2">
          {restaurant?.restaurantImages && (
            <ImageRender restaurantImages={restaurant?.restaurantImages} />
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <div className="group font-semibold gap-2 flex items-baseline ">
              <span className="text-xl font-semibold text-gray-600 group-hover:text-black ">
                {restaurant.restaurantName}
              </span>
              <span className="text-gray_secondary text-md font-semibold ">
                {restaurant.subtitle}
              </span>
            </div>

            <div className="flex gap-2 items-center">
              {restaurant.reviewPoint / restaurant.reviewCount >= 3 && (
                <span>
                  <ReviewScore
                    score={restaurant.reviewPoint / restaurant.reviewCount}
                  />
                </span>
              )}
              <span>{restaurant && restaurant?.reviews?.length} รีวิว</span>
              <span>{restaurant.priceLength}</span>
              {restaurant.isOpen ? (
                <span className="text-green-600">เปิดอยู่</span>
              ) : (
                <span className="text-red_primary">ปิดอยู่</span>
              )}
            </div>
            <div className="text-gray-500 text-sm">
              {restaurant.category ? restaurant.category.categoryName : null}
            </div>
          </div>
          <div className="flex flex-col gap-2 p-1">
            <div className="justify-end flex">
              <BookmarkIcon restaurant={restaurant} />
            </div>
            <div>0 กม.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
