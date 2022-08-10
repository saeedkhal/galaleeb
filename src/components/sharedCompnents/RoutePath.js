import React from 'react';
import { useLocation } from 'react-router-dom';
function RoutePath({ productName }) {
  const location = useLocation();
  const str = location.pathname.substring(1);
  return (
    <main className="route-path-container container">
      <h2>
        <span>Home</span>
        {productName ? (
          <span>/ {productName && `Products / ${productName}`}</span>
        ) : (
          <span> / {str} </span>
        )}
      </h2>
    </main>
  );
}

export default RoutePath;
