import { BookmarkIcon } from "../BookmarkIcon"
import { useNavigate } from "react-router-dom"
import { ReviewScore } from "../ReviewScore"
import { ImageRender } from "./ImageRender"
import { useEffect } from "react"
import { useState } from "react"
import { Loading } from "../../components/Loading"
import { useRestaurant } from "../../hooks/hooks"
import { Spinner } from "flowbite-react"
import axios from "axios"
export const CardRestaurant = ({ restaurant }) => {
  const navigate = useNavigate()
  const { currentPosition, setCurrentPosition, setLoading } = useRestaurant()
  const handleClickCard = () => {
    navigate(`/restaurants/${restaurant.id}`)
  }
  ///

  // const apiKey = "AIzaSyAFWg9sVBiyu27dgrr75LOwOHOrFgufSSs"
  // const origin = `${currentPosition?.latitude},${currentPosition?.longitude}`
  // const destination = `${restaurant?.lat},${restaurant?.lng}`
  // const res = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`

  ////

  const lat = restaurant.lat
  const lng = restaurant.lng

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const distance = R * c
    return distance
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }
  function formatDistance(distance) {
    if (!distance) {
      return
    } else if (distance >= 1) {
      return distance.toFixed(1) + " กม."
    } else {
      return (distance * 1000).toFixed(1) + " ม."
    }
  }

  const distance =
    currentPosition?.latitude &&
    currentPosition?.longitude &&
    lat &&
    lng &&
    calculateDistance(
      currentPosition?.latitude,
      currentPosition?.longitude,
      lat,
      lng
    )
  const showDistance = formatDistance(distance)

  return (
    <div onClick={handleClickCard} className="w-full cursor-pointer">
      <div className="flex flex-col gap-2 p-4 bg-white rounded-lg   w-[480px] shadow-md">
        <div className="flex gap-2">
          {restaurant?.restaurantImages && (
            <ImageRender restaurantImages={restaurant?.restaurantImages} />
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <div className="group font-semibold gap-2 flex items-baseline ">
              <span className="text-xl font-semibold text-gray-600 group-hover:text-black ">
                {restaurant.restaurantName}
              </span>
              <span className="text-gray_secondary text-md font-semibold ">
                {restaurant.subtitle}
              </span>
            </div>

            <div className="flex gap-2 items-center">
              {restaurant.reviewPoint / restaurant.reviewCount >= 3 && (
                <span>
                  <ReviewScore
                    score={restaurant.reviewPoint / restaurant.reviewCount}
                  />
                </span>
              )}
              <span>{restaurant && restaurant?.reviews?.length} รีวิว</span>
              <span>{restaurant.priceLength}</span>
              {restaurant.isOpen ? (
                <span className="text-green-600">เปิดอยู่</span>
              ) : (
                <span className="text-red_primary">ปิดอยู่</span>
              )}
            </div>
            <div className="text-gray-500 text-sm">
              {restaurant.category ? restaurant.category.categoryName : null}
            </div>
          </div>
          <div className="flex flex-col gap-2 p-1">
            <div className="justify-end flex">
              <BookmarkIcon restaurant={restaurant} />
            </div>
            <div>
              {currentPosition ? (
                showDistance
              ) : (
                <span className="flex gap-1 items-center">
                  <Spinner size="xs" /> ม.
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
