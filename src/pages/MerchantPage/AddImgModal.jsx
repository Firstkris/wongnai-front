import React from "react";
import { useRef } from "react";
import { ImageIcon } from "../../icons/icon";
import { useState } from "react";
import * as ApiRestaurant from "../../apis/restaurants";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../../hooks/hooks";

export default function AddImgModal({ setAddToggle, setOnFetch }) {
  const fileInput = useRef(null);
  const { restaurantId } = useParams();
  const { setLoading } = useRestaurant();

  console.log("restaurantId", restaurantId);

  const [restaurantImg, setRestaurantImg] = useState({});

  const handleOnAdd = async () => {
    try {
      setLoading(true);
      setAddToggle((c) => !c);
      const formData = new FormData();
      for (let i = 0; i < restaurantImg.length; i++) {
        if (!restaurantImg[i]) {
          break;
        }
        formData.append("img", restaurantImg[i]);
      }
      console.log(formData.getAll("img"));
      const data = await ApiRestaurant.uploadRestaurantImg(
        restaurantId,
        formData
      );
      setOnFetch((c) => !c);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const array = [];

  for (let i = 0; i < restaurantImg.length; i++) {
    if (!restaurantImg[i]) {
      break;
    }
    array.push(
      <div className="relative" key={i}>
        <img
          src={URL.createObjectURL(restaurantImg[i])}
          alt="profileImage"
          className="w-[100px] h-[100px] object-cover rounded-full cursor-pointer"
          // onClick={() => fileInput.current.click()}
          onClick={(e) => console.dir(e.target)}
        />
      </div>
    );
  }

  console.log(restaurantImg);

  return (
    <>
      <div className="fixed flex flex-col justify-center items-center inset-0 bg-gray-400 opacity-50 z-20"></div>
      <div className="inset-0 fixed flex flex-col justify-center items-center z-30">
        <div className="flex flex-col gap-5 bg-white min-w-[500px] min-h-2/5 opacity-100 rounded-2xl pt-7 pb-5 px-10">
          <div className=" flex gap-6 items-center">
            {array}

            <div
              className="flex gap-2 border px-4 py-6 rounded-2xl cursor-pointer"
              ref={fileInput}
              onClick={() => fileInput.current.click()}
            >
              <ImageIcon />
              <div>Upload</div>
            </div>

            <input
              multiple
              type="file"
              ref={fileInput}
              className="hidden"
              onChange={(e) => {
                // setRestaurantImg(e.target.files);
                setRestaurantImg((r) => ({
                  ...r,
                  ...e.target.files,
                  length: r.length
                    ? +r.length + e.target.files.length
                    : +e.target.files.length,
                }));
                e.stopPropagation();
                // setProfileImage(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div className="text-gray_secondary text-sm">ไฟล์ JPG หรือ PNG</div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              className="gray_primary"
              onClick={() => {
                setAddToggle((c) => !c);
              }}
            >
              ยกเลิก
            </button>
            <button className="blue_primary" onClick={handleOnAdd}>
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
