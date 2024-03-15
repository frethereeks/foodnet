import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Aos from "aos";

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import PageLayout from "./layout/PageLayout";
import Error from "./pages/Error";
import Header from "./components/Header";
import { useEffect } from "react";
import SignUp from "./pages/SignUp";
import Menu from "./pages/Menu";


export default function App() {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true
    })
  },[])

  const pageRouter = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/menu",
          element: <Menu />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
      ],
      errorElement: <>
        <Header />
        <Error />
      </> 
    },
      
    
  ])

  return (
      <div className="overflow-x-hidden">
        <Toaster />
        <RouterProvider router={pageRouter}></RouterProvider>
      </div>
  )
}