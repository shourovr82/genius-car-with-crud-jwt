import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import Signup from "../../Pages/SignUp/Signup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/checkout/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
        element: <CheckOut></CheckOut>
      },
      {
        path: '/orders',
        element: <Orders></Orders>
      }
    ]

  }
])

export default router;