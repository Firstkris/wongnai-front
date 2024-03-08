import React from "react";
import { FacebookIcon, GoogleIcon, LineIcon } from "../../../../icons/icon";
import EditInput from "./EditInput";
import Card from "./Card";
import Container from "./Container";
import Header from "./Header";
import { useState } from "react";
import axios from "../../../../configs/axios";
import { useUser } from "../../../../feature/user/contexts/UserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Modal from "./Modal";

// const initial = {
//   name: user?.name,
//   imgProfile: "",
// };

export default function ProfileInfo({ setIsEditPassword }) {
  const { user, setUser, onFetch } = useUser();
  // const [editAboutMe, setEditAboutMe] = useState(false);
  const [editImage, setEditImage] = useState(false);
  const [input, setInput] = useState(user);
  const [onEditInfo, setOnEditInfo] = useState(false);

  const [profileImage, setProfileImage] = useState(user.imgProfile);
  const [profileImage1, setProfileImage1] = useState(user.imgProfile);

  useEffect(() => {
    setProfileImage(user.imgProfile);
    setProfileImage1(user.imgProfile);
  }, [onFetch]);

  user.birthdate = user?.birthdate?.split("T")[0];
  // console.log(birthdate);
  const mobile = user?.mobile?.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value }); //{...[A:1,B:2,C:3]} ==>  {A:1,B:2,C:3}
  };

  // เพศ
  const handleOnEdit = async () => {
    try {
      setUser(input);
      setOnEditInfo((c) => !c);

      await axios.patch("/user", { gender: input.gender });
      toast.success("Edit profile successful");
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(user);
  // แก้รูป
  const handleSubmit = async () => {
    console.log("******");
    console.log(input.id);
    const formData = new FormData();
    formData.append("imgProfile", profileImage1);
    formData.append("id", input.id);

    console.log(formData);

    await axios.patch("/user/user-img", formData);
  };
  // console.log("*****************************************", user?.imgProfile);
  // console.log("user", user);
  console.log("input", input);
  console.log("profileImage1", profileImage1);

  return (
    <>
      {editImage ? (
        <Modal
          setEditImage={setEditImage}
          profileImage={profileImage || user?.imgProfile}
          setProfileImage={setProfileImage}
          setUser={setUser}
          handleSubmit={handleSubmit}
          setProfileImage1={setProfileImage1}
          // user={user}
        />
      ) : (
        ""
      )}
      <Container>
        <Card>
          <Header>ตั้งค่าโปรไฟล์</Header>
          <div className="flex justify-between">
            <img
              className="h-[50px] w-[50px] object-cover rounded-full"
              // src={profileImage}
              src={user?.imgProfile}
            />
            <div
              className=" text-sm text-blue_primary w-2/3 cursor-pointer mt-5"
              onClick={() => setEditImage((c) => !c)}
            >
              เปลี่ยนรูปโปรไฟล์
            </div>
          </div>
          <hr />

          <EditInput
            title={"เบอร์โทรศัพท์"}
            info={mobile}
            input={input}
            name={"mobile"}
            handleChangeInput={handleChangeInput}
            setInput={setInput}
          />
          <hr />

          <div className="flex justify-between">
            <div>ชื่อผู้ใช้</div>
            <div className="flex justify-between text-sm w-2/3">
              <div>aset5yneusrtuyjty</div>
            </div>
          </div>
          <hr />

          <div className="flex justify-between">
            <div>อีเมล</div>
            <div className="flex justify-between text-sm w-2/3">
              <div>{user?.email}</div>
            </div>
          </div>
          <hr />

          <EditInput
            title={"ชื่อ"}
            info={user?.name}
            input={input}
            name={"name"}
            handleChangeInput={handleChangeInput}
            setInput={setInput}
          />
          <hr />

          <div className="flex justify-between">
            <div>เพศ</div>
            {onEditInfo ? (
              <div className=" flex flex-col gap-5 w-2/3">
                <select
                  value={input.gender}
                  name="gender"
                  id="genders"
                  onChange={handleChangeInput}
                >
                  <option value="MALE" name="gender">
                    MALE
                  </option>
                  <option value="FEMALE" name="gender">
                    FEMALE
                  </option>
                </select>

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
                <div>{user?.gender}</div>
                <button
                  className="text-blue_primary"
                  onClick={() => setOnEditInfo((c) => !c)}
                >
                  แก้ไข
                </button>
              </div>
            )}
          </div>
          <hr />

          <EditInput
            type={"date"}
            title={"วันเกิด"}
            info={user.birthdate}
            input={input}
            name={"birthdate"}
            handleChangeInput={handleChangeInput}
          />
        </Card>

        {/* <Card>
          <div className="flex justify-between">
            <Header>เกี่ยวกับฉัน</Header>
            <button
              onClick={() => setEditAboutMe((c) => !c)}
              className="text-sm text-blue_primary"
            >
              แก้ไข
            </button>
          </div>
          <hr />

          {editAboutMe ? (
            <>
              <textarea
                focus:outline-none
                className="py-3 px-2 border focus:outline-none focus:border-blue-500
              focus:ring-2 focus:ring-blue-300 rounded-lg"
                rows={4}
                placeholder="เกี่ยวกับฉัน"
              ></textarea>
              <div className="flex gap-3">
                <button
                  className="blue_primary"
                  onClick={() => setEditAboutMe((c) => !c)}
                >
                  บันทึก
                </button>
                <button
                  className="gray_primary"
                  onClick={() => setEditAboutMe((c) => !c)}
                >
                  ยกเลิก
                </button>
              </div>
            </>
          ) : (
            <div className="text-gray_secondary ">ไม่มีข้อมูล</div>
          )}
        </Card> */}

        <Card>
          <div className="flex justify-between">
            <Header>รหัสผ่าน</Header>
            <button
              className="text-sm bg-blue_primary text-white px-3 rounded-lg"
              onClick={() => setIsEditPassword((c) => !c)}
            >
              เปลี่ยนรหัสผ่าน
            </button>
          </div>
        </Card>

        <Card>
          <Header>บัญชีที่เชื่อมต่อ</Header>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <FacebookIcon />
              <div className="text-gray_secondary text-sm">เชื่อมต่อแล้ว</div>
            </div>
            <button className="  text-blue_primary">ยกเลิกการเชื่อมต่อ</button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <LineIcon />
              <div className="text-gray_secondary text-sm">เชื่อมต่อแล้ว</div>
            </div>
            <button className="  text-blue_primary">ยกเลิกการเชื่อมต่อ</button>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <GoogleIcon />
              <div className=" text-blue_primary text-sm">
                เชื่อมต่อกับ Google
              </div>
            </div>
            {/* <button className="  text-blue_primary">ยกเลิกการเชื่อมต่อ</button> */}
          </div>
        </Card>
      </Container>
    </>
  );
}
