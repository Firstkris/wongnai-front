import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "../layouts/Header";
import UserReview from "../pages/User/UserReview";
import LoginPage from "../pages/User/LoginPage";
import RegisterPage from "../pages/User/RegisterPage";
import BookmarkPage from "../pages/ProfilePage/BookmarkPage";
import ReviewPage from "../pages/ProfilePage/ReviewPage";
import EditProfilePage from "../pages/ProfilePage/EditProfilePage";
const router = createBrowserRouter([
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
        element: <BookmarkPage />,
      },
      {
        path: "profile/review",
        element: <ReviewPage />,
      },

      {
        path: "profile/EditProfile",
        element: <EditProfilePage />,
      },

      { path: "/review", element: <UserReview /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
