import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import Signup from './components/layout/Signup';
import Signin from './components/layout/Signin';

import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/signup', element: <Signup /> },
        { path: '/signin', element: <Signin /> },
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;