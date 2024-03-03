import React from "react";
import { useState } from "react";
import Container from "../EditProfiles/Container";
import Card from "../EditProfiles/Card";
import Header from "../EditProfiles/Header";

export default function DarkModeItem() {
  const [selectedValue, setSelectedValue] = useState("ปิด");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <Card>
        <Header>จอภาพ และการแสดงผล</Header>
        <div className="text-lg font-bold">โหมดสีเข้ม</div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <input
              type="radio"
              className="w-[20px] h-[20px]"
              name="myRadioGroup"
              value="ปิด"
              checked={selectedValue === "ปิด"}
              onChange={handleRadioChange}
            />
            <div className="text-gray_secondary text-lg">ปิด</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4">
            <input
              className="w-[20px] h-[20px]"
              type="radio"
              name="myRadioGroup"
              value="เปิด"
              checked={selectedValue === "เปิด"}
              onChange={handleRadioChange}
              defaultChecked
            />
            <div className="text-gray_secondary text-lg">เปิด</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-4 ">
            <input
              className="w-[20px] h-[20px]"
              type="radio"
              name="myRadioGroup"
              value="อัตโนมัติ"
              checked={selectedValue === "อัตโนมัติ"}
              onChange={handleRadioChange}
              defaultChecked
            />
            <div className="flex flex-col gap-2">
              <div className=" text-gray_secondary text-lg">อัตโนมัติ</div>
              <div className=" text-gray_secondary ">
                ปรับตามการแสดงผลตามการตั้งค่าระบบของอุปกรณ์ของคุณโดยอัตโนมัติ
              </div>
            </div>
          </div>
          {/* <button className="  text-blue_primary">ยกเลิกการเชื่อมต่อ</button> */}
        </div>
      </Card>
    </Container>
  );
}
