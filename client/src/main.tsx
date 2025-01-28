import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";


import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import App from "./App.tsx";  
import ErrorPage from "./pages/Error.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Models from "./pages/Models.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Login from "./pages/Login.tsx";

 

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
      //   {
    //     path: '/Models',
    //     element: <ModelsPage homes={[]} />,
    //   },
      {
        path: '/Models/:modelName',
        element: <Models />,
      },
      {
        path: '/ContactUs',
        element: <ContactUs />,
      },
      {
        path: '/Login',
        element: <Login />,
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