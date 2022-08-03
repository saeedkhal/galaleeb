import React from 'react';
import homefirstsec from '../../assets/images/homefirstsec.jpeg';
import homefirstsec2 from '../../assets/images/homefirstsec2.jpeg';

function HomeFirst(props) {
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
        <button className="shop-now">shop now</button>
      </section>
      <section className="shop-img">
        <div className="shadow"></div>
        <img src={homefirstsec2} alt="hero" className="img1" />
        <img src={homefirstsec} alt="hero" className="img2" />
      </section>
    </main>
  );
}

export default HomeFirst;
