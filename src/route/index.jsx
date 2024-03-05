import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { FilterPage } from "../pages/FilterPage";

<<<<<<< HEAD
import RestaurantRegisterPage from '../pages/Restaurant/RestaurantRegisterPage';
=======
import Header from "../layouts/Header";
import RestaurantRegisterPage from "../pages/Restaurant/RestaurantRegisterPage";
>>>>>>> f69e52e0c8a6801e330541628b6fb41443dd5f6e

import UserReview from "../pages/User/UserReview";
import LoginPage from "../pages/User/LoginPage";
import RegisterPage from "../pages/User/RegisterPage";
import BookmarkPage from "../pages/ProfilePage/BookmarkPage";
import RestaurantPage from "../pages/MainPage/RestaurantPage";
import ReviewPage from "../pages/ProfilePage/ReviewPage";
import EditProfilePage from "../pages/ProfilePage/EditProfilePage";
import ProtectedProfileRoute from "../feature/auth/components/ProtectedProfileRoute";
import RedirectIfAuthenticated from "../feature/auth/components/RedirectIfAuthenticated";
import GoogleMaps from "../pages/GoogleMaps";
const router = createBrowserRouter([
  { path: "/huntest", element: <GoogleMaps /> },
  {
    path: "/",
    element: (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/profile",
        element: (
          <ProtectedProfileRoute>
            <ReviewPage />,
          </ProtectedProfileRoute>
        ),
      },
      {
        path: "profile/Bookmark",
        element: (
          <ProtectedProfileRoute>
            <BookmarkPage />
          </ProtectedProfileRoute>
        ),
      },

      {
        path: "profile/EditProfile",
        element: <EditProfilePage />,
      },

      // {
      //   path: "profile/:userId",
      //   element:
      // }

      { path: "/review", element: <UserReview /> },
      {
        path: "/login",
        element: (
          <RedirectIfAuthenticated>
            <LoginPage />
          </RedirectIfAuthenticated>
        ),
      },
      { path: "/register", element: <RegisterPage /> },
      { path: "/restaurants", element: <RestaurantPage />},

      { path: "/restaurants/filter", element: <FilterPage /> },
      {
<<<<<<< HEAD
        path: '/merchant',
        element: <RestaurantRegisterPage />
      }

=======
        path: "/restaurant",
        element: <RestaurantRegisterPage />,
      },
>>>>>>> f69e52e0c8a6801e330541628b6fb41443dd5f6e
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
