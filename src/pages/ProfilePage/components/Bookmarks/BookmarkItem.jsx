import React from "react";
import { useParams } from "react-router-dom";

export default function BookmarkItem({ bookmark }) {
  const { userId } = useParams();

  // console.log("bookmark", bookmark?.id);
  return (
    <div className=" bg-white w-1/2 mx-auto rounded-lg mb-5">
      <div className="flex">
        {userId ? (
          <img className="w-[150px] h-[150px] rounded-l-lg" src={""} />
        ) : (
          <img
            className="w-[150px] h-[150px] rounded-l-lg"
            src="https://img.wongnai.com/p/192x192/2020/10/18/e9a9b378d592414286b89c5e912e0fce.jpg"
          />
        )}
        <div className="flex flex-col pl-4 mt-4 gap-2">
          {userId ? (
            <div className="font-bolds">
              {bookmark?.restaurant.restaurantName}
            </div>
          ) : (
            <div className="font-bolds">
              ข้าวพัดปูเมืองทอง 1 สาขาแจ้งวัฒนะ14
            </div>
          )}
          {userId ? (
            <div className="text-gray_secondary text-sm">
              {bookmark?.restaurant.address}
            </div>
          ) : (
            <div className="text-gray_secondary text-sm">
              ร้านอาหาร , แจ้งวัฒนะ14 , 16 km.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
