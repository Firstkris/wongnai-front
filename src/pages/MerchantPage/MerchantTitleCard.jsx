import React from "react";
import { useRef } from "react";
import { ButtonRestaurantPage } from "../../components/restaurantPageComponents/ButtonRestaurantPage";
import { IconMessage } from "../../components/icon-svg/IconMessage";
import { IconCamera } from "../../components/icon-svg/IconCamera";
import { BookmarkIcon, EditInfoIcon } from "../../icons/icon";

export function MerchantTitleCard({ restaurantData, bookmarks }) {
  const bookmarkRef = useRef();
  const showVerified = restaurantData?.verify && (
    <div className="bg-blue-500 text-white rounded-md px-1.5 gap-1 flex text-xs py-0.5">
      <IconCheckmark /> OFFICIAL
    </div>
  );

  const handleClickBookmark = () => {
    bookmarkRef.current.click();
  };

  return (
    <div className=" w-full bg-white  my-4 rounded-md">
      <div className="p-4 flex flex-col gap-1 ">
        <div className="flex items-baseline gap-3">
          <h1 className="text-4xl">{restaurantData?.restaurantName}</h1>
          <h1 className="text-2xl text-gray-500">{restaurantData?.subtitle}</h1>
          {showVerified}
        </div>
        <div>
          <div className="text-gray-500 text-xs">
            <span>{restaurantData?.reviewPoint} เรตติ้ง </span>
            <span>({restaurantData?.reviewCount} รีวิว)</span>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-xs">
            {restaurantData?.category?.categoryName}
          </p>
        </div>
        <div>
          {restaurantData?.isOpen ? (
            <p className="text-green-500 text-xs">เปิดอยู่</p>
          ) : (
            <p className="text-red-500 text-xs">ปิดอยู่</p>
          )}
          {/* <ButtonRestaurantPage
            color="bg-red_primary hover:bg-red_primary_hv"
            textColor="text-white"
          >
            <EditInfoIcon />
            แก้ไขข้อมูล
          </ButtonRestaurantPage> */}
        </div>
      </div>
      <div className="px-4 pb-4 flex justify-end gap-2">
        <ButtonRestaurantPage
          color="bg-red_primary hover:bg-red_primary_hv"
          textColor="text-white"
        >
          <EditInfoIcon />
          แก้ไขข้อมูล
        </ButtonRestaurantPage>
      </div>
    </div>
  );
}
