import React from "react"
import { IconCamera } from "./icon-svg/IconCamera"
import { IconMessage } from "./icon-svg/IconMessage"
import { BookmarkIcon } from "./BookmarkIcon"
export function TitleRestaurantCard() {
  return (
    <div className=" w-full bg-white   my-4 rounded-md">
      <div className="p-4 flex flex-col gap-1 border-b-2">
        <div className="flex items-baseline gap-3">
          <h1 className="text-4xl">Chithoe</h1>
          <h1 className="text-2xl text-gray-500">Royal river hotel</h1>
          <p className="bg-blue-500 text-white rounded-md px-2 flex text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            OFFICIAL
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">7 เรตติ้ง (3รีวิว)</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">
            อาหารฟิวชั่น,อาหารกล่อง/ข้าวกล่อง เดลิเวอรี่
          </p>
        </div>
        <div>
          <p className="text-green-500 text-xs">เปิดอยูุ่</p>
        </div>
      </div>
      <div className="p-4 flex gap-2">
        <button className="flex bg-blue-500 hover:bg-blue-700 text-white rounded-md px-2 py-1 gap-1">
          <IconMessage />
          เขียนรีวิว
        </button>
        <button className="flex bg-gray-200 hover:bg-gray-300  rounded-md px-2 py-1 items-center gap-1">
          <div>
            <IconCamera />
          </div>
          <div>เพิ่มรูป</div>
        </button>
        <button className="flex bg-gray-200 hover:bg-gray-300  rounded-md px-2 py-1 gap-1 items-center">
          <BookmarkIcon />
          บันทึก
        </button>
      </div>
    </div>
  )
}

export function RestaurantMapCard() {
  return (
    <div className=" w-full bg-white  p-3 my-4 rounded-md">
      <div className="flex gap-3">
        <div className="bg-gray-300 w-40 h-40 rounded-md">
          <img src="https://www.nsm.or.th/nsm/sites/default/files/2021-12/20200204-2PNG.png" />
        </div>
        <div>
          <div className="flex justify-between pb-4 border-b-2">
            <p className="text-xs w-2/4">
              117 1 ถ. ทองหล่อ แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110
            </p>
            <button className="flex bg-gray-200 hover:bg-gray-300  rounded-md px-2 py-1">
              ดูเส้นทาง
            </button>
          </div>
          <div className="flex justify-between pb-4 pt-4 border-b-2">
            <div className="flex gap-1">
              <p className="font-bold ">เบอร์โทร:</p>
              <p>099-999-9999</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function RestaurantDetailCard() {
  return (
    <div className=" w-full bg-white  p-4 my-4 rounded-md">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xs font-bold">เวลาเปิดร้าน</p>
          <div className="flex-grow flex">
            <p className="text-xs w-2/4 text-gray-500">อังคาร</p>
            <p className="text-xs w-2/4 text-gray-500">11:00 - 21:00</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3">
            <svg
              className="bg-green-500 w-4 h-4 text-white rounded-sm"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <p className="text-xs ">มีที่จอดรถ</p>
          </div>
          <div className="flex gap-3">
            <svg
              className="bg-red-500 w-4 h-4 text-white rounded-sm"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            <p className="text-xs ">WIFI</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xs font-bold">ช่วงราคา</p>
          <div className="flex-grow flex items-baseline gap-1">
            ฿ <p className="text-xs  text-gray-500">(101 - 250 บาท)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
