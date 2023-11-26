import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Socail = () => {

    const {googleLogin} = useContext(AuthContext)
            
    const handlerLogin = (media) =>{
         media()
         .thenm(Result => 
            console.log(Result.user))
         .catch(error=>
            console.log(error))
    }


    return (
        <div>
            <div className="divider">
              continue with
            </div>
            <div>
                <button onClick={()=> handlerLogin(googleLogin)} className="btn btn-primary btn-circle btn-outline">Google</button>
            </div>
        </div>
    );
};

export default Socail; 