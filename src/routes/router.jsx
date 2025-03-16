import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/home/Home';
import Login from '../share/Login';
import Register from '../share/Register';
import AddTutorials from '../components/AddTutorials';
import MyTutorials from '../components/MyTutorials';
import TutorialUpdate from '../components/TutorialUpdate';
import FindTutors from '../components/FindTutors';

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
            },
            {
                path:"addTutorial",
                element:<AddTutorials></AddTutorials>
            },
            {
                path:"myTutorial",
                element:<MyTutorials></MyTutorials>
            },
            {
                path:"/update/:id",
                element:<TutorialUpdate></TutorialUpdate>,
                loader:({params})=>fetch(`http://localhost:5000/tutorials/${params.id}`)
            },
            {
                path:"/find-tutors/:language",
                element:<FindTutors></FindTutors>,
                loader:({params})=>fetch(`http://localhost:5000/tutorials/language/${params.language}`)
            },

        ]
    }
]);

export default router;