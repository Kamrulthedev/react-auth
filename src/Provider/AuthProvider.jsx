import { createContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../Compunets/Firbase/Firbase";

const AuthContext  =createContext(null)
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {


    // google Login
    const googleLogin = () =>{
       return signInWithPopup(auth, GoogleProvider)

      
    }
    const authentication ={
        googleLogin
  }
    return (
        <AuthContext.Provider value={authentication}>
           {children}
        </AuthContext.Provider>
    
    );
};

export default AuthProvider;



