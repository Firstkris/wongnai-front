import React from "react";
import {
  RestaurantDetailCard,
  RestaurantMapcard,
  TitleRestaurantcard,
} from "../../components/restaurantPageCard";
import { useParams } from "react-router-dom";
function RestaurantPage() {
  const restaurantId = useParams();
  return (
    <div className="max-w-[1024]  flex flex-col items-center bg-gray_primary">
      <div className=" h-[320px] flex gap-2">
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
            <TitleRestaurantcard restaurant={restaurantId} />
            <RestaurantMapcard />
          </div>
          <div className="w-3/12">
            <RestaurantDetailCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
