import React from "react";

export default function DeleteImgModal({ setDeleteToggle }) {
  return (
    <>
      <div className="fixed flex flex-col justify-center items-center inset-0 bg-gray-400 opacity-50 "></div>
      <div className="inset-0 fixed flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-5 bg-white min-w-[500px] min-h-2/5 opacity-100 rounded-2xl pt-7 pb-5 px-10">
          <div className="flex justify-end gap-3">
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
              //   onClick={handleOnEdit}
            >
              บันทึก
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
