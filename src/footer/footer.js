import React from 'react';
import './footer.css';
import logo from '../logo.svg';

function Footer() {
  return (
    <div className="App">
      <div className="footer">
        <p>&copy; Chowdary
        <img src={logo} className="App-logo1" alt="logo" /></p>
        </div>
    </div>
  );
}

export default Footer;
