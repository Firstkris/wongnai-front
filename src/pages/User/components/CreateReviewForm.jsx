import React from "react";
import { FaStar } from "react-icons/fa";
import { useState, useRef } from "react";

function CreateReviewForm() {
  const fileInput = useRef(null);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [titleLength, setTitleLength] = useState(0);
  const [descLength, setDescLength] = useState(0);

  const handleTitleChange = (event) => {
    setTitleLength(event.target.value.length);
  };
  const handleDescChange = (event) => {
    setDescLength(event.target.value.length);
  };

  return (
    <form className=" w-7/12 bg-white h-full p-3 my-4 rounded-md flex flex-col gap-4 ">
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
              <div className="bg-gray-300 w-24 h-24 rounded-md"></div>
              <div>
                <input type="file" className="hidden" ref={fileInput} />
                <div
                  onClick={() => fileInput.current.click()}
                  className="bg-blue-200 text-blue-500 rounded-md px-3 py-1 cursor-pointer"
                >
                  Choose File
                </div>
                <p>No file selected</p>
                <p>ไฟล์ GIF,JPG หรือ PNG</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-7 justify-center">
            <button className="w-32 py-1.5 px-3 rounded-md bg-blue-500 text-white hover:bg-blue-700">
              บันทึกรีวิว
            </button>
            <button className="w-32 py-1.5 px-3 rounded-md bg-gray-300 text-white hover:bg-gray-400">
              ยกเลิก
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateReviewForm;
