import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";


import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import App from "./App.tsx";
import ErrorPage from "./pages/Error.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import ModelPage from "./pages/ModelPage.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Login from "./pages/Login.tsx";
import ModelsPage from "./pages/ModelsPage.tsx";
import AboutUs from './components/AboutUs.tsx';
import Weather from './pages/Weather.tsx';

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
        path: '/Login', 
        element: <Login />,
      },
      {
        path: '/Models',
        element: <ModelsPage />,
      },
      {
        path: '/Model/:modelName',
        element: <ModelPage />,
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
      {
        path: '/Weather',
        element: <Weather />
      },
      {
        path: '/AboutUs',
        element: <AboutUs />,
      },
      {
        path: '/Weather',
        element: <Weather />
      }
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
