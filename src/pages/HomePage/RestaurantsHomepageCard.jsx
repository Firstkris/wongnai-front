import React from "react";
import { useRestaurant } from "../../hooks/hooks";
import RestaurantPreview from "../../components/RestaurantPreview";
import axios from "../../configs/axios";
import { useEffect } from "react";
import { useState } from "react";

function RestaurantsHomepageCard() {
  const { nameRestaurant: restaurants } = useRestaurant();
  const [categoryId, setCategoryId] = useState({});

  const data = async (categoryId) => {
    const data = await axios.get(`/restaurants/category/${categoryId}`);
    console.log(data, "cdata");
    setCategoryId(data.data.category);
  };

  useEffect(() => {
    data();
  }, []);
  console.log(categoryId, "categoryId");
  console.log(restaurants, "restaurants");
  return (
    <>
      <div className=" w-7/12 bg-white h-full p-3 my-4 rounded-md shadow-md ">
        <div className="w-full">
          <div className="border-b-2 flex justify-between items-center ">
            <h1 className="text-xl m-2">{categoryId[0]?.categoryName} </h1>
            <a
              className="ี underline text-blue_primary"
              href="/restaurants/filter"
            >
              ดูทั้งหมด
            </a>
          </div>
          <div className="flex gap-2 overflow-y-auto">
            {categoryId[0]?.restaurants.slice(5, 13).map((restaurant) => (
              <RestaurantPreview restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
      <div className=" w-7/12 bg-white h-full p-3 my-4 rounded-md shadow-md ">
        <div className="w-full">
          <div className="border-b-2 flex justify-between items-center ">
            <h1 className="text-xl m-2">{categoryId[8]?.categoryName} </h1>
            <a
              className="ี underline text-blue_primary"
              href="/restaurants/filter"
            >
              ดูทั้งหมด
            </a>
          </div>
          <div className="flex gap-2 overflow-y-auto">
            {categoryId[8]?.restaurants.slice(0, 8).map((restaurant) => (
              <RestaurantPreview restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
      <div className=" w-7/12 bg-white h-full p-3 my-4 rounded-md shadow-md ">
        <div className="w-full">
          <div className="border-b-2 flex justify-between items-center ">
            <h1 className="text-xl m-2">{categoryId[2]?.categoryName} </h1>
            <a
              className="ี underline text-blue_primary"
              href="/restaurants/filter"
            >
              ดูทั้งหมด
            </a>
          </div>
          <div className="flex gap-2 overflow-y-auto">
            {categoryId[2]?.restaurants.slice(0, 5).map((restaurant) => (
              <RestaurantPreview restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
      <div className=" w-7/12 bg-white h-full p-3 my-4 rounded-md shadow-md ">
        <div className="w-full">
          <div className="border-b-2 flex justify-between items-center ">
            <h1 className="text-xl m-2">{categoryId[3]?.categoryName} </h1>
            <a
              className="ี underline text-blue_primary"
              href="/restaurants/filter"
            >
              ดูทั้งหมด
            </a>
          </div>
          <div className="flex gap-2 overflow-y-auto">
            {categoryId[3]?.restaurants.slice(0, 8).map((restaurant) => (
              <RestaurantPreview restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
      <div className=" w-7/12 bg-white h-full p-3 my-4 rounded-md shadow-md ">
        <div className="w-full">
          <div className="border-b-2 flex justify-between items-center ">
            <h1 className="text-xl m-2">{categoryId[4]?.categoryName} </h1>
            <a
              className="ี underline text-blue_primary"
              href="/restaurants/filter"
            >
              ดูทั้งหมด
            </a>
          </div>
          <div className="flex gap-2 overflow-y-auto">
            {categoryId[4]?.restaurants.slice(0, 8).map((restaurant) => (
              <RestaurantPreview restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantsHomepageCard;
