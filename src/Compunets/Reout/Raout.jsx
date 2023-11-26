import { createBrowserRouter } from "react-router-dom";
import Mainleout from "../Leout/Mainleout";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Bolg from "../Blog/Bolg";
import Login from "../Login/Login";
import ErrorPages from "../ErrorPages/ErrorPages";
import Register from "../Register/Register";
import HomeCard from "../HomesCard/HomeCard";

const MyRouter = createBrowserRouter([
    {
        path:'/',
        element:<Mainleout></Mainleout>,
        errorElement:<ErrorPages></ErrorPages>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch(`Prodect.json`)
            },
            {
                path:'/About',
                element:<About></About>
            },
            {
                path:'/Contact',
                element:<Contact></Contact>
            },
            {
                path:'/Blog',
                element:<Bolg></Bolg>
            },
            {
                path:'/Login',
                element:<Login></Login>
            },
            {
                path:'/Register',
                element:<Register></Register>
            },
            {
                path:'/HomeCard/:id',
                element:<HomeCard></HomeCard>,
                loader: ()=>fetch(`Prodect.json`)
            }
        ]
    }
])
  

export default MyRouter;