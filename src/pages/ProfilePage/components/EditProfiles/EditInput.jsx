import React from "react";
import { useState } from "react";
import Input from "../../../../components/Input";
import { useAuth } from "../../../../feature/auth/contexts/AuthContext";

export default function EditInput({
  setInput,
  handleChangeInput,
  title,
  info,
  input,
  name,
  type = "text",
}) {
  const { setUser } = useAuth();

  const [onEditInfo, setOnEditInfo] = useState(false);
  const handleOnEdit = () => {
    setUser(input);
    setOnEditInfo((c) => !c);
  };

  return (
    <div className="flex justify-between">
      <div>{title}</div>
      {onEditInfo ? (
        <div className=" flex flex-col gap-5 w-2/3">
          <Input
            // placeholder={input}
            name={name}
            type={type}
            onChange={handleChangeInput}
            value={input[name]}
          />
          <div className="flex gap-4">
            <button className="blue_primary" onClick={handleOnEdit}>
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
