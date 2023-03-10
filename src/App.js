import React from 'react';
import './App.css';
import Home from './pages/home';
import { ErrorPage } from './pages/errorPage';

import { RootComponent } from './pages/root';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Signup } from './pages/signup';
import { ListPage } from './pages/list';
import { Detail } from './pages/detail';
import 'react-slideshow-image/dist/styles.css'
import { RegisterForm } from './pages/register';

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: teamLoader,
      },
      {
        path: "signup",
        element: <Signup />,
        // loader: teamLoader,
      },
      {
        path: "Listing",
        element: <ListPage />,
        // loader: teamLoader,
      },
      {
        path: "detail",
        element: <Detail />,
        // loader: teamLoader,
      },
      {
        path: "register",
        element: <RegisterForm />,
        // loader: teamLoader,
      },
    ],
  },
  
]);



function App() {
  return (
    <>
<RouterProvider router={router} />

   
    
   
    
    </>
  );
}



export default App;
