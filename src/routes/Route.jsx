import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import HomePage from "../pages/hpmepage/HomePage";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import AddTask from "../pages/dashboard/addTask/AddTask";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import TaskList from "../pages/dashboard/taskList/TaskList";
import UpdateTask from "../pages/dashboard/UpdateTask";
  

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path: "/",
        element: <HomePage></HomePage>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
     
      children:[
         
          {
              path: "addtask",
              element:<AddTask></AddTask>
          },
          {
            path: "tasklist",
            element:<TaskList></TaskList>
        },
      //   {
      //     path: 'updateTask/:id',
      //     element:<UpdateTask></UpdateTask> ,
      //     loader: ({params}) => fetch(`http://localhost:5173/dashboard/updateTask/${params.id}`)

      // },
      {
        path: 'updateTask/:id',
        element:<UpdateTask></UpdateTask> ,
        loader: ({params}) => fetch(`http://localhost:5000/updateTask/${params.id}`)

    },
        
      ]
  }
  ]);