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
import { AddIcon, CrossIcon } from "../../icons/icon";
import { Link } from "react-router-dom";
import { fetchMenuByRestaurantId } from "../../apis/merchant";
import AddMenuModal from "./AddMenuModal";
import axios from "../../configs/axios";
import { useMerchant } from "../../feature/auth/contexts/MerchantContext";

export default function MerchantHomePage() {
  const {
    fetchRestaurantAndBookmarkById,
    restaurantData,
    isLoading,
    nameRestaurant,
  } = useRestaurant();
  const navigate = useNavigate();
  const params = useParams();
  const { setRestaurantData } = useRestaurant();
  const { merchant } = useMerchant();

  const { merchantId, restaurantId } = useParams();
  const [isSelect, setIsSelect] = useState(params.restaurantId);
  const [onFetch, setOnFetch] = useState();
  const [menu, setMenu] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [addMenu, setAddMenu] = useState(false);
  const [onDelete, setOnDelete] = useState(false);
  const [selectDelete, setSelectDelete] = useState({});

  const [sideBar, setSideBar] = useState([]);
  console.log(merchant);
  const run1 = async () => {
    const data = await getSideBar(merchant.id);
    setSideBar(data.data.data);
  };
  useEffect(() => {
    run1();
  }, []);

  // console.log("params", params.restaurantId);

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

  const run = async () => {
    const data = await fetchMenuByRestaurantId(restaurantId);
    setMenu(data.data.data);
    // console.log("menu", data);
  };

  useEffect(() => {
    run();
  }, []);

  const handleDelete = async () => {
    console.log(selectDelete, "select **********************************");
    const data = await axios.delete(`/merchant/menu/${selectDelete.id}`);
    setMenu((r) => r.filter((el) => el.id != selectDelete.id));
    setOnDelete((c) => !c);
  };
  const filter = nameRestaurant.filter((item) => item.merchantId == merchantId);

  return (
    // isLoading ? (
    //   <Loading />
    // ) : (
    <>
      <div className="flex gap-6 justify-center mt-4 mx-10 mb-10">
        <div className=" rounded-lg bg-white h-[1170px] w-[250px] pt-5 px-4">
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
          <div className="overflow-scroll h-[1030px] scroll_hidden ">
            {filter.map((a) => (
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

        <div className="max-w-[1024]  flex flex-col items-start">
          {/* image zone  */}
          <div>
            <NavRestaurantImg
              restaurantImage={restaurantData?.restaurant?.restaurantImages}
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="flex justify-center w-full gap-10">
              <div className="min-w-[567px]">
                <MerchantTitleCard
                  setRestaurantData={setRestaurantData}
                  setOnFetch={setOnFetch}
                  restaurantData={restaurantData.restaurant}
                  bookmarks={restaurantData?.bookmarks}
                />
                <RestaurantMapCard restaurantData={restaurantData.restaurant} />
              </div>
              <div className="min-w-56 mt-4">
                <RestaurantDetailCard
                  restaurantData={restaurantData.restaurant}
                />
              </div>
            </div>
            <div className=" bg-white max-w-[700px] min-h-[300px] ml-48 mt-4 px-6 py-4 rounded-lg">
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
                {toggleMenu ? (
                  <div className=" grid grid-cols-3 gap-8 ">
                    {menu.map((el) => (
                      <div className=" border rounded-xl shadow-md">
                        <div className="relative">
                          <img
                            className="  aspect-square rounded-t-xl object-cover"
                            src={el.img}
                          />
                          <div
                            className="absolute right-2 top-2 cursor-pointer"
                            onClick={() => {
                              console.log(el);

                              setSelectDelete(el);
                              setOnDelete((c) => !c);
                            }}
                          >
                            <CrossIcon
                              stroke={"white"}
                              className={
                                "bg-red_primary rounded-full p-1 w-7 h-7"
                              }
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 py-2">
                          <div className="font-bold  pl-4"> {el.menuName}</div>
                          <div className="pl-4 text-gray_secondary">
                            {" "}
                            ราคา : {el.price} บาท{" "}
                          </div>
                        </div>
                        {/* {onDelete ? (
                          <>
                            <div className="fixed flex flex-col justify-center items-center inset-0 bg-gray-400 opacity-50 "></div>
                            <div className="inset-0 fixed flex flex-col justify-center items-center ">
                              <div className="flex flex-col items-center gap-5 bg-white min-w-[400px] min-h-2/5 opacity-100 rounded-2xl pb-10 pt-10  px-10">
                                คุณต้องการลบเมนูนี้ใช่หรือไม่ ?
                                <div className="flex gap-4">
                                  <button
                                    onClick={handleDelete}
                                    className="blue_primary"
                                  >
                                    ใช่
                                  </button>
                                  <button
                                    className="gray_primary"
                                    onClick={() => setOnDelete((c) => !c)}
                                  >
                                    ไม่ใช่
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : null} */}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-8 ">
                    {menu.slice(0, 3).map((el) => (
                      <>
                        <div className="  border rounded-xl shadow-md">
                          <div className="relative">
                            <img
                              className="  aspect-square rounded-t-xl object-cover"
                              src={el.img}
                            />
                            <div
                              className="absolute right-2 top-2 cursor-pointer"
                              onClick={() => {
                                setSelectDelete(el);
                                setOnDelete((c) => !c);
                              }}
                            >
                              <CrossIcon
                                stroke={"white"}
                                className={
                                  "bg-red_primary rounded-full p-1 w-7 h-7"
                                }
                              />
                            </div>
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
                <hr />
                {onDelete ? (
                  <>
                    <div className="fixed flex flex-col justify-center items-center inset-0 bg-gray-400 opacity-50 "></div>
                    <div className="inset-0 fixed flex flex-col justify-center items-center ">
                      <div className="flex flex-col items-center gap-5 bg-white min-w-[400px] min-h-2/5 opacity-100 rounded-2xl pb-10 pt-10  px-10">
                        คุณต้องการลบเมนูนี้ใช่หรือไม่ ?
                        <div className="flex gap-4">
                          <button
                            onClick={handleDelete}
                            className="blue_primary"
                          >
                            ใช่
                          </button>
                          <button
                            className="gray_primary"
                            onClick={() => setOnDelete((c) => !c)}
                          >
                            ไม่ใช่
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}

                {addMenu ? (
                  <AddMenuModal setMenu={setMenu} setAddMenu={setAddMenu} />
                ) : null}
                <div
                  className="flex justify-center mx-auto gap-2 px-2 rounded-lg w-1/4 bg-blue_secondary hover:bg-blue_secondary_hv text-blue_primary py-2 cursor-pointer"
                  onClick={() => setAddMenu((c) => !c)}
                >
                  <AddIcon />
                  เพิ่มเมนูแนะนำ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
