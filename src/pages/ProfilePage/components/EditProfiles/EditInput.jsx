import React from "react";
import { useState } from "react";
import Input from "../../../../components/Input";

export default function EditInput({ title, info }) {
  const [onEditInfo, setOnEditInfo] = useState(false);

  return (
    <div className="flex justify-between">
      <div>{title}</div>
      {onEditInfo ? (
        <div className=" flex flex-col gap-5 w-2/3">
          <Input placeholder={info} />
          <div className="flex gap-4">
            <button
              className="blue_primary"
              onClick={() => setOnEditInfo((c) => !c)}
            >
              บันทึก
            </button>

            <button
              className="gray_primary"
              onClick={() => setOnEditInfo((c) => !c)}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between text-sm w-2/3">
          <div>{info}</div>
          <button
            className="text-blue_primary"
            onClick={() => setOnEditInfo((c) => !c)}
          >
            แก้ไข
          </button>
        </div>
      )}
    </div>
  );
}
