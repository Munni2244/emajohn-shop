import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const {user, LogOut}=useAuth();
    return (
        <div>
            <div>
           <div className="logo-div">
           <img className="logo" src={logo} alt="" />
           </div>
        <nav className="navbar">
            <NavLink to="/shop"> Shop</NavLink>
            <NavLink to="/order"> Order</NavLink>
            <NavLink to="/management">Managment</NavLink>
            <span style={{color:'white'}}>{user.displayName}</span>
            {user.displayName?
            <button onClick={LogOut}> Log Out</button>:
               <NavLink to="/login">Login</NavLink>

            }            
            
        </nav>
        </div>
        </div>
    );
};

export default Header;