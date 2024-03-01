import React from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from '../layouts/Header';
import RestaurantRegisterPage from '../pages/Restaurant/RestaurantRegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className='flex flex-col min-h-screen'>
        <Header />
        <Outlet />
      </div>
    ),
    children: [{}],
  }, {
    path: '/restaurant',
    element: <RestaurantRegisterPage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
