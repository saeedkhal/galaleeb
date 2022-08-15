import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img from '../../assets/images/img2.jpeg';
import { AppContext } from '../../context/context';
import { getFeatured } from '../../utils/getFeatured';
import Loading from '../sharedCompnents/Loading';
function HomeSecound(props) {
  const { isLoading, featuredProduct } = useContext(AppContext);
  console.log(featuredProduct);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="home-secound container">
      <h1 className="feature-header">featured products</h1>
      <div className="hr"></div>

      <section className="feature-content">
        {featuredProduct.map((product, index) => {
          return (
            <Link key={product.id} to={`products/${product.id}`}>
              <article>
                <div className="feature-img-container">
                  <img src={product.fields.attachments[0].url} alt="" />
                  <div className="search">
                    <AiOutlineSearch />
                  </div>
                </div>
                <div className="product-info">
                  {product.fields.name}
                  <span className="price">{product.fields.price}$</span>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
      <button className="all-products">All Products</button>
    </main>
  );
}

export default HomeSecound;
