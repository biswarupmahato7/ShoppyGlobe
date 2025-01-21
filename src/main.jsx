import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import ErrorElement from "./components/ErrorElement.jsx";
import ItemDetails from "./components/Items/ItemDetails.jsx";
import { ItemsProvider } from "./context/ItemContext.jsx";
import {Provider} from 'react-redux';
import { store } from "./store/index.js";
import Cart from "./components/Cart/Cart.jsx";
import BecomeASeller from "./components/BecomeASeller.jsx";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorElement/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      },
      {
        path:'/item-details/:id',
        element: <ItemDetails/>
      },
      {
        path: '/seller',
        element: <BecomeASeller/>

      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ItemsProvider>
    <RouterProvider router={appRouter}/>
    </ItemsProvider>
  </Provider>
);
