import React from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import MainPage from './pages/Main';
import AuthPage from './pages/Auth';
import Signup from './components/layout/Auth/Signup';
import Signin from './components/layout/Auth/Signin';
import ResetPassword from './components/layout/Auth/ResetPassword';
import ResetCode from './components/layout/Auth/ResetCode';
import StoreMain from './components/layout/store/StoreMain';
import StoreDetail from './components/layout/store/StoreDetail';

import MainContentUpload from './components/layout/MainContentUpload';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        { index: true, element: <MainPage /> },
        { path: 'store', element: <StoreMain /> },
        { path: 'store/:storeId', element: <StoreDetail /> },
        { path: 'upload', element: <MainContentUpload /> }
      ]
    }, 
    {
      path: '/auth',
      element: <AuthPage />,
      children: [
        { index: true, element: <Navigate replace to="/auth/signin"/> },
        { path: 'signup', element: <Signup /> },
        { path: 'signin', element: <Signin /> },
        { path: 'resetcode', element: <ResetCode /> },
        { path: 'resetpassword', element: <ResetPassword /> },
      ]
    },
    {
      path: "*", element: <ErrorPage />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;