import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img from '../../assets/images/img2.jpeg';
function ProductContent(props) {
  return (
    <main className="container productcontent-container">
      <section className="feature-content grid-4">
        <Link to="/products/55">
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
        <Link to="/products/55">
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
        <Link to="/products/55">
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
        <Link to="/products/55">
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
          </article>{' '}
        </Link>
        <Link to="/products/55">
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
    </main>
  );
}

export default ProductContent;
