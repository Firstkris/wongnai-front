import React from 'react';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from '../layouts/Header';

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
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
