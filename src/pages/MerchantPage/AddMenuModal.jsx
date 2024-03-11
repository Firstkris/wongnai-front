import React from "react";
import { useRef } from "react";
import { ImageIcon } from "../../icons/icon";
import { useState } from "react";
import * as ApiRestaurant from "../../apis/restaurants";
import { useParams } from "react-router-dom";
import { useRestaurant } from "../../hooks/hooks";
import Input from "../../components/Input";
import axios from "../../configs/axios";

export default function AddMenuModal({ setAddMenu, setMenu }) {
  const fileInput = useRef(null);
  const { restaurantId } = useParams();
  const { setLoading } = useRestaurant();

  console.log("restaurantId", restaurantId);

  const [restaurantImg, setRestaurantImg] = useState({});

  const onChangeInput = (e) =>
    setRestaurantImg({ ...restaurantImg, [e.target.name]: e.target.value });

  const handleOnAdd = async () => {
    try {
      const formData = new FormData();
      for (let i in restaurantImg) {
        formData.append(i, restaurantImg[i]);
      }
      formData.append("restaurantId", restaurantId);

      const data = await axios.post("/merchant/menu", formData);
      console.log(data);
      setMenu((r) => [...r, data.data.data]);
      //   setOnFetch((c) => !c);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log("restaurantImg", restaurantImg);
  return (
    <>
      <div className="fixed flex flex-col justify-center items-center inset-0 bg-gray-400 opacity-50 "></div>
      <div className="inset-0 fixed flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5 bg-white min-w-[500px] min-h-2/5 opacity-100 rounded-2xl pb-10 pt-10 px-10">
          <div className=" flex flex-col gap-4 items-center">
            <div className="flex items-center gap-8">
              {restaurantImg?.img ? (
                <img
                  src={URL.createObjectURL(restaurantImg?.img)}
                  className="w-[80px] h-[80px] aspect-ratio "
                />
              ) : null}
              <div
                className="flex gap-2 border px-4 py-6 rounded-2xl cursor-pointer"
                ref={fileInput}
                onClick={() => fileInput.current.click()}
              >
                <ImageIcon />
                <div>Upload</div>
              </div>

              <input
                type="file"
                ref={fileInput}
                className="hidden"
                name="img"
                onChange={(e) => {
                  //   onChangeInput(e.target.files[0]);
                  setRestaurantImg({
                    ...restaurantImg,
                    img: e.target.files[0],
                  });
                  // console.log("e.target.files", e.target.files);
                  //   setRestaurantImg(e.target.files[0]);
                  e.stopPropagation();
                  // setProfileImage(URL.createObjectURL(e.target.files[0]));
                }}
              />
              <div className="text-gray_secondary text-sm">
                ไฟล์ JPG หรือ PNG
              </div>
            </div>

            <div className="flex items-center gap-4">
              ชื่อเมนู :
              <Input
                placeholder={"ชื่อเมนู"}
                name={"menuName"}
                onChange={onChangeInput}
              />
            </div>
            <div className="flex items-center gap-4">
              ราคา :
              <Input
                placeholder={"ราคา"}
                name="price"
                onChange={onChangeInput}
              />
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              className="gray_primary"
              onClick={() => {
                setAddMenu((c) => !c);
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
