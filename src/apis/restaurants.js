import axios from "../configs/axios";

export const filterPageGetRestaurant = async () =>
  await axios.get("/restaurants");

export const getFilterRestaurant = async (filterData) =>
  await axios.get("/restaurants/filter", { params: filterData });

export const getAllUserBookmark = async () =>
  await axios.get("/restaurants/bookmark");

export const getRestaurantById = async (restaurantId) =>
  await axios.get(`/restaurants/${restaurantId}`);

export const uploadRestaurantImg = async (restaurantId, restaurantImg) =>
  await axios.post(`/restaurants/Img/${restaurantId}`, restaurantImg);

export const deleteRestaurantImg = async (restaurantId) =>
  await axios.delete(`/restaurants/Img/${restaurantId}`);

export const getCategoryById = async (categoryId) =>
  await axios.get(`/restaurants/category/${categoryId}`);
