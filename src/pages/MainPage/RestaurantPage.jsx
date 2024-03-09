import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  RestaurantDetailCard,
  RestaurantMapCard,
  TitleRestaurantCard,
  RatingRestaurantCard,
} from "../../components/RestaurantPageCar";
import { useRestaurant } from "../../hooks/hooks";
import { Loading } from "../../components/Loading";
import NavRestaurantImg from "./NavRestaurantImg";

function RestaurantPage() {
  const { fetchRestaurantAndBookmarkById, restaurantData, isLoading } =
    useRestaurant();
  const params = useParams();

  useEffect(() => {
    fetchRestaurantAndBookmarkById(parseInt(params.id));
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="max-w-[1024]  flex flex-col items-center bg-gray_primary">
        {/* image zone  */}
        <div>
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
  );
}

export default RestaurantPage;
