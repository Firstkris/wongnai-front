import React from "react";
import { useRestaurant } from "../../hooks/hooks";
import { CrossIcon } from "../../icons/icon";
import * as ApiRestaurant from "../../apis/restaurants";

export default function DeleteImgModal({ setDeleteToggle }) {
  const { restaurantData, setRestaurantPage } = useRestaurant();
  const handleOnDelete = async (id) => {
    console.log(id);
    await ApiRestaurant.deleteRestaurantImg(id);

    setRestaurantPage((r) => ({
      ...r,
      restaurant: {
        ...r.restaurant,
        restaurantImages: r.restaurant.restaurantImages.filter(
          (rs) => rs.id != id
        ),
      },
    }));
  };
  console.log(restaurantData, "restaurantData");

  // console.log(
  //   restaurantData.restaurant.restaurantImages,
  //   "restaurantData.restaurant.restaurantImages"
  // );
  return (
    <>
      <div className="fixed flex flex-col justify-center items-center inset-0 bg-gray-400 opacity-50 z-10 "></div>
      <div className="inset-0 fixed flex flex-col justify-center items-center z-20">
        <div className="flex flex-col gap-5 bg-white min-w-[500px] min-h-2/5 opacity-100 rounded-2xl pt-7 pb-5 px-10">
          <div className="flex gap-3">
            {restaurantData.restaurant.restaurantImages.map((a) => (
              <div key={a.id} className="relative">
                <img
                  src={a.img}
                  className=" w-[100px] h-[100px] rounded-full object-cover"
                />
                <div
                  onClick={() => {
                    handleOnDelete(a.id);
                  }}
                >
                  <CrossIcon
                    stroke={"red"}
                    className={
                      "absolute top-0 right-0 bg-white shadow-md border rounded-full cursor-pointer"
                    }
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end w-full gap-4">
            <button
              className="gray_primary"
              onClick={() => {
                setDeleteToggle((c) => !c);
              }}
            >
              ยกเลิก
            </button>
            <button
              className="blue_primary"
              onClick={() => {
                setDeleteToggle((c) => !c);
              }}
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
