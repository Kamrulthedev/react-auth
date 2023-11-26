import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Socail = () => {

    const {authentication, user} = useContext(AuthContext)
    console.log(user)


    return (
        <div>
            <div className="divider">
              continue with
            </div>
            <div>
                <button className="btn btn-primary btn-circle btn-outline">Accent</button>
            </div>
        </div>
    );
};

export default Socail;