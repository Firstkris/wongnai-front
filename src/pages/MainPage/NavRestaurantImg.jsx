import React from "react"
import { useState } from "react"
import { imagePlaceHolder } from "../../constants/constant"
export default function NavRestaurantImg({ restaurantImage }) {
  const array =
    restaurantImage && restaurantImage?.length > 0
      ? restaurantImage
      : imagePlaceHolder

  const [isToggle, setIsToggle] = useState(false)

  return (
    <div className="flex justify-center h-[260px]">
      {isToggle ? (
        <div className="grid grid-cols-4 z-20">
          {array.map((a) => (
            <img
              className=" aspect-video object-cover"
              src={a?.img}
              alt="restaurant Image"
            />
          ))}
          <div
            className="cursor-pointer text-4xl flex justify-center items-center"
            onClick={() => setIsToggle((c) => !c)}
          >
            <div className="bg-white px-20 py-12 rounded-[40px] hover:bg-gray-200 hover:font-bold">
              Hide
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-center gap-1 ">
          <img
            className="aspect-video object-cover h-full "
            src={array[0]?.img}
          />
          {array.slice(1, 3).map((a, index) => (
            <img
              key={index}
              className=" aspect-square object-cover  h-full "
              src={a?.img}
              alt="restaurant Image"
            />
          ))}
          <div className="hidden xl:grid">
            {array.length >= 4 && array.length <= 7 ? (
              <div className="relative">
                {array.slice(3, 4).map((a, index) => (
                  <div key={index}>
                    <img
                      className=" aspect-square object-cover border h-[250px] "
                      src={a?.img}
                      alt="restaurant Image"
                    />
                    {!(array.length - 4 == 0) ? (
                      <div className="absolute top-0 flex justify-center items-center bg-black opacity-70 aspect-video h-[250px] w-[250px] text-white text-4xl cursor-pointer ">
                        <div>+{array.length - 4}</div>
                      </div>
                    ) : (
                      <div className="absolute top-0 flex justify-center items-center  aspect-video h-[250px] w-[250px] text-white text-4xl cursor-pointer ">
                        {/* <div>+{array.length - 4}</div> */}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="hidden 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-2 gap-0.5 h-full ">
                {array.slice(3, 6).map((a, index) => (
                  <div key={index} className="w-full h-[129px]">
                    <img
                      className="h-full w-full aspect-square object-cover"
                      src={a?.img}
                      alt="restaurant Image"
                    />
                  </div>
                ))}
                <div className="relative flex items-center justify-center">
                  <div
                    className="absolute inset-0  bg-black opacity-70 aspect-video w-full h-full  text-white text-4xl cursor-pointer "
                    onClick={() => setIsToggle((c) => !c)}
                  >
                    <div className="flex justify-center items-center h-full">
                      +{array.length - 5}
                    </div>
                  </div>
                  <div className="w-full h-[129px]">
                    <img
                      className="h-full w-full "
                      src={array[6]?.img}
                      alt="restaurant Image"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
