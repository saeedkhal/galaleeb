import React from 'react';

function ProductImgs(props) {
  return (
    <main className="container">
      <section className="product-container">
        <article className="product-img">
          <button className="shop-now">Back to products</button>
          <img
            src="https://dl.airtable.com/.attachments/962b224f18f543f0c4d38e6d9d162792/87a222b8/z-extra-1.jpeg?ts=1659940159&userId=usrQMwWEPx18KgLcP&cs=c5a1734ecd1e2e53"
            alt="neshar"
          />
        </article>
        <article className="product-article">secound column</article>
      </section>
    </main>
  );
}

export default ProductImgs;
