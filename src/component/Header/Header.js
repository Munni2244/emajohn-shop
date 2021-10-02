import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
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
            
        </nav>
        </div>
        </div>
    );
};

export default Header;