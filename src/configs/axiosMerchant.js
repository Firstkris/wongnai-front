import axios from "axios";
import { getTokenMerchant } from "../utils/local-storage";
// console.log(import.meta.env.VITE_API_URL);
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use(
  (request) => {
    const token = getTokenMerchant();
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (err) => {
    Promise.reject(err);
  }
);
export default axios;
