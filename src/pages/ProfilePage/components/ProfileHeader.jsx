import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../feature/auth/contexts/AuthContext";

export default function ProfileHeader() {
  const { user } = useAuth();

  return (
    <div className="bg-white h-[220px] px-16">
      <div className="text-sm pt-5">
        หน้าแรก / <span className="font-bold">รายการที่บันทึกไว้</span>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-20">
          <img
            className="w-[150px] h-[150px] object-cover rounded-full"
            src={user?.imgProfile}
          />
          <div className="flex flex-col mt-5 gap-5 items-start">
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <Link
              to={"/profile/EditProfile"}
              className="bg-red_primary text-white border text-center px-5 ml-2 rounded-md"
            >
              แก้ไขโปรไฟล์
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
