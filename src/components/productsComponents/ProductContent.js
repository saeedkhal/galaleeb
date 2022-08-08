import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ProductContent(props) {
  return (
    <main className="container productcontent-container">
      <section className="feature-content grid-4">
        <Link to="/products/55">
          <article>
            <div className="feature-img-container">
              <img
                src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af?ts=1659282341&userId=usrQMwWEPx18KgLcP&cs=a05fc1b708057eee"
                alt=""
              />
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
              <img
                src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af?ts=1659282341&userId=usrQMwWEPx18KgLcP&cs=a05fc1b708057eee"
                alt=""
              />
              <div className="search">
                <AiOutlineSearch />
              </div>
            </div>
            <div className="product-info">
              entertainment center
              <span className="price">$599.99</span>
            </div>
          </article>
          <article>
            <div className="feature-img-container">
              <img
                src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af?ts=1659282341&userId=usrQMwWEPx18KgLcP&cs=a05fc1b708057eee"
                alt=""
              />
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
        <Link>
          <article>
            <div className="feature-img-container">
              <img
                src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af?ts=1659282341&userId=usrQMwWEPx18KgLcP&cs=a05fc1b708057eee"
                alt=""
              />
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
        <Link>
          <article>
            <div className="feature-img-container">
              <img
                src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af?ts=1659282341&userId=usrQMwWEPx18KgLcP&cs=a05fc1b708057eee"
                alt=""
              />
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
