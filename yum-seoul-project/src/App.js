import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MainPage from './pages/Main';
import AuthPage from './pages/Auth';
import Signup from './components/layout/Auth/Signup';
import Signin from './components/layout/Auth/Signin';
import ResetPassword from './components/layout/Auth/ResetPassword';
import StoreMain from './components/layout/store/StoreMain';
import StoreDetail, { loader as storeDetailLoader } from './components/layout/store/StoreDetail';

import MainContentUpload from './components/layout/MainContentUpload';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          children: [
            { index: true, element: <MainPage /> },
            { path: 'store', element: <StoreMain /> },
            { path: 'store/:storeId', element: <StoreDetail />, loader: storeDetailLoader },
            { path: 'upload/main', element: <MainContentUpload /> }
          ]
        },
        {
          path: '/auth',
          element: <AuthPage />,
          children: [
            { path: 'signup', element: <Signup /> },
            { path: 'signin', element: <Signin /> },
            { path: 'resetpassword', element: <ResetPassword /> },
          ]
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;