import axios from "../configs/axios";
import { getToken } from "../utils/local-storage";

export const userRegister = async (fromData) =>
  await axios.post("/user/register", fromData);
export const userLogin = async (fromData) =>
  await axios.post("/user/login", fromData);
export const userLoginWithFacebook = async (fromData) =>
  await axios.post("/user/loginWithFace", fromData);

export const fetchMe = async () =>
  await axios.get("/user/me", {
    headers: { Authorization: `Bearer ${getToken}` },
  });

export const getUserById = async (userId) => await axios.get(`/user/${userId}`);
