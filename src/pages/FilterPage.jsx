import { CardRestaurant } from "../components/filterPageComponents/CardRestaurant"
import React from "react"
import { SlideBar } from "../components/filterPageComponents/SlideBar"
import { useRestaurant } from "../hooks/hooks.jsx"
import { useEffect } from "react"
import { Breadcrumbs } from "../components/BreadCrumb.jsx"
import { useUser } from "../feature/user/contexts/UserContext.jsx"
import { Loading } from "../components/Loading"
import { Children } from "react"

const breadcrumbs = [
  { label: "หน้าหลัก", link: "https://www.google.com" },
  {
    label: "ค้นหาร้านอาหาร",
    link: "https://www.wongnai.com/restaurants?regions=9681",
  },
]
export const FilterPage = () => {
  const {
    filterPageData,
    fetchRestaurantWithUserLogin,
    isLoading,
    fetchFilterPage,
  } = useRestaurant()
  const { restaurants } = filterPageData

  const { user } = useUser()

  const fetchDataFilter = async () => {
    try {
      if (!user) {
        await fetchFilterPage()
      } else {
        await fetchRestaurantWithUserLogin()
      }
    } catch (error) {
      console.log(error)
    }
  }
  //if user is login ? fetchRestaurantWithUserLogin : fetchFilterPage
  useEffect(() => {
    fetchDataFilter()
  }, [user])

  return (
    //layout
    isLoading ? (
      <Loading />
    ) : (
      <div className="flex flex-col gap-2">
        {/* layout subheader */}
        <div className="w-full bg-white mt-1 ">
          <div className="flex flex-col gap-2 py-4 w-[886px] md:mx-auto xl:w-[1024px]">
            <div className="pl-1">
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <div className="font-semibold text-3xl">
              ร้านอาหารยอดนิยม ในกรุงเทพมหานคร
            </div>
          </div>
        </div>

        {/* layout body*/}
        <div className="md:mx-auto  ">
          <div className=" flex justify-around gap-4 w-[886px] xl:w-[1024px]">
            {/* <Slidebar> */}
            <div className="flex min-w-fit  shadow-md">
              <SlideBar />
            </div>
            <div className="flex flex-col w-3/4  gap-4">
              <div className="flex bg-black h-28 rounded-lg">
                show photo pagination black area
                {/* show photo pagination */}
              </div>
              <div className="flex gap-4 justify-around">
                <div className="flex flex-col gap-4 ">
                  {/* restaurants */}
                  {restaurants?.length > 0 ? (
                    restaurants?.map((restaurant) => (
                      <CardRestaurant
                        key={restaurant.id}
                        restaurant={restaurant}
                      />
                    ))
                  ) : (
                    <div className="flex justify-center gap-2 p-4 bg-white rounded-lg font-semibold  w-[480px] text-gray-400">
                      NO FILTERS
                    </div>
                  )}
                </div>
                <div className="flex flex-col bg-white w-2/6">
                  <div className="m-1 bg-slate-300 h-36 rounded-lg">ADS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}
