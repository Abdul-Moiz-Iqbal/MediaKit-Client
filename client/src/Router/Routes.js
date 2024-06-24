import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
// import DashBoard from "../pages/DashBoard";
// import JobDescription from "../pages/JobDescription";
// import SignUp from "../pages/SignUp";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import CreateMediaKit from "../pages/CreateMediaKit";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CreateMediaKit />,
      },
      {path:'/Home',
        element:<Home/>
      }
      ,
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    //   {
    //     path: "/JobDescription",
    //     element: <JobDescription />,
    //   },
      
    ],
  },
 
]);

export default Routes;
