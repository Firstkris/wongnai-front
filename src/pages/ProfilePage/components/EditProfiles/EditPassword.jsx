import React from "react";
import Container from "./Container";
import Card from "./Card";
import Header from "./Header";
import Input from "../../../../components/Input";
import { useState } from "react";
import axios from "../../../../configs/axios";
import { toast } from "react-toastify";

export default function EditPassword() {
  const [password, setPassword] = useState({});
  const change = (e) => {
    setPassword((r) => ({ ...r, [e.target.name]: e.target.value }));
  };
  console.log(password);
  return (
    <Container>
      <Card>
        <Header>เปลี่ยนรหัสผ่าน</Header>
        <div>รหัสผ่านปัจจุบัน*</div>
        <Input
          type="password"
          name={"password"}
          onChange={change}
          value={password.password}
          placeholder={"Password"}
        />
        <div>รหัสผ่านใหม่*</div>
        <Input
          type="password"
          name={"newPassword"}
          onChange={change}
          value={password.newPassword}
          placeholder={"Password"}
        />
        <div>ยืนยันรหัสผ่าน*</div>
        <Input
          type="password"
          name={"confirmPassword"}
          onChange={change}
          value={password.confirmPassword}
          placeholder={"confirm password"}
        />
        <div className="flex gap-4">
          <button
            onClick={async () => {
              try {
                if (password.newPassword != password.confirmPassword) {
                  toast.error("password invalid");
                  return;
                }
                await axios.patch("/user/password", password);
                toast.success("change password success");
              } catch (error) {
                console.log(error);
                toast.error(error.response.data.message);
              }
            }}
            className="blue_primary"
          >
            บันทึก
          </button>
          <button className="gray_primary">ยกเลิก</button>
        </div>
      </Card>
    </Container>
  );
}
