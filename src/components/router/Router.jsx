import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import Drivers from "../Drivers/Drivers";
import Mechanics from "../Mechanics/Mechanics";
import Dashboard from "../dashboard/Dashboard";
import Login from "../Login/Login";
import ResetPassword from "../Forget-reset-password/ResetPassword";
import ForgetPassword from "../Forget-reset-password/ForgetPassword";
import DriverForm from "../Forms/DriverForm";
import Manager from "../../components/Manager/Manager";
import ManagerAdd from "../Forms/MangerAdd";
import Mechans from "../Mechanics/Mechanics";
import MecghanicAdd from "../Forms/MechanicAdd";
import NotFound from "../NotFound/NotFound";
import Vehicles from "../Vehicles/Vehicles";
import VehiclesAdd from "../Vehicles/VehiclesAdd";
import Model from "../Vehicles/Model";
import Category from "../Vehicles/Category";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ManagersProfile from "../Manager/ManagersProfile";
import VehiclesProfile from "../Vehicles/VehiclesProfile";
import DriverProfile from "../Drivers/DriverProfile";
import MechanicsProfile from "../Mechanics/MechanicsProfile";
import CategoryAdd from "../Forms/CategoryAdd";
import ModelAdd from "../Vehicles/ModelAdd";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "/Overview", element: <Dashboard /> },
          { path: "/users/drivers", element: <Drivers /> },
          { path: "/users/drivers/add", element: <DriverForm /> },
          { path: "/users/mechanics", element: <Mechans /> },
          { path: "/users/mechanics/add", element: <MecghanicAdd /> },
          { path: "/users/managers", element: <Manager /> },
          { path: "/users/managers/add", element: <ManagerAdd /> },
          { path: "/vehicles", element: <Vehicles /> },
          { path: "/vehicles/add", element: <VehiclesAdd /> },
          { path: "/vehicles/model", element: <Model /> },
          { path: "/vehicles/categories", element: <Category /> },
          { path: "/ManagerProfile/:id", element: <ManagersProfile /> },
          { path: "/VehiclesProfile/:id", element: <VehiclesProfile /> },
          { path: "/driverProfile/:id", element: <DriverProfile /> },
          { path: "/mechanicProfile/:id", element: <MechanicsProfile /> },
          { path: "/category/add", element: <CategoryAdd /> },
          { path: "/model/add", element: <ModelAdd /> },
        ],
      },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "ResetPassword", element: <ResetPassword /> },
  { path: "ForgetPassword", element: <ForgetPassword /> },
  { path: "*", element: <NotFound /> },
]);

export default Router;
