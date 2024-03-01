import React from "react";
import Input from "../../components/Input";
import { useState } from "react";
import axios from "../../configs/axios";
import { useRef } from "react";
import { validateRegister } from "../../validations/validate-register";
import { userRegister } from "../../apis/user";

function RegisterPage() {
  const [input, setInput] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    birthdate: "",
    // imgProfile: "",
  });
  const [validateError1, setValidateError] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    birthdate: "",
    // imgProfile: "",
  });

  const refInput = useRef();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setValidateError({ ...validateError1, [e.target.name]: "" });
    console.log(new Date().toISOString());
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      //
      //
      //

      const data = { ...input };
      if (data.imgProfile) delete data.imgProfile;
      const validateError = validateRegister(data);

      if (validateError) return setValidateError(validateError);
      const fromData = new FormData();
      for (let i in input) {
        fromData.append(i, input[i]);
      }

      //
      //
      //
      // const response = await axios.post("/user/register", fromData);
      const response = await userRegister(fromData);
      // รอว่าจะใช้ context หรือ redux
      console.log(response.data);
      // localStorage.setItem("token", user.data.token);
      //
      //
      //
    } catch (err) {
      console.log(err);
      if (err.response.data.message == "Mobile is already to use")
        setValidateError({
          ...validateError1,
          mobile: err.response.data.message,
        });
      if (err.response.data.message == "Email is already to use")
        setValidateError({
          ...validateError1,
          email: err.response.data.message,
        });
    }
  };
  console.log(validateError1);
  return (
    <div className="max-w-[1024] w-8/12 mx-auto flex flex-col items-center bg-gray_primary">
      <form
        onSubmit={handleSubmit}
        className="w-8/12 bg-white h-full  my-12 flex flex-col items-center"
      >
        <div className="mt-2 mb-6  flex flex-col items-center  w-2/4 gap-5 ">
          <h1 className="text-xl font-bold ite">สมัครสมาชิกวงใน</h1>
          <input
            type="file"
            className=" hidden"
            ref={refInput}
            onChange={(e) => {
              if (e.target.files[0]) {
                setInput({ ...input, imgProfile: e.target.files[0] });
              }
            }}
          />
          <div
            role="button"
            className="w-28 h-28"
            onClick={() => {
              refInput.current.click();
            }}
          >
            {input.imgProfile ? (
              <div className="rounded-full h-full w-full overflow-hidden flex justify-center items-center">
                <img
                  src={URL.createObjectURL(input.imgProfile)}
                  className="object-cover w-full h-full"
                  alt=""
                />
              </div>
            ) : (
              <img
                className="rounded-full"
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              />
            )}
          </div>
          <div className="w-full">
            <Input
              placeholder="ชื่อ"
              onChange={handleChangeInput}
              name={"name"}
            />
            {validateError1.name ? (
              <p className="text-red-500 text-sm">{validateError1.name}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              placeholder="เบอร์โทร"
              onChange={handleChangeInput}
              name={"mobile"}
            />
            {validateError1.mobile ? (
              <p className="text-red-500 text-sm">{validateError1.mobile}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              type="email"
              placeholder="อีเมลล์"
              onChange={handleChangeInput}
              name={"email"}
            />
            {validateError1.email ? (
              <p className="text-red-500 text-sm">{validateError1.email}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              placeholder="รหัสผ่าน"
              onChange={handleChangeInput}
              name={"password"}
              type="password"
            />
            {validateError1.password ? (
              <p className="text-red-500 text-sm">{validateError1.password}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              placeholder="ยืนยันรหัสผ่าน"
              onChange={handleChangeInput}
              name={"confirmPassword"}
              type="password"
            />
            {validateError1.confirmPassword ? (
              <p className="text-red-500 text-sm">
                {validateError1.confirmPassword}
              </p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              placeholder="วันเกิด"
              type="date"
              onChange={handleChangeInput}
              name={"birthdate"}
            />
            {validateError1.birthdate ? (
              <p className="text-red-500 text-sm">{validateError1.birthdate}</p>
            ) : null}
          </div>
          <div className="w-full">
            <div className=" w-full">
              <p className="text-gray-400">เพศ</p>
              <div className="w-full flex justify-around gap-4">
                <input
                  type="radio"
                  className="hidden"
                  id="male"
                  onClick={handleChangeInput}
                  name="gender"
                  value="MALE"
                />
                <label
                  htmlFor="male"
                  role="button"
                  className={`border-2 w-20 ${
                    input.gender == "MALE"
                      ? "text-blue-500 border-blue-500"
                      : "text-gray-500"
                  } font-bold rounded-lg px-3 py-1 m-0 text-center`}
                >
                  ชาย
                </label>
                <input
                  type="radio"
                  className="hidden"
                  id="female"
                  onClick={handleChangeInput}
                  name="gender"
                  value="FEMALE"
                />
                <label
                  htmlFor="female"
                  role="button"
                  className={`border-2 w-20 ${
                    input.gender == "FEMALE"
                      ? "text-blue-500 border-blue-500"
                      : "text-gray-500"
                  } font-bold rounded-lg px-3 py-1 m-0 text-center`}
                >
                  หญิง
                </label>
                <input
                  type="radio"
                  className="hidden"
                  id="other"
                  onClick={handleChangeInput}
                  name="gender"
                  value="OTHER"
                />
                <label
                  htmlFor="other"
                  role="button"
                  className={`border-2 w-20 ${
                    input.gender == "OTHER"
                      ? "text-blue-500 border-blue-500"
                      : "text-gray-500"
                  } font-bold rounded-lg px-3 py-1 m-0 text-center`}
                >
                  อื่นๆ
                </label>
              </div>
            </div>
            {validateError1.gender ? (
              <p className="text-red-500 text-sm">{validateError1.gender}</p>
            ) : null}
          </div>

          <button className="text-white w-full rounded-lg px-3 py-2 m-0 bg-blue_primary">
            สมัคร
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
