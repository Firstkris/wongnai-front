import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  RestaurantDetailCard,
  RestaurantMapCard,
  TitleRestaurantCard,
  RatingRestaurantCard,
} from "../../components/RestaurantPageCard";
import { useRestaurant } from "../../hooks/hooks";
import { Loading } from "../../components/Loading";
import NavRestaurantImg from "./NavRestaurantImg";
import { useState } from "react";
import { Breadcrumbs } from "../../components/BreadCrumb";

function RestaurantPage() {
  const { fetchRestaurantAndBookmarkById, restaurantData, isLoading } =
    useRestaurant();
  const params = useParams();

  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    fetchRestaurantAndBookmarkById(parseInt(params.id));
  }, [params.id]);

  const breadcrumbs = [
    { label: "หน้าหลัก", link: "https://www.google.com" },
    {
      label: "ค้นหาร้านอาหาร",
      link: "http://localhost:5173/restaurants/filter",
    },
    {
      label: `${restaurantData?.restaurant?.restaurantName}`,
    },
  ];

  console.log(restaurantData, "restaurantData");

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <div className="max-w-[1024]  flex flex-col items-center bg-gray_primary">
        {/* <div className="w-full">
            <div className="mx-auto flex justify-center my-1">
              <div className="w-[807px] flex flex-col justify-start ">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
              </div>
            </div>
          </div> */}
        {/* image zone  */}
        <div className="w-full">
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

              {/*  */}
              <div className=" bg-white w-[722px]   mt-8 px-6 py-4 rounded-lg">
                <div className="flex flex-col gap-6 justify-center ">
                  <div className="flex justify-between">
                    <div className="font-bold text-xl">เมนูแนะนำ</div>
                    {toggleMenu ? (
                      <div
                        className="text-blue_primary cursor-pointer"
                        onClick={() => setToggleMenu((c) => !c)}
                      >
                        ซ่อน
                      </div>
                    ) : (
                      <div
                        className="text-blue_primary cursor-pointer"
                        onClick={() => setToggleMenu((c) => !c)}
                      >
                        ดูทั้งหมด
                      </div>
                    )}
                  </div>
                  <hr />
                  <div className="">
                    {toggleMenu ? (
                      <div className=" grid grid-cols-3 gap-8 ">
                        {restaurantData?.restaurant?.menus?.map((el) => (
                          <div className=" border rounded-xl shadow-md">
                            <div className="relative">
                              <img
                                className="  aspect-square rounded-t-xl object-cover"
                                src={el.img}
                              />
                            </div>
                            <div className="flex flex-col gap-1 py-2">
                              <div className="font-bold  pl-4">
                                {" "}
                                {el.menuName}
                              </div>
                              <div className="pl-4 text-gray_secondary">
                                {" "}
                                ราคา : {el.price} บาท{" "}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-8 ">
                        {restaurantData?.restaurant?.menus
                          ?.slice(0, 3)
                          .map((el) => (
                            <>
                              <div className="  border rounded-xl shadow-md">
                                <div className="relative">
                                  <img
                                    className="  aspect-square rounded-t-xl object-cover"
                                    src={el.img}
                                  />
                                </div>
                                <div className="flex flex-col gap-1 py-2">
                                  <div className="font-bold  pl-4">
                                    {" "}
                                    {el.menuName}
                                  </div>
                                  <div className="pl-4 text-gray_secondary">
                                    {" "}
                                    ราคา : {el.price} บาท{" "}
                                  </div>
                                </div>
                              </div>
                            </>
                          ))}
                      </div>
                    )}
                    {restaurantData?.restaurant?.menus.length == 0 ? (
                      <div className="text-gray-500 pl-6 ">
                        ร้านนี้ยังไม่มีเมนูแนะนำ
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              {/*  */}
              {/* {restaurantData?.restaurant?.menus?.map(item=><)} */}
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
