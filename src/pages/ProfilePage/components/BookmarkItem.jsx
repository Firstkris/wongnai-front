import React from "react";

export default function BookmarkItem() {
  return (
    <div className=" bg-white w-3/5 mx-auto rounded-lg mb-5">
      <div className="flex">
        <img
          className="w-[150px] h-[150px] rounded-l-lg"
          src="https://img.wongnai.com/p/192x192/2020/10/18/e9a9b378d592414286b89c5e912e0fce.jpg"
        />
        <div className="flex flex-col pl-4 mt-4 gap-2">
          <div className="font-bolds">ข้าวพัดปูเมืองทอง 1 สาขาแจ้งวัฒนะ14</div>
          <div className="text-gray_secondary text-sm">
            ร้านอาหาร , แจ้งวัฒนะ14 , 16 km.
          </div>
        </div>
      </div>
    </div>
  );
}
