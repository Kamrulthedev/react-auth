import { createContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../Compunets/Firbase/Firbase";

export const AuthContext  =createContext(null)
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {


    // google Login
    const googleLogin = () =>{
       return signInWithPopup(auth, GoogleProvider)
    }

    const user = "kamrul hassan"

    const authentication ={
        googleLogin,
        user
  }
    return (
        <AuthContext.Provider value={user, authentication}>
           {children}
        </AuthContext.Provider>
    
    );
};

export default AuthProvider;



