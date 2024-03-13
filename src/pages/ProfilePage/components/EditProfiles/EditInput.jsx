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
  const { setUser, userDefault, setOnFetch } = useUser();

  const [onEditInfo, setOnEditInfo] = useState(false);
  //
  const handleOnEdit = async () => {
    try {
      const data = { [name]: input[name] };
      if (name == "mobile") {
        if (input[name].length != 10) {
          toast.error("Invalid mobile");
          return;
        }
      }
      if (name == "gender") {
        if (!(input[name] == "FEMALE" || input[name] == "MALE")) {
          toast.error("Invalid mobile");
          return;
        }
      }
      if (name == "birthdate") {
        if (input[name] > new Date().toISOString() + "") {
          toast.error("Birtdate is more than current date");
          return;
        }
      }
      const data1 = await axios.patch("/user", data);
      console.log(data1, "00000000000000000000000000000000");
      // console.log(input, "00000000000000000000000000000s");
      // setUser({ ...input, [name]: input[name] });
      setUser(data1.data.user);
      setOnEditInfo((c) => !c);

      toast.success("Edit profile successful");
      // setOnFetch((r) => !r); // ฮั่นเอาออก
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
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
                // setUser(userDefault);
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
