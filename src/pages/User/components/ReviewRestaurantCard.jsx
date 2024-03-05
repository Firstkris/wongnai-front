import React from "react";

export default function ReviewRestaurantCard() {
  return (
    <div className=" w-7/12 bg-white h-full p-3 my-4 rounded-md">
      <div className="flex justify-around ">
        <div className="flex gap-4 w-full">
          <div className="bg-gray-300 w-32 h-32 rounded-md"></div>
          <div className="w-full">
            <div className="flex justify-between">
              <h1>BONHOMIE CRAFT BEER BAR </h1>
              <button className="bg-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-400">
                บันทึก
              </button>
            </div>
            <p>0 เรตติ้ง (0 รีวิว)</p>
            <p>กึ่งผับ/ร้านเหล้า/บาร์</p>
          </div>
        </div>
      </div>
    </div>
  );
}
