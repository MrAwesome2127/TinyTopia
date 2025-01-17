import ReactDOM from "react-dom/client";

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import App from "./App.tsx";  
import ErrorPage from "./pages/Error.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Models from "./pages/Models.tsx";
import ModelsList from "./pages/ModelsList.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
 


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
        element: <ModelsList />,
      },
      {
        path: '/Models/:id',
        element: <Models />,
      },
      {
        path: '/ContactUs',
        element: <ContactUs />,
      },
      {
        path: '/AboutUs',
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />)
