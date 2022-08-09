import React from 'react';
import notfound from '../../assets/images/undraw_page_not_found.svg';

function ErrorCompnents(props) {
  return (
    <main className="err-page">
      <img className="offline" src={notfound} alt="err" />
      <h1>404 Error</h1>
      <p>the page you looking for is not found rty again later </p>
      <button className="back-to-home">Home</button>
    </main>
  );
}

export default ErrorCompnents;
