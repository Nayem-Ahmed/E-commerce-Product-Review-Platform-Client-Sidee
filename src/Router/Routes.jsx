import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signin from "../Pages/Signin";
import SignUp from "../Pages/SignUp";
import Men from "../Pages/Men";
import Electnonics from "../Pages/Electnonics";
import Women from "../Pages/Women";
import MenDetails from "../Pages/MenDetails";
import ElectronicsDetails from "../Pages/ElectronicsDetails";
import WomenDetails from "../Pages/WomenDetails";
import Privetroute from "./Privetroute";

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
                path: "/men",
                element: <Men></Men>,
            },
            {
                path: '/men_details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/allproducts/${params.id}`),
                element: <Privetroute><MenDetails></MenDetails></Privetroute>
            },
            {
                path: "/electronics",
                element: <Electnonics></Electnonics>,
            },
            {
                path: '/electronics_details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/allproducts/${params.id}`),
                element: <Privetroute><ElectronicsDetails></ElectronicsDetails></Privetroute> ,
            },
            {
                path: "/women",
                element: <Women></Women>,
            },
            {
                path: '/women_details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/allproducts/${params.id}`),
                element: <Privetroute><WomenDetails></WomenDetails></Privetroute>,
            },
            {
                path: "/signin",
                element: <Signin></Signin>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ]
    },
]);
export default router;