import React from "react";
import Input from "../../components/Input";
import { FacebookIcon, GoogleIcon, LineIcon } from "../../icons/icon";

function LoginPage() {
  return (
    <div className="max-w-[1024] w-8/12 mx-auto flex flex-col items-center bg-gray_primary">
      <form className=" w-8/12 bg-white h-full  my-12 flex flex-col items-center">
        <div className=" mt-2 mb-6  flex flex-col items-center  w-2/4 gap-6 ">
          <h1 className="text-xl font-bold ite">เข้าสู่ระบบ</h1>
          <Input placeholder="เบอร์โทร/อีเมล" />
          <Input placeholder="พาสเวิร์ด" />

          <button className="text-white w-full rounded-lg px-3 py-2 m-0 bg-blue_primary">
            ถัดไป
          </button>

          <div className="flex justify-end w-full">
            <a className="text-xs underline " href="/register">
              สมัครสมาชิก
            </a>
          </div>
          <div class="inline-flex items-center justify-center w-full">
            <hr class="w-full h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <p className="text-gray-400">หรือ</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <button className="flex  text-xs w-full  px-3 py-2 m-0 border-2 rounded-md border-black">
              <FacebookIcon />
              <div className="w-full">
                <p>เข้าสู่ระบบด้วย Facebook</p>
              </div>
            </button>

            <button className="flex  text-xs w-full  px-3 py-2 m-0 border-2 rounded-md border-black">
              <LineIcon />
              <div className="w-full">
                <p>เข้าสู่ระบบด้วย Line</p>
              </div>
            </button>

            <button className="flex  text-xs w-full  px-3 py-2 m-0 border-2 rounded-md border-black">
              <GoogleIcon />

              <div className="w-full">
                <p>เข้าสู่ระบบด้วย Google</p>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
