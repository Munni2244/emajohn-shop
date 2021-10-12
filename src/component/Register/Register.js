import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    const {SignInGoogle}=useAuth();
    return (
        <div className="user-form">
            <div>
                <h1>Please Register</h1>
                <form >
                    <input type="email" name="" placeholder="enter your email" id="" /><br />
                    <input type="password" name="" placeholder="enter your passwor" id="" /><br />
                    <input type="password" name="" placeholder="re-enter your passwor" id="" /><br />
                    <input type="submit" value="submit" />
                </form>
                <p>All ready have a account? <Link to="/login">Sign In</Link></p>
                <button onClick={SignInGoogle} className="button">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;