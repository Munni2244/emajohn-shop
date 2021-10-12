import React from 'react';
import { Link ,useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './Login.css'

const Login = () => {
    const {SignInGoogle}=useAuth();
    const location=useLocation();
    const redirect_uri= location.state?.form || "/shipping";
    const history=useHistory();

   const GoogleSignIn=()=>{
    SignInGoogle()
    .then(result=>{
        history.push(redirect_uri);

    })
   }

    return (
       <div className="user-form">
            <div>
            <h1>Please Login</h1>
        <form onSubmit="">
        <input type="email" name="" placeholder="your email" id="" /> <br />
            <input type="password" name="" placeholder="your password" id="" />
        </form>
        <p>New to ema-john  <Link to="/register">create an account</Link></p>
        <div>--------or---------</div>
        <button onClick={GoogleSignIn} className="button">Sign In Google</button>
        </div>
       </div>
    );
};

export default Login;