import io from "socket.io-client";

const socket = io.connect("http://localhost:8888/");

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
import { useParams } from "react-router-dom";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [r, serR] = useState("");
  const [filterPageData, setFilterPageData] = useState({});
  const [filterInput, setFilterInput] = useState({ rating: [] });
  const [isLoading, setLoading] = useState(false);

  const [restaurantData, setRestaurantPage] = useState({});
  const [reviewsRating, setReviewsRating] = useState(null);

  const { user } = useUser();
  const [restaurant, setRestaurant] = useState("");
  const [searchBar1, setSearchBar] = useState([]);

  const [nameRestaurant, setNameRestaurant] = useState([]);
  const fetch = async () => {
    const data = await filterPageGetRestaurant();
    setNameRestaurant(data.data.restaurants);

    const response = await filterPageGetRestaurant();
    setSearchBar(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    socket.auth = { sender: "RESTAURANT" + r };
    // console.log("first");
    socket.connect();
    return () => socket.disconnect();
  }, [r]);

  const fetchFilterPage = async () => {
    try {
      // setLoading(true)
      const response = await filterPageGetRestaurant();
      setFilterPageData(response.data);
      // setSearchBar(response.data);
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
        if (user) {
          console.log("have user");
          fetchRestaurantWithUserLogin();
        } else {
          console.log("no user");
          fetchFilterPage();
        }
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
      console.log(err);
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
      setFilterPageData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRestaurantAndBookmarkById = async (restaurantId) => {
    try {
      setLoading(true);
      if (user) {
        const [restaurantResponse, bookmarkResponse] = await Promise.all([
          getRestaurantById(restaurantId),
          getUserBookmark(restaurantId),
        ]);

        setRestaurantPage({
          restaurant: restaurantResponse.data?.restaurant,
          bookmarks: bookmarkResponse.data?.bookmarks,
        });
        return;
      }

      const response = await getRestaurantById(restaurantId);
      setRestaurantPage({
        restaurant: response.data?.restaurant,
        bookmarks: [],
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const filterByRating = (rating) => {
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
        setLoading,
        fetchRestaurantAndBookmarkById,
        restaurantData,
        filterByRating,
        reviewsRating,
        nameRestaurant,
        setRestaurantPage,
        restaurant,
        setRestaurant,
        socket,
        serR,
        searchBar1,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
