import { Link } from "react-router-dom";
import { StarIcon } from "../icons/icon";
import { useNavigate } from "react-router-dom";

export default function RestaurantPreview({ restaurant }) {
  const navigate = useNavigate();

  const handleclickCard = () => {
    navigate(`/restaurants/${restaurant?.id}`);
  };
  return (
    <div className=" mt-2 ">
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
              <div className="bg-red-600 mb-2 flex w-10 rounded-md text-white items-center">
                <p className="ml-2">{restaurant?.reviewPoint}</p>
                <StarIcon className="fill-white w-4 h-4" />
              </div>{" "}
              {restaurant?.reviewCount} รีวิว
            </p>
          </div>
        </>
      )}
    </div>
  );
}
