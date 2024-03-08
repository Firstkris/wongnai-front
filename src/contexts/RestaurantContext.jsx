import { useState, createContext } from "react";
import {
  filterPageGetRestaurant,
  getFilterRestaurant,
  getAllUserBookmark,
  getRestaurantById,
} from "../apis/restaurants";
import { useUser } from "../feature/user/contexts/UserContext";
import { userBookmark, getUserBookmark } from "../apis/user";

import { useEffect } from "react";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [filterPageData, setFilterPageData] = useState({});
  const [filterInput, setFilterInput] = useState({ rating: [] });
  const [isLoading, setLoading] = useState(false);

  const [restaurantData, setRestaurantPage] = useState({});
  const [reviewsRating, setReviewsRating] = useState(null);

  const { user } = useUser();

  const [nameRestaurant, setNameRestaurant] = useState([]);
  const fetch = async () => {
    const data = await filterPageGetRestaurant();
    setNameRestaurant(data.data.restaurants);
  };
  useEffect(() => {
    fetch();
  }, []);

  const fetchFilterPage = async () => {
    try {
      // setLoading(true)
      const response = await filterPageGetRestaurant();
      setFilterPageData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }
  };

  const fetchFilterData = async (filterData) => {
    try {
      if (Object.keys(filterData).length === 0) {
        console.log("no filter");
        return;
      } else if (Object.values(filterData).every((arr) => arr.length === 0)) {
        console.log(user, "-------------------");
        if (user) {
          console.log("have user");
          fetchRestaurantWithUserLogin();
        } else {
          console.log("no user");
          fetchFilterPage();
        }
        return;
      }
      const filterDataParams = {
        districtId: filterData?.districtNameTh,
        facilityId: filterData?.facilityName,
        rating: filterData?.rating,
        priceLength: filterData?.priceLength,
        categoryId: filterData?.categoryName,
      };

      const response = await getFilterRestaurant(filterDataParams);

      if (response.data?.restaurants?.length > 0) {
        setFilterPageData((prev) => ({
          ...prev,
          restaurants: response.data?.restaurants,
        }));
      } else {
        setFilterPageData((prev) => ({
          ...prev,
          restaurants: [],
        }));
      }
    } catch (err) {
      console.log("error");
    }
  };

  const clearFilters = () => {
    try {
      setFilterInput({});
      if (!user) {
        fetchFilterPage();
      } else {
        fetchRestaurantWithUserLogin();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRestaurantWithUserLogin = async () => {
    //if user is login
    try {
      const response = await getAllUserBookmark();
      console.log(response.data.restaurants);
      setFilterPageData((prev) => ({
        ...prev,
        restaurants: response.data?.restaurants,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRestaurantAndBookmarkById = async (restaurantId) => {
    try {
      setLoading(true);
      const [restaurantResponse, bookmarkResponse] = await Promise.all([
        getRestaurantById(restaurantId),
        getUserBookmark(restaurantId),
      ]);

      setRestaurantPage({
        restaurant: restaurantResponse.data?.restaurant,
        bookmarks: bookmarkResponse.data?.bookmarks,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filterByRating = (rating) => {
    console.log(rating);
    const reviews = restaurantData?.restaurant?.reviews?.filter(
      (el) => el.star == rating
    );
    setReviewsRating(reviews);
  };
  ////////

  return (
    <RestaurantContext.Provider
      value={{
        filterPageData,
        setFilterInput,
        fetchFilterPage,
        filterInput,
        fetchFilterData,
        clearFilters,
        fetchRestaurantWithUserLogin,
        isLoading,

        fetchRestaurantAndBookmarkById,
        restaurantData,
        filterByRating,
        reviewsRating,
        nameRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
