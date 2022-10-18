import { createBrowserRouter } from "react-router-dom";
import Category from "../Pages/Category";
import Home from "../Pages/Home";
import News from "../Pages/News";
import Root from "../Root/Root";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path:'/news/:id',
        element:<News/>
      }
    ],
  },
]);

export default routes;
