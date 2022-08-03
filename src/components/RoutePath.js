import React from 'react';
import { useLocation } from 'react-router-dom';
function RoutePath(props) {
  const location = useLocation();
  const str = location.pathname.substring(1);

  return (
    <main className="route-path-container container">
      <h2>
        <span>Home</span>
        <span> / {str}</span>
      </h2>
    </main>
  );
}

export default RoutePath;
