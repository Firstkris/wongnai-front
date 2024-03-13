import React from "react"
import { useState } from "react"
import { imagePlaceHolder } from "../../constants/constant"
import { ModalNavMerchantImg } from "../MerchantPage/ModalNavMerchantImg"
export default function NavRestaurantImg({ restaurantImage }) {
  console.log(restaurantImage)
  const array =
    restaurantImage && restaurantImage?.length > 0
      ? restaurantImage
      : imagePlaceHolder

  const [isToggle, setIsToggle] = useState(false)

  return (
    <div className=" flex justify-center ">
      {isToggle ? (
        <div>
          <ModalNavMerchantImg setIsToggle={setIsToggle}>
            {array.map((a) => (
              <div className="flex justify-center items-center h-full">
                <img
                  className=" aspect-video object-cover border  h-[500px] "
                  src={a?.img}
                  alt="restaurant Image"
                />
              </div>
            ))}
          </ModalNavMerchantImg>
        </div>
      ) : (
        <div
          className=" flex justify-center cursor-pointer "
          onClick={() => setIsToggle((c) => !c)}
        >
          <img
            className="aspect-video object-cover h-[250px] border "
            src={array[0]?.img}
          />
          {array.slice(1, 3).map((a, index) => (
            <img
              key={index}
              className=" aspect-square object-cover border  h-[250px] "
              src={a?.img}
              alt="restaurant Image"
            />
          ))}
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
            <div className="relative grid grid-cols-2 ">
              {array.slice(3, 7).map((a, index) => (
                <div key={index}>
                  <img
                    className=" aspect-video object-cover border h-[125px] "
                    src={a?.img}
                    alt="restaurant Image"
                  />
                </div>
              ))}
              {array.length <= 3 ? null : (
                <div className="absolute right-0 bottom-0 flex justify-center items-center bg-black opacity-70 aspect-video w-1/2 h-1/2 border text-white text-4xl cursor-pointer ">
                  <div>+{array.length - 6}</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
