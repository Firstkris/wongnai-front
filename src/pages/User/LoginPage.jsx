import React from "react";
import Input from "../../components/Input";
import { FacebookIcon, GoogleIcon, LineIcon } from "../../icons/icon";
import { Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { useState } from "react";
import axios from "../../configs/axios";
import { userLogin, userLoginWithFacebook } from "../../apis/user";
import { validateLogin } from "../../validations/validate-login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../../feature/user/contexts/UserContext";
import { toast } from "react-toastify";

import * as Token from "../../../src/utils/local-storage";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

function LoginPage() {
  const [validateError, setValidateError] = useState(null);

  // function LoginPage() {
  const { setUser, user } = useUser();
  const [input, setInput] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const clientId =
    "360767650639-0evi93so64jv4opi2118007bjfuui5sj.apps.googleusercontent.com";

  const click = () => {
    console.log("click");
  };
  const back = async (res) => {
    // const user = await axios.post("/user/loginWithFace", res);
    const user = await userLoginWithFacebook(res);
    // รอว่าจะใช้ context หรือ redux
    Token.setToken(user.data.token);

    user.data.user;

    // localStorage.setItem("token", user.data.token);
    //
    //
  };

  const handleChangeInput = (e) => {
    setValidateError("");
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const validate = validateLogin(input);
      if (validate) return setValidateError("Email or password invalid");
      //
      //
      //   const response = await axios.post("/user/login", input);
      const response = await userLogin(input);
      // รอว่าจะใช้ context หรือ redux
      Token.setToken(response.data.token);
      setUser(response.data.user);
      toast.success("Login successful");
      navigate("/");

      // console.log("user", user.birthdate);
    } catch (err) {
      setValidateError("Email or password invalid");
      console.log(err);
    }
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  //   console.log(useLocation().pathname);
  //   console.log(useParams());
  return (
    <div className="max-w-[1024] w-8/12 mx-auto flex flex-col items-center bg-gray_primary">
      <form
        onSubmit={handleSubmit}
        className=" w-8/12 bg-white h-full  my-12 flex flex-col items-center py-6 rounded-2xl"
      >
        <div className=" mt-2 mb-6  flex flex-col items-center  w-2/4 gap-6 ">
          <h1 className="text-xl font-bold ite">เข้าสู่ระบบ</h1>
          <Input
            placeholder="เบอร์โทร/อีเมล"
            onChange={handleChangeInput}
            name={"username"}
          />
          <Input
            type="password"
            placeholder="รหัสผ่าน"
            onChange={handleChangeInput}
            name={"password"}
          />
          <div className="w-full">
            {validateError ? (
              <p className="text-sm text-red-500"> {validateError}</p>
            ) : null}
            <button className="text-white w-full rounded-lg px-3 py-2 m-0 bg-blue_primary cursor-pointers">
              ถัดไป
            </button>
          </div>

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
            <GoogleLogin
              clientId={clientId}
              buttonText="sign in with google"
              onSuccess={async (res) => {
                const user = await axios.post("/user/loginWithGoogle", res);

                Token.setToken(user.data.token);
                setUser(user.data.user);
              }}
              onFailure={(res) => {
                console.log(res);
              }}
              cookiePolicy={"single_host_origin"}
              isSignedIn={false}
            />
            {/* <GoogleLogout
              clientId={clientId}
              buttonText="Log out"
              onLogoutSuccess={(res) => console.log(res)}
            /> */}
            {/* <button className="flex  text-xs w-full  px-3 py-2 m-0 border-2 rounded-md border-black">
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
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
