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
import { useState } from "react";
import { MerchantTitleCard } from "./MerchantTitleCard";
import { useNavigate } from "react-router-dom";

export default function MerchantHomePage() {
  const { fetchRestaurantAndBookmarkById, restaurantData, isLoading } =
    useRestaurant();
  const params = useParams();
  const { merchantId } = useParams();
  const [isSelect, setIsSelect] = useState(params.restaurantId);
  const [onFetch, setOnFetch] = useState();
  const navigate = useNavigate();
  console.log("params", params.restaurantId);

  const array = [
    {
      id: 1,
      restaurantName: "aaaaaaa",
      restaurantImg:
        "https://waymagazine.org/wp-content/uploads/2018/09/3d-shinchan_01-1200x641.png",
    },
    {
      id: 2,
      restaurantName: "bbbbbb",
      restaurantImg:
        "https://cdni-hw.bugaboo.tv/dm/sz-md/i/images/2023/11/27/_79_1701086437_1410.jpg",
    },
    {
      id: 3,
      restaurantName: "cccccccccc",
      restaurantImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ47UFRMo0EyGiFYpifBozcJXuHzsCxMuXgA&usqp=CAU",
    },
    {
      id: 4,
      restaurantName: "ddddddddd",
      restaurantImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ47UFRMo0EyGiFYpifBozcJXuHzsCxMuXgA&usqp=CAU",
    },
    {
      id: 5,
      restaurantName: "eeeee",
      restaurantImg:
        "https://f.ptcdn.info/420/013/000/1387248104-WB12619012-o.jpg",
    },
  ];

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
      <div className="flex gap-6 justify-center mt-3 mx-10">
        <div className=" rounded-lg bg-white w-[250px] pt-5 px-4">
          <div className="font-bold text-xl mb-6">ชื่อร้าน</div>
          <div>
            {array.map((a) => (
              <div key={a.id} className="flex flex-col gap-4">
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
                    src={a.restaurantImg}
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
