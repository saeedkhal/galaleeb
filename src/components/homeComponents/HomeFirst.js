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
          <br /> comfort Dress
        </h1>
        <p className="home-p">
          Dress stores offer a wide range of clothing options, including the option to customize dresses to meet the unique needs and preferences of each customer. In terms of seasonal offerings, summer dresses are typically crafted from lightweight and breathable materials, such as cotton and linen, to provide comfort during warm weather
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
