import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/home/Home';
import Login from '../share/Login';
import Register from '../share/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            }
        ]
    }
]);

export default router;