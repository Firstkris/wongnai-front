import React from "react";
import {
  RestaurantDetailCard,
  RestaurantMapcard,
  TitleRestaurantcard,
} from "../../components/restaurantPageCard";
import NavRestaurantImg from "./NavRestaurantImg";

function RestaurantPage() {
  return (
    <div className="max-w-[1024]  flex flex-col items-center bg-gray_primary">
      <NavRestaurantImg />
      <div className="mx-auto">
        <div className="flex  w-full gap-10">
          <div className="w-9/12">
            <TitleRestaurantcard />
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
