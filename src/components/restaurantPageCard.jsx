import { IconCamera } from "./icon-svg/IconCamera"
import { IconMessage } from "./icon-svg/IconMessage"
import { BookmarkIcon } from "./BookmarkIcon"
import { IconCheckmark } from "./icon-svg/IconCheckmark"
import { ButtonRestaurantPage } from "./restaurantPageComponents/ButtonRestaurantPage"
import { priceLength } from "../constants/constant"
import { IconCheckGreen } from "./icon-svg/IconCheckGreen"
import { IconTel } from "./icon-svg/IconTel"
import { useRef } from "react"

export function TitleRestaurantCard({ restaurantData, bookmarks }) {
  const bookmarkRef = useRef()
  const showVerified = restaurantData?.verify && (
    <div className="bg-blue-500 text-white rounded-md px-1.5 gap-1 flex text-xs py-0.5">
      <IconCheckmark /> OFFICIAL
    </div>
  )

  const handleClickBookmark = () => {
    bookmarkRef.current.click()
  }

  return (
    <div className=" w-full bg-white   my-4 rounded-md">
      <div className="p-4 flex flex-col gap-1 border-b-2">
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
        </div>
      </div>
      <div className="p-4 flex gap-2">
        <ButtonRestaurantPage
          color="bg-blue-500 hover:bg-blue-600"
          textColor="text-white"
        >
          <IconMessage />
          เขียนรีวิว
        </ButtonRestaurantPage>

        <ButtonRestaurantPage>
          <IconCamera />
          เพิ่มรูป
        </ButtonRestaurantPage>
        <div onClick={handleClickBookmark}>
          <ButtonRestaurantPage onClick={handleClickBookmark}>
            <BookmarkIcon ref={bookmarkRef} restaurant={{ bookmarks }} />
            บันทึก
          </ButtonRestaurantPage>
        </div>
      </div>
    </div>
  )
}

export function RestaurantMapCard({ restaurantData }) {
  return (
    <div className=" w-full bg-white  p-3 my-4 rounded-md">
      <div className="flex gap-3">
        <div className="bg-gray-300 w-72 object-fill flex rounded-md">
          <img src="https://www.nsm.or.th/nsm/sites/default/files/2021-12/20200204-2PNG.png" />
        </div>
        <div className="w-full">
          <div className="flex justify-between pb-4 border-b-2 min-h-32 ">
            <p className="text-xsh-30">
              {restaurantData?.address}
              {/* 117 1 ถ. ทองหล่อ แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110 */}
            </p>
            <div className="items-center">
              <button className="flex bg-gray-200 hover:bg-gray-300 justify-center  rounded-md px-2 py-1 w-24">
                ดูเส้นทาง
              </button>
            </div>
          </div>
          <div className="flex justify-between pb-4 pt-4 border-b-2">
            <div className="flex gap-1">
              <p className="font-bold ">เบอร์โทร:</p>
              <p>{restaurantData?.mobile}</p>
            </div>
            <IconTel />
          </div>
        </div>
      </div>
    </div>
  )
}

export function RestaurantDetailCard({ restaurantData }) {
  ///waiting time and facility
  const priceLengthText = restaurantData?.priceLength
    ? priceLength
      .find((el) => el.id === restaurantData?.priceLength)
      .priceLength.slice(4)
    : null

  return (
    <div className=" w-full bg-white  p-4 my-4 rounded-md ">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-md font-bold">เวลาเปิดร้าน</p>
          {restaurantData?.openHours ? (
            restaurantData.openHours.map((el) => (
              <div className=" flex" key={el.id}>
                <p className="text-xs w-2/4 text-gray-500">{el.date}</p>
                <p className="text-xs  text-gray-500">
                  {el.openTime.slice(11, 16)}-{el.closeTime.slice(11, 16)}
                </p>
              </div>
            ))
          ) : (
            <div>ไม่พบข้อมูล</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {restaurantData?.facilitiesWithRestaurantId
            ? restaurantData.facilitiesWithRestaurantId.map((el) => (
              <div className="flex gap-2" key={el.id}>
                <IconCheckGreen />{" "}
                <div className="flex text-sm">{el.facility.facilityName}</div>
              </div>
            ))
            : null}
          {/* <div className="flex gap-3">
            <IconCrossRed />
            <p className="text-xs ">WIFI</p>
          </div> */}
        </div>

        <div className="flex flex-col">
          <p className="text-md font-bold">ช่วงราคา</p>
          <div className="flex-grow flex items-baseline gap-1">
            {restaurantData?.priceLength}
            <p className="text-xs  text-gray-500">({priceLengthText} บาท) </p>
          </div>
        </div>
      </div>
    </div>
  )
}
