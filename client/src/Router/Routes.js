import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import CreateMediaKit from "../pages/CreateMediaKit";
import DashBoard from "../pages/DashBoard";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import AuthRoutes from "../utils/AuthRoutes"

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element:<AuthRoutes/>,
        children:[
          ,
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          }
        ]    
      }
     ,
      { 
        path: "/", 
        element: <Home /> },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/dashboard",
            element: <DashBoard />,
          },
          {
            path: "/mediaKits",
            element: <CreateMediaKit />,
          },
        ],
      },

     
    ],
  },
]);

export default Routes;
