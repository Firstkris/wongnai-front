import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../../configs/axios";

export default function ReviewRestaurantCard() {
  const restaurantId = useParams();
  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const { restaurantsId: id } = restaurantId;
        const response = await axios.get(`/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRestaurant();
  }, []);
  return (
    <div className=" w-7/12 bg-white h-full p-3 my-4 rounded-md">
      <div className="flex justify-around ">
        <div className="flex gap-4 w-full">
          <img
            src={restaurant?.restaurant?.profileImg}
            className="bg-gray-300 w-32 h-32 rounded-md"
          />
          <div className="w-full">
            <div className="flex justify-between">
              <h1>{restaurant.restaurant?.restaurantName} </h1>
            </div>
            <p>
              {restaurant.restaurant?.reviewPoint} เรตติ้ง (
              {restaurant.restaurant?.reviewCount} รีวิว)
            </p>
            <p>{restaurant?.restaurant?.category?.categoryName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
