import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img from '../../assets/images/img2.jpeg';
function HomeSecound(props) {
  return (
    <main className="home-secound container">
      <h1 className="feature-header">featured products</h1>
      <div className="hr"></div>
      <section className="feature-content">
        <Link to="products/55">
          <article>
            <div className="feature-img-container">
              <img src={img} alt="" />
              <div className="search">
                <AiOutlineSearch />
              </div>
            </div>
            <div className="product-info">
              entertainment center
              <span className="price">$599.99</span>
            </div>
          </article>
        </Link>
        <Link to="products/55">
          <article>
            <div className="feature-img-container">
              <img src={img} alt="" />
              <div className="search">
                <AiOutlineSearch />
              </div>
            </div>
            <div className="product-info">
              entertainment center
              <span className="price">$599.99</span>
            </div>
          </article>
        </Link>
        <Link to="products/55">
          <article>
            <div className="feature-img-container">
              <img src={img} alt="" />
              <div className="search">
                <AiOutlineSearch />
              </div>
            </div>
            <div className="product-info">
              entertainment center
              <span className="price">$599.99</span>
            </div>
          </article>
        </Link>
      </section>
      <button className="all-products">All Products</button>
    </main>
  );
}

export default HomeSecound;
