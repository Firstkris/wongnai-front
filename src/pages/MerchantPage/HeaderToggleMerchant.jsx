import React from "react"
import { useState } from "react"
import {
  ChatIcon,
  DownTriangleIcon,
  ProfileWithCircleIcon,
  BookmarkIcon,
  SettingIcon,
  LogoutIcon,
  ShopIcon,
} from "../../icons/icon"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { useEffect } from "react"
import { useUser } from "../../feature/user/contexts/UserContext"
import { useMerchant } from "../../feature/auth/contexts/MerchantContext"

export default function HeaderToggleMerchant() {
  const { user, logout } = useUser()
  const { merchant } = useMerchant()

  const [isToggle, setIsToggle] = useState(false)
  const [isUserToggle, setIsUserToggle] = useState(false)

  const dropdown = useRef(null)

  const firstName = merchant?.name?.split(" ")[0]

  useEffect(() => {
    if (isToggle) {
      const handleClickOutSide = (e) => {
        if (dropdown.current && !dropdown.current.contains(e.target))
          setIsToggle(false)
      }
      document.addEventListener("mouseup", handleClickOutSide)
      return () => document.removeEventListener("mouseup", handleClickOutSide)
    }
  }, [isToggle])

  useEffect(() => {
    if (isUserToggle) {
      const handleClickOutSide = (e) => {
        if (dropdown.current && !dropdown.current.contains(e.target))
          setIsUserToggle(false)
      }
      document.addEventListener("mouseup", handleClickOutSide)
      return () => document.removeEventListener("mouseup", handleClickOutSide)
    }
  }, [isUserToggle])

  return (
    <div className="flex gap-2 relative z-40" ref={dropdown}>
      {user ? (
        <>
          <Link
            to={"/login"}
            className="flex justify-center items-center border border-10 border-gray-300 rounded-full px-2"
          >
            <div className="flex gap-2">
              <ShopIcon />
              {/* <img
                alt="profileImage"
                src={user?.imgProfile}
                className="w-[25px] h-[25px] rounded-full object-cover"
              /> */}
              <div className="font-bold">{firstName}</div>
            </div>
          </Link>
          <Link
            to={"/chat1"}
            className="border rounded-full px-2 cursor-pointer"
          >
            <ChatIcon className="w-6 h-6 mt-2" />
          </Link>
          <div
            className="border rounded-full px-2 cursor-pointer"
            onClick={() => {
              setIsUserToggle((c) => !c)
            }}
          >
            <DownTriangleIcon className="w-6 h-6 mt-2" />
          </div>
        </>
      ) : (
        <>
          <Link
            to={"/login"}
            className="flex justify-center items-center border border-10 border-gray-300 rounded-full px-2"
          >
            <ProfileWithCircleIcon />
            <div>เข้าสู่ระบบ</div>
          </Link>
          <div
            className="border rounded-full px-2 cursor-pointer"
            onClick={() => setIsToggle((c) => !c)}
          >
            <DownTriangleIcon className="w-6 h-6 mt-2" />
          </div>
        </>
      )}

      {isToggle ? (
        <>
          <div className="absolute top-10 right-0">
            <div className="w-72 bg-white rounded-lg shadow-md p-4">
              <div className="flex flex-col gap-4 mt-2">
                <Link
                  to={"/merchant"}
                  className="bg-red_primary px-6 py-2 text-center text-white rounded-lg cursor-pointer"
                >
                  เข้าสู่ระบบ หรือ สมัครสมาชิก
                </Link>

                {/* <hr />

                <Link to={"/merchant"} className="flex gap-4 cursor-pointer">
                  <ShopIcon />
                  <div>ร้านค้าของคุณ</div>
                </Link>
                <Link
                  to={"/profile/EditProfile"}
                  className="flex gap-4 cursor-pointer pt-2"
                >
                  <SettingIcon />
                  <div>ตั้งค่า</div>
                </Link> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      {isUserToggle && user ? (
        <>
          <div className="absolute top-10 right-0">
            <div className="w-72 bg-white rounded-lg shadow-md p-4">
              <div className="flex flex-col gap-4 mt-2">
                {/* <Link
                  to={"/profile"}
                  className="bg-red_primary px-6 py-2 text-center text-white rounded-lg cursor-pointer"
                >
                  ดูโปรไฟล์ของฉัน {">>"}
                </Link>

                <hr />
                <div className="flex flex-col gap-5 pl-5">
                  <Link
                    to={"/profile/Bookmark"}
                    className="flex gap-4 cursor-pointer"
                  >
                    <BookmarkIcon />
                    <div>ที่บันทึกไว้</div>
                  </Link>
                  <Link to={"/merchant"} className="flex gap-4 cursor-pointer">
                    <ShopIcon />
                    <div>ร้านค้าของคุณ</div>
                  </Link>
                  <Link
                    to={"/profile/EditProfile"}
                    className="flex gap-4 cursor-pointer"
                  >
                    <SettingIcon />
                    <div>ตั้งค่า</div>
                  </Link>
                </div>
                <hr /> */}
                <div
                  className="flex gap-4 cursor-pointer pl-5"
                  onClick={logout}
                >
                  <LogoutIcon />
                  <Link to="/merchant">ออกจากระบบ</Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  )
}
