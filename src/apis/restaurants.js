import axios from "../configs/axios";

export const filterPageGetRestaurant = async () =>
  await axios.get("/restaurants");

export const getFilterRestaurant = async (filterData) =>
  await axios.get("/restaurants/filter", { params: filterData });

export const getUserBookmark = async () =>
  await axios.get("/restaurants/bookmark");

export const getRestaurantById = async ({ restaurantId }) => {
  console.log(restaurantId);
  await axios.get(`/restaurants/${restaurantId}`);
};
