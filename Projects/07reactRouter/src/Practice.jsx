import React from "react";
import { ReactDOM } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         paht: '/about',
//         element: <About />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<Home />}/>
      <Route path='/user/:userid' element={<User />}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).Render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
