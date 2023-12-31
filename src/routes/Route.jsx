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
import WhyChooseUs from "../pages/WhyChooseUs";
import ContactUs from "../pages/ContactUs";
  

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
          path: "/whyChooseUs",
          element: <WhyChooseUs></WhyChooseUs>
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>
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
            path: "",
            element:<TaskList></TaskList>
        },
 
      {
        path: 'updateTask/:id',
        element:<UpdateTask></UpdateTask> ,
        loader: ({params}) => fetch(`https://task-management-server-side-sable.vercel.app/updateTask/${params.id}`)

    },
        
      ]
  }
  ]);