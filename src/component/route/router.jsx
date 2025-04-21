import {
    createBrowserRouter
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Hero from "../Home/Hero/Hero";
import Services from "../Home/Services/Services";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardOverview from "../Dashboard/DashboardOverview/DashboardOverview";
import AddProject from "../Dashboard/AddProject/AddProject";
import EditOrDeleteProject from "../Dashboard/EditOrDeleteProject/EditOrDeleteProject";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Home/Contact/Contact";
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "hero",
        element: <Hero />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "services",
        element: <Services />
      }
    ]
  },
  {
    path: "/admin",
    element: <Login />
  },
  {
    path: "/admin/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "overview", 
        element: <DashboardOverview />
      },
      {
        path: "addproject",
        element: <AddProject />
      },
      {
        path: "editordeleteproject",
        element: <EditOrDeleteProject />
      }
    ]
  }
]);

export default router;