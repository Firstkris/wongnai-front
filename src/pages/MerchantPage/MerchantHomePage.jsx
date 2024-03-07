import React from "react";
import { useRestaurant } from "../../hooks/hooks";
import NavRestaurantImg from "../MainPage/NavRestaurantImg";
import {
  RestaurantDetailCard,
  RestaurantMapCard,
  TitleRestaurantCard,
} from "../../components/RestaurantPageCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../components/Loading";

export default function MerchantHomePage() {
  const { fetchRestaurantAndBookmarkById, restaurantData, isLoading } =
    useRestaurant();
  const params = useParams();

  console.log("params", params);

  useEffect(() => {
    fetchRestaurantAndBookmarkById(parseInt(params.restaurantId)); //<<<<
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
          <div className="mx-auto flex justify-center  w-full gap-10">
            <div className="min-w-[567px]">
              <TitleRestaurantCard
                restaurantData={restaurantData.restaurant}
                bookmarks={restaurantData?.bookmarks}
              />
              <RestaurantMapCard restaurantData={restaurantData.restaurant} />
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
