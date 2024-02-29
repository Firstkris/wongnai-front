import React from "react";
import { StarIcon } from "../../../icons/icon";

export default function ReviewItem() {
  return (
    <div className="w-1/2 mx-auto bg-white rounded-lg min-h-[300px] p-4 mb-10">
      <h1 className="font-bold text-xl mb-5">รีวิว BONHOMIE CRAFT BEER BAR</h1>
      <div className="flex gap-4">
        <img
          className="h-[50px] w-[50px] object-cover rounded-full"
          src="https://www.prachachat.net/wp-content/uploads/2018/01/1-166-728x410.jpg"
        />
        <div>
          <div className="text-sm">
            <span className="font-bold">Punnatorn Prathombut</span> รีวิว{" "}
            <span className="font-bold">BONHOMIE CRAFT BEER BAR</span>
          </div>
          <div className="text-xs text-gray_secondary pr-3  mt-1.5">
            เมื่อ 2 วันที่แล้ว
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 mt-2">
        <StarIcon className="w-4 h-4 fill-red_primary" />
        <StarIcon className="w-4 h-4 fill-red_primary" />
        <StarIcon className="w-4 h-4 fill-red_primary" />
        <StarIcon className="w-4 h-4 fill-red_primary" />
        <StarIcon className="w-4 h-4 fill-red_primary" />
      </div>
      <div>
        <div className="text-sm font-bold mt-3">ร้านดีมากครับ</div>
        <div className="text-sm mt-3">ราคาต่อหัว : 501 - 1,000 บาท </div>
        <div className="text-sm mt-3">
          เพลงเพราะ ดนตรีลึกนิดนึง บรรยากาศดีมัก เหมาะกับคนชอบฟังดนตรี
          ร้านตกแต่งชิคๆ อ่านต่อได้ที่
        </div>
        <div className="flex justify-around mt-5">
          <img
            className="w-[400] h-[200] object-cover "
            src="https://img.wongnai.com/p/400x0/2024/02/29/aa961f815e844974990ce348d50a8bf2.jpg"
          />
          <img src="https://img.wongnai.com/p/400x0/2024/02/29/af24c23d3b37463e91419d0cb3b282fd.jpg" />
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
