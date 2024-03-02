import { BookmarkIcon } from "../Bookmark"
import { Link } from "react-router-dom"

export const CardRestaurant = ({ restaurant }) => {
  console.log(restaurant, "restaurant")
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-lg   w-[480px]">
      need to fix width
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
        <div>
          <Link
            to="/restaurants/filter"
            className="font-semibold gap-2 flex items-baseline"
          >
            <span className="text-xl font-semibold">
              {restaurant.restaurantName}
            </span>
            <span className="text-gray_secondary text-md font-semibold">
              {restaurant.subtitle}
            </span>
          </Link>
          <div className="flex gap-2">
            <span>{restaurant.reviewPoint / restaurant.reviewCount}⭐️</span>
            <span>{restaurant.reviewCount} รีวิว</span>
            <span>{restaurant.priceLength}</span>
            {restaurant.isOpen ? (
              <span className="text-green-600">เปิดอยู่</span>
            ) : (
              <span className="text-red_primary">ปิดอยู่</span>
            )}
          </div>
          <div>
            {restaurant.category ? restaurant.category.categoryName : null}
          </div>
        </div>
        <div className="flex flex-col gap-2 p-1">
          <div className="justify-end flex">
            <BookmarkIcon />
          </div>
          <div>4.7 กม.</div>
        </div>
      </div>
    </div>
  )
}
