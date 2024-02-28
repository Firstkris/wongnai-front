import React from "react";

export default function ReviewItem() {
  return (
    <div className="w-3/5 mx-auto bg-white rounded-lg h-[250px] p-4">
      <div className="flex gap-4">
        <img
          className="h-[50px] w-[50px] rounded-full"
          src="https://www.prachachat.net/wp-content/uploads/2018/01/1-166-728x410.jpg"
        />
        <div>
          <div className="text-sm">
            <span className="font-bold">Punnatorn Prathombut</span> รีวิว{" "}
            <span className="font-bold">BONHOMIE CRAFT BEER BAR</span>
          </div>
          <div className="text-xs text-gray_secondary">เมื่อ 2 วันที่แล้ว</div>
        </div>
      </div>
    </div>
  );
}
