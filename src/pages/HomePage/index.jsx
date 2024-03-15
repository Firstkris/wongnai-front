import React, { useEffect, useState } from "react"
import RestaurantPreview from "../../components/RestaurantPreview"

import { Link } from "react-router-dom"
import { useRestaurant } from "../../hooks/hooks"
import { SlideImg } from "./SlideImg"
import Footer from "../../layouts/Footer"
import RestaurantsHomepageCard from "./RestaurantsHomepageCard"

function HomePage() {
  const { nameRestaurant: restaurants } = useRestaurant()
  return (
    <div>
      <div>
        <SlideImg />
      </div>
      <div className=" max-w-[1024] w-0/12 mx-auto flex flex-col items-center bg-gray_primary  ">
        <RestaurantsHomepageCard />
      </div>
    </div>
  )
}

{
  /* <div className="bg-">
  <div className="flex justify-around">
    <Link to="/homepage">
      <img src="../../icons/fork-and-knife.png" alt="" />
      <h2>ร้านอาหาร</h2>
    </Link>
    <Link to="/homepage">
      <img src="../../icons/cup-of-drink.png" alt="" />
      <h2>กาแฟ/ของหวาน</h2>
    </Link>
    <Link to="/homepage">
      <img src="../../icons/cocktail.png" alt="" />
      <h2>บาร์/cocktail</h2>
    </Link>
  </div>
  <div className="bg-white m-auto flex flex-col justify-center align-middle w-70 border-2 rounded-lg">
    <h1>แนะนำสำหรับคุณ</h1>
    <div className="flex gap-2">
      <a href="/">ร้านยอดนิยม</a>
      <a href="/">ร้านใกล้ฉัน</a>
    </div>
    <div>
      <div className="flex  w-52 h-52">
        {restaurants.slice(0, 6).map((restaurant) => (
          <RestaurantPreview restaurant={restaurant} />
        ))}
      </div>
    </div>
    <button type="submit">ดูทั้งหมด</button>
  </div>
</div>; */
}

export default HomePage
