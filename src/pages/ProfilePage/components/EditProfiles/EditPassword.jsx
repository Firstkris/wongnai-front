import React from "react";
import Container from "./Container";
import Card from "./Card";
import Header from "./Header";
import Input from "../../../../components/Input";

export default function EditPassword() {
  return (
    <Container>
      <Card>
        <Header>เปลี่ยนรหัสผ่าน</Header>
        <div>รหัสผ่านปัจจุบัน*</div>
        <Input />
        <div>รหัสผ่านใหม่*</div>
        <Input />
        <div>ยืนยันรหัสผ่าน*</div>
        <Input />
        <div className="flex gap-4">
          <button className="blue_primary">บันทึก</button>
          <button className="gray_primary">ยกเลิก</button>
        </div>
      </Card>
    </Container>
  );
}
