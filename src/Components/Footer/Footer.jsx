import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
            <h1 className='logo'>RECIPE BOOK</h1>
            <p className='fp'>Sharing food recipes fosters community and cultural exchange. It allows people to explore diverse flavors, learn new cooking techniques, and preserve culinary traditions, enriching our culinary experiences and connections.</p>
            <div className="footer-social-icons">
              <img className='img1' src={assets.facebook} alt="" />
              <img src={assets.linked_in} alt="" />
              <img src={assets.github} alt="" />
            </div>
        </div>
        <div className="footer-content-right">
            <h2 className='fh2'>Get in Touch</h2>
            <ul>
              <li>MALLIKARJUN</li>
              <li>+91 - 8073452834</li>
              <li>ssmallikarjunsh@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 @ RECIPE BOOK - all rights Reserved.</p>
    </div>
  );
}

export default Footer;
