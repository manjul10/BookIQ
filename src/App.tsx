// import { useEffect } from "react";
import "./App.css";
// import supabase from "./services/supabase";
// import Uploader from "./data/Uploader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Users from "./pages/Users";
import Bookings from "./pages/Bookings";
import Dashboard from "./pages/Dashboard";
import { QueryClient } from "@tanstack/react-query";

// Setup TanStack Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  // useEffect(()=>{
  //   async function testConnection(){
  //     const {data,error} = await supabase.from('cabins').select('*')
  //     if(error) {
  //       console.error('Error fetching data:', error)
  //     } else {
  //       console.log('Data fetched successfully:', data)
  //     }

  //   }

  //   testConnection()
  // })
  return <RouterProvider router={router} />;
}

export default App;
