import React from 'react';
import shoping from '../../assets/images/shoping2.svg';
import { useNavigate } from 'react-router'
function HomeFirst(props) {
  let navigate = useNavigate();

  return (
    <main className="homeFirst-container container">
      <section>
        <h1 className="design-header">
          design your
          <br /> comfort zone
        </h1>
        <p className="home-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <button onClick={() => navigate('/Products')} className="shop-now shop-btn">shop now</button>
      </section>
      <section className="shop-img">
        <div className="shadow"></div>
        <img src={shoping} alt="hero" className="img1" />
      </section>
    </main>
  );
}

export default HomeFirst;
