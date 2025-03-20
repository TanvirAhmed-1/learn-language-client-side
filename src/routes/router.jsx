import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../share/Login";
import Register from "../share/Register";
import AddTutorials from "../components/AddTutorials";
import MyTutorials from "../components/MyTutorials";
import TutorialUpdate from "../components/TutorialUpdate";
import FindTutors from "../components/FindTutors";
import { Navigate } from "react-router-dom";
import AllTutors from "../components/AllTutors";
import TutorsDetails from "../components/TutorsDetails";
import BookedTutors from "../components/BookedTutors";
import PrivateRoute from './PrivateRoute';
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addTutorial",
        element:<PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
      },
      {
        path: "myTutorial",
        element:<PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <TutorialUpdate></TutorialUpdate>,
        loader: ({ params }) =>
          fetch(`https://learn-language-server-tau.vercel.app/tutorials/${params.id}`),
      },
      {
      path:"/contact",
      element:<ContactUs></ContactUs>
      },
      {
       path:"/about",
       element:<AboutUs></AboutUs>
      },
      {
        path: "/find-tutors",
        element: <AllTutors></AllTutors>,
      },
      {
        path: "/find-tutors/:category",
        element: <FindTutors></FindTutors>,
        loader: ({ params }) =>
          fetch(`https://learn-language-server-tau.vercel.app/tutorials/language/${params.category}`),
      },
      {
        path:"/tutors/:details",
        element:<PrivateRoute><TutorsDetails></TutorsDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://learn-language-server-tau.vercel.app/tutorials/${params.details}`)
      },
      {
        path:"/my-tutorials",
        element:<PrivateRoute><BookedTutors></BookedTutors></PrivateRoute>
      }
    ],
  },
]);

export default router;
