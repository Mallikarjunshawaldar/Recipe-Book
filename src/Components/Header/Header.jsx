import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Get your favourite food RECIPES here...</h2>
        <p>Sharing food recipes fosters community and cultural exchange. It allows people to explore diverse flavors, learn new cooking techniques, and preserve culinary traditions, enriching our culinary experiences and connections.</p>
        <a href="#explore-menu"><button>View Menu</button></a>
      </div>
    </div>
  );
}

export default Header;
