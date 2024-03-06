import React from "react";
import { useState } from "react";
import Input from "../../../../components/Input";
import axios from "../../../../configs/axios";
import { useUser } from "../../../../feature/user/contexts/UserContext";
import { toast } from "react-toastify";

export default function EditInput({
  handleChangeInput,
  title,
  info,
  input,
  name,
  type = "text",
  inputDefault,
}) {
  const { setUser, userDefault } = useUser();

  const [onEditInfo, setOnEditInfo] = useState(false);
  const handleOnEdit = async () => {
    try {
      console.log(input);
      const data = { ...input };
      delete data.imgProfile;

      data.birthdate = data.birthdate + "T12:00:00.000Z";
      console.log(data, "data");

      await axios.patch("/user", data);
      setUser(input);
      setOnEditInfo((c) => !c);

      toast.success("Edit profile successful");
    } catch (error) {
      console.log(error);
      toast.error("Mobile invalid");
    }
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
              onClick={() => {
                setOnEditInfo((c) => !c);
                setUser(userDefault);
              }}
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
