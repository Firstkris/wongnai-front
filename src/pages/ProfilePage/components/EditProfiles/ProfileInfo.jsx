import React from "react";
import { FacebookIcon, GoogleIcon, LineIcon } from "../../../../icons/icon";
import EditInput from "./EditInput";
import Card from "./Card";
import Container from "./Container";
import Header from "./Header";
import { useState } from "react";
import Model from "./Model";
import { useAuth } from "../../../../feature/auth/contexts/AuthContext";

export default function ProfileInfo({ setIsEditPassword }) {
  const { user } = useAuth();
  const [editAboutMe, setEditAboutMe] = useState(false);
  const [editImage, setEditImage] = useState(false);

  const [profileImage, setProfileImage] = useState("");

  const birthdate = user.birthdate?.split("T")[0];
  const mobile = user?.mobile?.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

  return (
    <>
      {editImage ? (
        <Model
          setEditImage={setEditImage}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
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
              src={user.imgProfile}
            />
            <div
              className=" text-sm text-blue_primary w-2/3 cursor-pointer mt-5"
              onClick={() => setEditImage((c) => !c)}
            >
              เปลี่ยนรูปโปรไฟล์
            </div>
          </div>
          <hr />

          <EditInput title={"เบอร์โทรศัพท์"} info={mobile} />
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
              <div>{user.email}</div>
            </div>
          </div>
          <hr />

          <EditInput title={"ชื่อ"} info={user.name} />
          <hr />

          <EditInput title={"เพศ"} info={user.gender} />
          <hr />

          <EditInput title={"วันเกิด"} info={birthdate} />
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
