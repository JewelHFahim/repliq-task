import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Orders from "../Pages/Orders/Orders";
import ProductDetails from "../Pages/Products/ProductDetails";
import Products from "../Pages/Products/Products";
import Category from "../Pages/Category/Category";
import Customer from "../Pages/Customer/Customer";
import Account from "../Pages/Account/Account";
import Invoice from "../Pages/Orders/Invoice";
import AddProducts from "../Pages/Products/AddProducts";
import UpdateProduct from "../Pages/Products/UpdatProduct";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRouter>
            <Home></Home>
          </PrivateRouter>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRouter>
            <Orders></Orders>
          </PrivateRouter>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRouter>
            <Products></Products>
          </PrivateRouter>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRouter>
            <ProductDetails></ProductDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://healthos-server-jewelhfahim.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRouter>
            <UpdateProduct></UpdateProduct>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://healthos-server-jewelhfahim.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/categories",
        element: (
          <PrivateRouter>
            <Category></Category>
          </PrivateRouter>
        ),
      },
      {
        path: "/customer",
        element: (
          <PrivateRouter>
            <Customer></Customer>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/account",
        element: (
          <PrivateRouter>
            <Account></Account>
          </PrivateRouter>
        ),
      },
      {
        path: "/invoice",
        element: (
          <PrivateRouter>
            <Invoice></Invoice>
          </PrivateRouter>
        ),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRouter>
            <AddProducts></AddProducts>
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;
