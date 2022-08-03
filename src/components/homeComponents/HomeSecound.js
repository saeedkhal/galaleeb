import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
function HomeSecound(props) {
  return (
    <main className="home-secound container">
      <h1 className="feature-header">featured products</h1>
      <div className="hr"></div>
      <section className="feature-content">
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
      </section>
      <button className="all-products">All Products</button>
    </main>
  );
}

export default HomeSecound;
