import axios from "../configs/axios";
import { getToken } from "../utils/local-storage";


export const login = async (fromData) =>
  await axios.post("/merchant/login", fromData);

export const register = async (fromData) => axios.post('/merchant/register', fromData);

export const fetchMe = () =>
  axios.get("/user/me", {
    headers: { Authorization: `Bearer ${getToken}` },
  });
