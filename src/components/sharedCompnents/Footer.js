import React from 'react';
import logo from '../../assets/images/SALogoFillBlack.svg';
function Footer(props) {
  return (
    <footer className="home-footer">
      <div>
        © {new Date().getFullYear()} Copyright <img className="logo-creator" src={logo} alt="logo" />
        All Rights Reserved
      </div>
      <div>
        Designed by 
          <a target='_blank' href='https://saeedkhal.github.io/saeed-khaled-portfolio/index.html' rel="noreferrer">
            Saeed Khaled
          </a>
      </div>
    </footer>
  );
}

export default Footer;
