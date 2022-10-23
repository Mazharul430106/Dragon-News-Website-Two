import { createBrowserRouter  } from "react-router-dom";
import Main from "../../Layout/Main";
import Categories from "../../Pages/Categories/Categories";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Categories></Categories>,
                loader: ({params})=> fetch(`http://localhost:4000/category/${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }

        ]
    
    }

])