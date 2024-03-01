import React from "react";
import { Link } from "react-router-dom";
import {
  LocationIcon,
  MessageIcon,
  SearchIcon,
  DownTriangleIcon,
  DownTriangleSolidIcon,
  ProfileWithCircleIcon,
} from "../icons/icon";

export default function Header() {
  return (
    <header
      className="bg-white py-4 flex 
     justify-around border-b-2
    "
    >
      <Link to={"/"} className="flex">
        <div className="text-xl pt-1">Wong</div>

        <MessageIcon className="w-10 h-10 fill-red_primary" />
      </Link>
      <div className="flex gap-5">
        <div className="flex relative">
          <LocationIcon className="absolute w-8 h-8 pt-1.5 pl-2 fill-gray_secondary" />

          <input
            className="rounded-lg bg-gray_primary pl-9 w-[200px] focus:outline-none"
            placeholder="กรุงเทพและ..."
          />
          <DownTriangleSolidIcon className="absolute w-5 h-5 left-44 top-2.5 fill-gray_secondary" />
        </div>
        <div className="flex relative">
          <input
            className="rounded-l-lg bg-gray_primary pl-3 w-[200px] focus:outline-none"
            placeholder="ชื่อร้านอาหาร..."
          />
          <div className="bg-red_primary w-10 rounded-r-lg cursor-pointer">
            <SearchIcon className="w-6 h-6 text-white bg-red_primary mt-2 ml-2" />
          </div>
        </div>
      </div>
      <Link to={"/profile"} className="flex gap-2">
        <div className="flex justify-center items-center border border-10 border-gray-300 rounded-full px-2">
          <ProfileWithCircleIcon />
          <div>เข้าสู่ระบบ</div>
        </div>
        <div className="border rounded-full px-2">
          <DownTriangleIcon className="w-6 h-6 mt-2" />
        </div>
      </Link>
    </header>
  );
}
