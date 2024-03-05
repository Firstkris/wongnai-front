import { BookmarkIcon } from "../Bookmark"
import { useNavigate } from "react-router-dom"
import { ReviewScore } from "../ReviewScore"
export const CardRestaurant = ({ restaurant }) => {
  console.log(restaurant, "restaurant")
  const navigate = useNavigate()
  const handleClickCard = () => {
    navigate(`/restaurants/${restaurant.id}`)
  }
  return (
    <div onClick={handleClickCard} className="w-full cursor-pointer">
      <div className="flex flex-col gap-2 p-4 bg-white rounded-lg   w-[480px]">
        <div className="flex gap-2">
          {restaurant.restaurantImages
            ? restaurant.restaurantImages.map((image, index) => (
                <div
                  key={index}
                  className="max-w-[68px] max-h-[68px] rounded-md overflow-hidden border border-gray_primary hover:scale-110"
                >
                  {index <= 6 && (
                    <img
                      src={`${image.img}`}
                      className="object-hover"
                      alt={`Image ${index}`}
                    />
                  )}
                </div>
              ))
            : null}
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
              <span>{restaurant.reviewCount} รีวิว</span>
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
