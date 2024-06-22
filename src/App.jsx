
import React from 'react';
import {createBrowserRouter,Outlet,RouterProvider}  from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from "./pages/home/Home";
import Discussion from "./pages/discussion/Discussion";
import Login from "./pages/loginuser/Login";
import Register from './pages/registeruser/Register';
import "./app.scss";

function App(){

  const Layout = ()=>{
    return (
      <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {   
          path:"/", 
          element:<Home/>        
        },
        {
          path: "/discussion",
          element: <Discussion/>,
        }
      ],
    },
    {
      path:"/loginuser",
      element:<Login/>,
    },
    {
      path:"/registeruser",
      element:<Register/>,
    }
  ]);

  return (
      <RouterProvider router={router}/>
  );

}


export default App
