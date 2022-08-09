import React from 'react';
import logo from '../../assets/images/SALogoFillBlack.svg';
function Footer(props) {
  return (
    <footer className="home-footer">
      <div>
        © 2022 Copyright <img className="logo-creator" src={logo} alt="logo" />
        All Rights Reserved
      </div>
      <div>
        Designed by <span>Saeed Khaled</span>
      </div>
    </footer>
  );
}

export default Footer;
