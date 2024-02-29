import React from "react";

export default function ProfileHeader() {
  return (
    <div className="bg-white h-[220px] px-16">
      <div className="text-sm pt-5">
        หน้าแรก / <span className="font-bold">รายการที่บันทึกไว้</span>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-20">
          <img
            className="w-[150px] h-[150px] object-cover rounded-full"
            src="https://www.prachachat.net/wp-content/uploads/2018/01/1-166-728x410.jpg"
          />
          <div className="flex flex-col mt-5 gap-5 items-start">
            <h1 className="text-2xl font-bold">Punnatorn Prathombut</h1>
            <button className="bg-red_primary text-white border text-center px-5 ml-2 rounded-md">
              แก้ไขโปรไฟล์
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
