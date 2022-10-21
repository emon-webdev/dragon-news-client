import { createBrowserRouter } from "react-router-dom";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import News from "../Pages/News";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import TermsAndCondition from "../Pages/TermsAndCondition";
import Root from "../Root/Root";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><News /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <TermsAndCondition />,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
    ],
  },
]);

export default routes;
