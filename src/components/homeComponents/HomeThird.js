import React from 'react';
import { GiCompass } from 'react-icons/gi';
import { MdHistory } from 'react-icons/md';
import { IoMdTrendingUp } from "react-icons/io";
function HomeThird(props) {
  return (
    <main className="home-third container">
      <section className="third-des">
        <h1 className="third-header">
          custom clothes <br /> designed only for you
        </h1>
        <p className="third-par">
          Custom Clothes is a unique retail store offering tailored and personalized clothing made to individual customers' specifications. High-quality materials and skilled tailors ensure a perfect fit and stylish look.
        </p>
      </section>
      <section className="third-content">
        <article>
          <MdHistory />
          <h2>history</h2>
          <p>
            company was founded in 1999 and has since expanded to multiple locations across the country.
          </p>
        </article>
        <article>
          <GiCompass />
          <h2>mission</h2>
          <p>
            Clothes Store's mission is to provide customers with the latest fashion trends, high-quality products, and exceptional shopping experiences.
          </p>
        </article>
        <article>
          <IoMdTrendingUp />
          <h2>Vission</h2>
          <p>
            Clothes Store's vision is to be a leading fashion retailer, offering diverse, sustainable, and technologically-advanced products to customers globally.
          </p>
        </article>
      </section>
    </main>
  );
}

export default HomeThird;
