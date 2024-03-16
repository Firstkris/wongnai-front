import { Link } from "react-router-dom"
import { StarIcon } from "../icons/icon"
import { useNavigate } from "react-router-dom"

export default function RestaurantPreview({ restaurant }) {
  const navigate = useNavigate()

  const handleclickCard = () => {
    navigate(`/restaurants/${restaurant?.id}`)
  }
  return (
    <div className=" mb-1 mt-3">
      {restaurant && (
        <>
          <div
            onClick={handleclickCard}
            className=" w-60  rounded-lg shadow-md hover:cursor-pointer overflow-hidden"
          >
            <img
              className="w-full h-48 overflow-hidden"
              src={restaurant?.profileImg}
            ></img>
            <h3 className="text-xl m-1 font-bold">
              {restaurant?.restaurantName}
            </h3>
            <p className="text-gray-500 m-1 text-[15px]">
              {restaurant?.subtitle}
            </p>
            <p className="m-1 text-gray-500 text-[15px] flex gap-2">
              <div className="bg-red-600  flex justify-center w-10 rounded-md text-white items-center px-0.5">
                <p>
                  {restaurant?.rating.toFixed(1) != 0
                    ? restaurant?.rating.toFixed(1)
                    : "0"}
                </p>
                <StarIcon className="fill-white w-4 h-4" />
              </div>{" "}
              {restaurant?.reviewCount} รีวิว
            </p>
          </div>
        </>
      )}
    </div>
  )
}
