import { Outlet } from "react-router-dom";
import Navber from "../Haeder/Navber";


const Mainleout = () => {
    return (
        <div><Navber></Navber>
           <Outlet></Outlet>
        </div>
    );
};

export default Mainleout;