import React from "react";
import { FacebookIcon, GoogleIcon, LineIcon } from "../../../../icons/icon";

export default function ProfileInfo() {
  return (
    <div className=" w-3/5">
      <div className="ml-10 mr-20 my-8 rounded-lg bg-white w-2/3 ">
        <div className="flex flex-col gap-8 px-5 py-6">
          <div className=" text-xl font-bold">ตั้งค่าโปรไฟล์</div>
          <div className="flex justify-between">
            <img
              className="h-[50px] w-[50px] object-cover rounded-full"
              src="https://www.prachachat.net/wp-content/uploads/2018/01/1-166-728x410.jpg"
            />
            <div className=" text-sm text-blue_primary w-2/3 cursor-pointer mt-5">
              เปลี่ยนรูปโปรไฟล์
            </div>
          </div>
          <hr />

          <div className="flex justify-between">
            <div>เบอร์โทรศัพท์</div>
            <div className="flex justify-between text-sm w-2/3">
              <div>0877994393</div>
              <button className=" text-blue_primary">
                เปลี่ยนเบอร์โทรศัพท์
              </button>
            </div>
          </div>
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
              <div>kewell700@hotmail.com</div>
            </div>
          </div>
          <hr />

          <div className="flex justify-between">
            <div>ชื่อ</div>
            <div className="flex justify-between text-sm w-2/3">
              <div>Punnatorn Prathombut</div>
              <button className=" text-blue_primary">แก้ไข</button>
            </div>
          </div>
          <hr />

          <div className="flex justify-between">
            <div>เพศ</div>
            <div className="flex justify-between text-sm w-2/3">
              <div>ชาย</div>
              <button className="  text-blue_primary">แก้ไข</button>
            </div>
          </div>
          <hr />

          <div className="flex justify-between">
            <div>วันเกิด</div>
            <div className="flex justify-between text-sm  w-2/3">
              <div>03/05/2542</div>
              <button className="  text-blue_primary">แก้ไข</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-10 mr-20 my-8 rounded-lg bg-white w-2/3 ">
        <div className="flex flex-col gap-8 px-5 py-6">
          <div className="flex justify-between">
            <div className="text-xl font-bold">เกี่ยวกับฉัน</div>
            <button className="text-sm text-blue_primary">แก้ไข</button>
          </div>
          <hr />
          <div className="text-gray_secondary">ไม่มีข้อมูล</div>
        </div>
      </div>

      <div className="ml-10 mr-20 my-8 rounded-lg bg-white w-2/3 ">
        <div className="flex flex-col gap-8 px-5 py-6">
          <div className="flex justify-between">
            <div className="text-xl font-bold">รหัสผ่าน</div>
            <button className="text-sm bg-blue_primary text-white px-3 rounded-lg">
              เปลี่ยนรหัสผ่าน
            </button>
          </div>
        </div>
      </div>

      <div className="ml-10 mr-20 my-8 rounded-lg bg-white w-2/3 ">
        <div className="flex flex-col gap-8 px-5 py-6">
          <div className=" text-xl font-bold">บัญชีที่เชื่อมต่อ</div>
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
        </div>
      </div>
    </div>
  );
}
