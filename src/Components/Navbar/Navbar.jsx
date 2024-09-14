import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const location = useLocation();

  const shouldHideMenuLink = location.pathname === '/create-recipe';

  return (
    <div className='navbar'>
      <h1 className='logo'>RECIPE BOOK</h1>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>HOME</Link>
        {!shouldHideMenuLink && (
          <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>MENU</a>
        )}
        <Link to='/create-recipe' onClick={() => setMenu("create")} className={menu === "create" ? "active" : ""}>CREATE</Link>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>CONTACT US</a>
      </ul>
      <div className='navbar-right'>
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  );
}

export default Navbar;
