import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleCloseClick = () => {
    setShowLogin(false);
  };

  return (
    <>
      <div className="backdrop" onClick={handleCloseClick}></div>
      <div className={`container ${isActive ? 'active' : ''}`} id="container">
        <div className="form-container sign-in">
          <form action="">
            <h1 className='h1'>Sign In</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>Sign In</button>
            <a href="#">forgot password</a>
          </form>
        </div>

        <div className="form-container sign-up">
          <form action="">
            <img className='close-img close-img-left' onClick={handleCloseClick} src={assets.cross} alt="Close" />
            <h1 className='h1'>Create Account</h1>
            <input type="text" placeholder='User Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome</h1>
              <p>Enter your personal details to use all of the site features</p>
              <button className='hidden' id='login' onClick={handleLoginClick}>Sign In</button>
            </div>
            <div className="toggle-panel toggle-right">
              <img className='close-img close-img-right' onClick={handleCloseClick} src={assets.cross} alt="Close" />
              <h1>Hello!</h1>
              <p>Register with your personal details to use all of the site features</p>
              <button className='hidden' id='Register' onClick={handleRegisterClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPopup;
