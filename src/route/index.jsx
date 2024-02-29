import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "../layouts/Header";
import BookmarkPage from "../pages/ProfilePage/BookmarkPage";
import ReviewPage from "../pages/ProfilePage/ReviewPage";

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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
