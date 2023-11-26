import PropTypes from 'prop-types';
import { createContext } from "react";
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword  } from "firebase/auth";
import auth from "../Compunets/Firbase/Firbase";

export const AuthContext  =createContext(null)
const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {


    // google Login
    const googleLogin = () =>{
       return signInWithPopup(auth, GoogleProvider)
    }
    const CreateUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
   

    const authentication ={
        googleLogin, 
        CreateUser
        
  }
    return (
        <AuthContext.Provider value={ authentication}>
           {children}
        </AuthContext.Provider>
    
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AuthProvider;



