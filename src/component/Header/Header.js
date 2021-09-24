import React from 'react';
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
            <a href="/shop"> Shop</a>
            <a href="/order"> Order</a>
            <a href="/manage">Managment</a>
            
        </nav>
        </div>
        </div>
    );
};

export default Header;