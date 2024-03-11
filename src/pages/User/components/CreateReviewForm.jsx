import React from "react";
import { FaStar } from "react-icons/fa";
import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../../configs/axios";
import { toast } from "react-toastify";

function CreateReviewForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState(null);
  const [img, setImg] = useState([]);
  const fileInput = useRef(null);

  const { restaurantsId } = useParams();
  const [hover, setHover] = useState(null);
  const [titleLength, setTitleLength] = useState(0);
  const [descLength, setDescLength] = useState(0);

  const navigate = useNavigate();
  const handleCancel = (event) => {
    const confirm = window.confirm("คุณต้องการยกเลิกการเขียนรีวิวใช่หรือไม่");
    if (confirm) {
      navigate(`/restaurants/${restaurantsId}`);
    } else {
      event.preventDefault();
    }
  };

  const handleTitleChange = (event) => {
    setTitleLength(event.target.value.length);
    setTitle(event.target.value);
  };
  const handleDescChange = (event) => {
    setDescLength(event.target.value.length);
    setDesc(event.target.value);
  };
  const submitReview = async (formData) => {
    try {
      await axios.post("/user/review", formData);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmitform = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("star", rating);
    formData.append("restaurantId", restaurantsId);
    // formData.append("img", fileInput.current.files);
    for (let i = 0; i < fileInput.current.files.length; i++) {
      formData.append("img", fileInput.current.files[i]);
    }
    console.log(fileInput.current.files[0]);
    await submitReview(formData);
    toast.success("เขียนรีวิวสำเร็จ");
    navigate(`/restaurants/${restaurantsId}`);
  };

  //   const fetchRestaurant = async () => {
  //     const response = await axios.get(`/restaurants/${restaurantId}`);
  //   };

  //   useEffect(() => {
  //     fetchRestaurant();
  //   }, []);
  const fileimg = [];
  for (let i = 0; i < img.length; i++) {
    fileimg.push(
      <img src={URL.createObjectURL(img[i])} className="w-24 h-24 rounded-md" />
    );
  }
  return (
    <form
      onSubmit={handleSubmitform}
      className=" w-7/12 bg-white h-full p-3 my-4 rounded-md flex flex-col gap-4 "
    >
      <div className=" font-bold pb-4 m-2 mb-4 border-b-2 ">เขียนรีวิว</div>
      <div className="flex justify-center">
        <h1>ให้คะแนนร้านอาหารนี้</h1>
      </div>
      <div className="flex justify-center">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label>
              <input
                className=" hidden"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                color={ratingValue <= (hover || rating) ? "#ef4444" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                size={50}
              />
            </label>
          );
        })}
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <p>หัวเรื่องรีวิว</p>
          <p>{titleLength}/120</p>
        </div>
        <input
          value={title}
          onChange={handleTitleChange}
          maxLength={120}
          className="w-full p-1 border-2 rounded-md "
          placeholder="อธิบาย ความพอใจ/ไม่พอใจ ใน 120 ตัวอักษร"
        ></input>
      </div>
      <div>
        <div className="flex justify-between mb-2">
          <p>รายละเอียดรีวิว</p>
          <p>{descLength} ตัวอักษร</p>
        </div>
        <div className=" relative">
          <textarea
            value={desc}
            onChange={handleDescChange}
            type="text"
            className=" w-full p-1 border-2 rounded-md pb-10 block  "
            placeholder="เล่ารายละเอียดตรงนี้เลย เขียนรีวิวให้เหมือนเล่าให้เพื่อนฟังนะครับ 64 ตัวอักษรขึ้นไป"
          ></textarea>
        </div>
      </div>

      <div>
        <div>
          <div className=" font-bold pb-4 m-2 mb-4 border-b-2 ">รูปภาพ</div>
          <div className="flex justify-around ">
            <div className="flex gap-4">
              <div className="flex gap-2 overflow-y-auto">
                {img.length > 0 ? (
                  fileimg
                ) : (
                  <div className="bg-gray-300 w-24 h-24 rounded-md"></div>
                )}
              </div>
              <div>
                <input
                  type="file"
                  multiple
                  className="hidden"
                  ref={fileInput}
                  onChange={(e) => {
                    setImg(e.target.files);
                  }}
                />
                <div
                  onClick={() => fileInput.current.click()}
                  className="bg-blue-200 text-blue-500 rounded-md px-3 py-1 cursor-pointer"
                >
                  Choose File
                </div>
                {img.length > 0 ? (
                  <p className="text-green-500">File uploaded</p>
                ) : (
                  <p>No file selected</p>
                )}
                <p>ไฟล์ GIF,JPG หรือ PNG</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-7 justify-center">
            <button className="w-32 py-1.5 px-3 rounded-md bg-blue-500 text-white hover:bg-blue-700">
              บันทึกรีวิว
            </button>
            <button
              onClick={handleCancel}
              className="w-32 py-1.5 px-3 rounded-md bg-gray-300 text-white hover:bg-gray-400"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateReviewForm;
