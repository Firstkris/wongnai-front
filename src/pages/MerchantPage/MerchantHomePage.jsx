import React from "react";
import { useRestaurant } from "../../hooks/hooks";
import NavRestaurantImg from "../MainPage/NavRestaurantImg";
import {
  RestaurantDetailCard,
  RestaurantMapCard,
  TitleRestaurantCard,
} from "../../components/RestaurantPageCar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../../components/Loading";
import { useState } from "react";
import { MerchantTitleCard } from "./MerchantTitleCard";
import { useNavigate } from "react-router-dom";
import { AddIcon } from "../../icons/icon";
import { Link } from "react-router-dom";

export default function MerchantHomePage() {
  const {
    fetchRestaurantAndBookmarkById,
    restaurantData,
    isLoading,
    nameRestaurant,
  } = useRestaurant();
  const params = useParams();

  const { merchantId } = useParams();
  const [isSelect, setIsSelect] = useState(params.restaurantId);
  const [onFetch, setOnFetch] = useState();
  const navigate = useNavigate();
  console.log("params", params.restaurantId);

  // console.log("restaurantData", restaurantData.restaurant.restaurantName);
  console.log("nameRestaurant", nameRestaurant);

  useEffect(() => {
    fetchRestaurantAndBookmarkById(parseInt(params.restaurantId)); //<<<<
  }, [onFetch]);

  const onClick = (restaurantId) => {
    setIsSelect(restaurantId);
    navigate(`/merchant/${merchantId}/${restaurantId}`);
    setOnFetch((c) => !c);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="flex gap-6 justify-center mt-4 mx-10 ">
        <div className=" rounded-lg bg-white w-[250px] pt-5 px-4">
          <div className="flex flex-col gap-4 font-bold text-xl mb-4">
            รายชื่อร้าน
            <Link
              to={`/merchant/createRestaurant/${merchantId}`}
              className="flex items-center gap-1 pl-6 py-1 text-[15px] font-medium bg-gray_primary hover:bg-gray_primary_hv rounded-lg cursor-pointer "
            >
              <AddIcon
                className={"w-9 h-9 fill-red_primary"}
                stroke={"white"}
              />
              เพิ่มร้านค้าของคุณ
            </Link>
          </div>
          <div className="overflow-scroll scroll_hidden h-[700px]">
            {nameRestaurant.map((a) => (
              <div key={a.id} className="flex flex-col gap-4 ">
                <div
                  className={`${
                    !(isSelect == a.id)
                      ? " flex items-center gap-2 cursor-pointer pl-4"
                      : " flex items-center gap-2 font-bold text-blue_primary cursor-pointer pl-10"
                  }`}
                  onClick={() => onClick(a.id)}
                >
                  <img
                    className="w-[50px] h-[50px] object-cover rounded-full"
                    src={a.profileImg}
                  />
                  {a.restaurantName}
                </div>

                <hr className="pt-4" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1024]  flex flex-col items-center bg-gray_primary">
          {/* image zone  */}
          <div>
            <NavRestaurantImg
              restaurantImage={restaurantData?.restaurant?.restaurantImages}
            />
          </div>
          <div className="w-full">
            <div className="mx-auto flex justify-center w-full gap-10">
              <div className="min-w-[567px]">
                <MerchantTitleCard
                  setOnFetch={setOnFetch}
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
      </div>
    </>
  );
}
