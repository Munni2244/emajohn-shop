import { getAuth, signInWithPopup, GoogleAuthProvider,signOut ,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import Initialization from "../../firebase.init";


Initialization();
const UseFirebase =()=> {
    const [user, setUser]=useState({});
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const SignInGoogle=()=>{
      return  signInWithPopup(auth, provider)
      

    }

    //state change
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
           setUser(user)
            } 
          });
    },[])

    //logout
    const LogOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }
    return {
        user,
        setUser,
        SignInGoogle,
        LogOut
    }

}
export default UseFirebase;