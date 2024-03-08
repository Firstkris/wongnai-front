import React from "react";
import { useRef } from "react";
import { ImageIcon } from "../../icons/icon";

export default function AddImgModal({ setAddToggle }) {
  const fileInput = useRef(null);

  const handleOnEdit = () => {
    setAddToggle((c) => !c);
    handleSubmit();
    // setUser((r) => ({ ...r, imgProfile: profileImage }));
  };

  return (
    <>
      <div className="fixed flex flex-col justify-center items-center inset-0 bg-gray-400 opacity-50 "></div>
      <div className="inset-0 fixed flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-5 bg-white min-w-[500px] min-h-2/5 opacity-100 rounded-2xl pt-7 pb-5 px-10">
          <div className="flex gap-6 items-center">
            <img
              // src={profileImage}
              ref={fileInput}
              alt="profileImage"
              className="w-[100px] h-[100px] object-cover rounded-full cursor-pointer"
              onClick={() => fileInput.current.click()}
            />
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
              onChange={(e) => {
                setProfileImage1(e.target.files[0]);
                setProfileImage(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div className="text-gray_secondary text-sm">ไฟล์ JPG</div>
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
            <button className="blue_primary" onClick={handleOnEdit}>
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
