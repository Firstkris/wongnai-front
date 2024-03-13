import { CardRestaurant } from "../components/filterPageComponents/CardRestaurant"
import React from "react"
import { SlideBar } from "../components/filterPageComponents/SlideBar"
import { useRestaurant } from "../hooks/hooks.jsx"
import { useEffect } from "react"
import { Breadcrumbs } from "../components/BreadCrumb.jsx"
import { useUser } from "../feature/user/contexts/UserContext.jsx"
import { Loading } from "../components/Loading"
import { Children } from "react"
import SlidePhoto from "../components/filterPageComponents/SlidePhoto.jsx"

const BackgroundVideo =
  "https://rr1---sn-30a7yner.googlevideo.com/videoplayback?expire=1710182472&ei=6PvuZfO5IIKE6dsPjZyA0Ac&ip=45.88.97.22&id=o-ALvvR9iZFG1R2N9yHBphu16J3DwFs_tI03hwsrFpaEdt&itag=247&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&spc=UWF9f9v7k_AJKwMsKEkwIi7gqIRaSpDKiPf6-IRT2dbF9lE&vprv=1&svpuc=1&mime=video%2Fwebm&gir=yes&clen=6315288&dur=88.707&lmt=1696295538704311&keepalive=yes&fexp=24007246,24350255&c=ANDROID&txp=531F224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAN0IN1ODWnf95nbyRAe4gXcE8oAj90MJGBtK4W37t6KSAiAtW5SPjj_OIjmEeC76UUXuctF19xmWyI-wgm0PWmFKig%3D%3D&rm=sn-5hness7l&req_id=3212068538eda3ee&redirect_counter=2&cm2rm=sn-uvu-c33le7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=rw&mip=101.109.240.124&mm=30&mn=sn-30a7yner&ms=nxu&mt=1710161798&mv=m&mvi=1&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=APTiJQcwRAIgKld67kiE66xRBAGJVU6xlf5LlLkbfmK6dgmKMTt4s0YCIHZkSFzNRlFUK_lPkuBN2tsKdK1izewTnS095KJpLiKI"

const breadcrumbs = [
  { label: "หน้าหลัก", link: "https://www.google.com" },
  {
    label: "ค้นหาร้านอาหาร",
  },
]
export const FilterPage = () => {
  const { filterPageData, fetchRestaurantWithUserLogin, isLoading } =
    useRestaurant()

  const { restaurants } = filterPageData
  const { user } = useUser()

  //if user is login ? fetchRestaurantWithUserLogin : fetchFilterPage
  useEffect(() => {
    fetchRestaurantWithUserLogin()
  }, [user])

  return (
    //layout
    isLoading ? (
      <Loading />
    ) : (
      <div className="flex flex-col gap-2 z-10 ">
        {/* layout subheader */}
        <div className="w-full bg-white mt-1  shadow-sm">
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
            <div className="flex min-w-fit  shadow-sm">
              <SlideBar />
            </div>
            <div className="flex flex-col w-3/4  gap-4">
              <div className="flex  rounded-lg shadow-lg bg-white bg-opacity-100 items-center">
                <SlidePhoto />
              </div>
              <div className="flex gap-4 justify-around">
                <div className="flex flex-col gap-4 ">
                  {/* restaurants */}
                  {restaurants?.length > 0 ? (
                    restaurants?.map((restaurant, index) => (
                      <CardRestaurant key={index} restaurant={restaurant} />
                    ))
                  ) : (
                    <div className="flex justify-center gap-2 p-4 bg-white rounded-lg font-semibold  w-[480px] text-gray-400">
                      NO FILTERS
                    </div>
                  )}
                </div>
                <div className="flex flex-col bg-white w-2/6 rounded-lg">
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
