import axios from "../configs/axios"
import { getToken } from "../utils/local-storage"

export const userRegister = async (fromData) =>
  await axios.post("/user/register", fromData)
export const userLogin = async (fromData) =>
  await axios.post("/user/login", fromData)
export const userLoginWithFacebook = async (fromData) =>
  await axios.post("/user/loginWithFace", fromData)

export const fetchMe = () =>
  axios.get("/user/me", {
    headers: { Authorization: `Bearer ${getToken}` },
  })
await axios.post("/user/loginWithFace", fromData)

export const userBookmark = async (restaurantId) =>
  await axios.post("/user/bookmark", { restaurantId })
