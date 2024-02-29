import React from "react";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

import FacebookLogin from "react-facebook-login";

function LoginPage() {
  const click = () => {
    console.log("click");
  };
  const back = async (res) => {
    console.log(res);
    // const user = await axios.post("/loginWithFace", { id: res.id });
    // setUser(user.data.message);
    // localStorage.setItem("token", user.data.token);
  };
  return (
    <div className="max-w-[1024] w-8/12 mx-auto flex flex-col items-center bg-gray_primary">
      <form className=" w-8/12 bg-white h-full  my-12 flex flex-col items-center">
        <div className=" mt-2 mb-6  flex flex-col items-center  w-2/4 gap-6 ">
          <h1 className="text-xl font-bold ite">เข้าสู่ระบบ</h1>
          <Input placeholder="เบอร์โทร/อีเมล" />
          <Input placeholder="รหัสผ่าน" />

          <button className="text-white w-full rounded-lg px-3 py-2 m-0 bg-blue_primary cursor-pointers">
            ถัดไป
          </button>

          <div className="flex justify-end w-full">
            <Link to={"/register"} className="">
              <div className="underline" role="button">
                สมัครสมาชิก
              </div>
            </Link>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded" />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
              <p className="text-gray-400">หรือ</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <FacebookLogin
              icon={
                <div className="flex text-xs w-full m-0 rounded-md">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#2497f0"
                      d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                    />
                  </svg>
                  <div className="w-full">
                    <p>เข้าสู่ระบบด้วย Facebook</p>
                  </div>
                </div>
              }
              cssClass="flex  text-xs w-full  px-3 py-2 m-0 border-2 rounded-md border-black"
              textButton=" "
              appId="702344342107870"
              autoLoad={true}
              fields="email,name"
              onClick={click}
              callback={back}
            />

            <button className="flex  text-xs w-full  px-3 py-2 m-0 border-2 rounded-md border-black">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#27d39f"
                  d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"
                />
              </svg>{" "}
              <div className="w-full">
                <p>เข้าสู่ระบบด้วย Line</p>
              </div>
            </button>

            <button className="flex  text-xs w-full  px-3 py-2 m-0 border-2 rounded-md border-black">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="#ff3d3d"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                />
              </svg>{" "}
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
