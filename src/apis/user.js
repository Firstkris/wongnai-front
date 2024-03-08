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
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
export const userLoginWithFace = async (fromData) =>
  await axios.post("/user/loginWithFace", fromData);

export const userBookmark = async (restaurantId) =>
  await axios.post("/user/bookmark", { restaurantId });

export const createReview = async (formData) =>
  await axios.post("/user/review", formData);

export const getUserById = async (userId) => await axios.get(`/user/${userId}`);

export const deleteReviewById = async (id) =>
  await axios.delete(`/user/review/${id}`);
