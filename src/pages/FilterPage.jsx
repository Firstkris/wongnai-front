import { CardRestaurant } from "../components/filterPageComponents/CardRestaurant"
import React from "react"
import { SlideBar } from "../components/filterPageComponents/SlideBar"
import { useRestaurant } from "../hooks/hooks.jsx"
import { useEffect } from "react"
import { Breadcrumbs } from "../components/BreadCrumb.jsx"

export const FilterPage = () => {
  const { filterPageData, fetchFilterPage, filterInput, fetchFilterData } =
    useRestaurant()
  const { restaurants } = filterPageData

  useEffect(() => {
    fetchFilterPage()
  }, [])

  const breadcrumbs = [
    { label: "หน้าหลัก", link: "https://www.google.com" },
    {
      label: "ค้นหาร้านอาหาร",
      link: "https://www.wongnai.com/restaurants?regions=9681",
    },
  ]
  return (
    //layout
    <div className="flex flex-col gap-2">
      {/* layout subheader */}
      <div className="w-full bg-white mt-1">
        <div className="flex flex-col gap-2 py-4 w-[886px] md:mx-auto">
          <div className="pl-1">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
          </div>
          <div className="font-semibold text-3xl">
            ร้านอาหารยอดนิยม ในกรุงเทพมหานครอมรรัตนโกสินทร์
          </div>
        </div>
      </div>

      {/* layout body*/}
      <div className="md:mx-auto  ">
        <div className=" flex justify-around gap-4 w-[886px]">
          {/* <Slidebar> */}
          <div className="flex min-w-fit ">
            <SlideBar />
          </div>
          <div className="flex flex-col w-3/4  gap-4">
            <div className="flex bg-black h-28 rounded-lg">
              show photo pagination
              {/* show photo pagination */}
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4 ">
                {/* restaurants */}
                {restaurants &&
                  restaurants?.map((restaurant) => (
                    <CardRestaurant
                      key={restaurant.id}
                      restaurant={restaurant}
                    />
                  ))}
              </div>
              <div className="flex flex-col bg-white w-2/6">
                <div className="m-1 bg-slate-300 h-36 rounded-lg">tests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
