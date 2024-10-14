import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loading from "../sharedCompnents/Loading";
import defaultimg from "../../assets/images/defaluteimg.png";
import { useContextProvider } from "../../context/context";
import { getFeaturedProducts } from "../../actions";
function HomeSecound() {
  const { isLoading, featuredProducts=[], dispatch } = useContextProvider();
  useEffect(()=>{
    getFeaturedProducts(dispatch)
  },[]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="home-secound container">
      <h1 className="feature-header">featured products</h1>
      <div className="hr"></div>
      <section className="feature-content" style={{gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
        {featuredProducts?.map((product, index) => {
          return (
            <Link key={index} to={`products/${product.id}`}>
              <article>
                <div className="feature-img-container">
                  <img
                    src={
                      product.fields.attachments
                        ? product.fields.attachments[0].url
                        : { defaultimg }
                    }
                    alt="featured"
                  />
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
      <button className="all-products">
        <Link to="/products"> All Products</Link>
      </button>
    </main>
  );
}

export default HomeSecound;
