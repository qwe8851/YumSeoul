import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import AuthPage from './pages/Auth';
import Signup from './components/layout/auth/Signup';
import Signin from './components/layout/auth/Signin';

import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
      ]
    },
    {
      path: '/auth',
      element: <AuthPage />,
      children: [
        { path: 'signup', element: <Signup /> },
        { path: 'signin', element: <Signin /> },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;