import { Carousel } from "flowbite-react"
import { mockDataForSlideBar } from "../../constants/constant"

const customTheme = {
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full  group-hover:bg-white/10 group-focus:outline-none  dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-pointer snap-center",
    },
  },
  indicators: {
    active: {
      off: "bg-white/20 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white/80 dark:bg-gray-800",
    },
    base: "h-2 w-2 rounded-full",
    wrapper: "absolute bottom-1 left-1/2 flex -translate-x-1/2 space-x-1",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
}

const SlidePhoto = () => {
  return (
    <div className="w-full p-2 h-24">
      <Carousel theme={customTheme} pauseOnHover>
        <div className="flex gap-1">
          {mockDataForSlideBar &&
            mockDataForSlideBar.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="relative flex  w-[20%] items-center justify-center dark:bg-gray-700 dark:text-white"
              >
                {" "}
                <div className="absolute inset-0 bg-black opacity-20 hover:opacity-10"></div>
                <span className="absolute text-white text-xs left-2  mb-12">
                  {item.detail}
                </span>
                <img src={`${item.img}`} />
              </div>
            ))}
        </div>
        <div className="flex gap-1">
          {mockDataForSlideBar &&
            mockDataForSlideBar.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="relative flex  w-[20%] items-center justify-center  dark:bg-gray-700 dark:text-white"
              >
                <div className="absolute inset-0 bg-black opacity-20 hover:opacity-10"></div>
                <span className="absolute text-white text-xs left-2  mb-12">
                  {item.detail}
                </span>
                <img src={`${item.img}`} />
              </div>
            ))}
        </div>
        <div className="flex gap-1">
          {mockDataForSlideBar &&
            mockDataForSlideBar.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="relative flex  w-[20%] items-center justify-center  dark:bg-gray-700 dark:text-white"
              >
                <div className="absolute inset-0 bg-black opacity-20 hover:opacity-10"></div>
                <span className="absolute text-white text-xs left-2  mb-12">
                  {item.detail}
                </span>
                <img src={`${item.img}`} />
              </div>
            ))}
        </div>
      </Carousel>
    </div>
  )
}

export default SlidePhoto
