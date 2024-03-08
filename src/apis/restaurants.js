import axios from "../configs/axios";

export const filterPageGetRestaurant = async () =>
  await axios.get("/restaurants");

export const getFilterRestaurant = async (filterData) =>
  await axios.get("/restaurants/filter", { params: filterData });

export const getAllUserBookmark = async () =>
  await axios.get("/restaurants/bookmark");

export const getRestaurantById = async (restaurantId) =>
  await axios.get(`/restaurants/${restaurantId}`);

/// ไม่ได้ใช้
export const getReviewById = async (restaurantId) =>
  await axios.get(`/restaurants/${restaurantId}/review`);
