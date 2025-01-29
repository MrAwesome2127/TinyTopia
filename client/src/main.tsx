import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";


import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import App from "./App.tsx";  
import ErrorPage from "./pages/Error.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Model from "./pages/Model.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Login from "./pages/Login.tsx";
import ModelsPage from "./pages/ModelsPage.tsx";
import AboutUs from './pages/AboutUs.tsx';

 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
        {
        path: '/Models',
        element: <ModelsPage />,
      },
      {
        path: '/Model/:modelName',
        element: <Model />,
      },
      {
        path: '/ContactUs',
        element: <ContactUs />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/AboutUs',
        element: <AboutUs />,
      },

    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
} else {
  console.error("Root element not found");
}