import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../context/context";
import { getProducts } from "../../actions";
import Loading from "../sharedCompnents/Loading";
function ProductContent() {
  const { dispatch, filteredProducts, isLoading } = useContextProvider();
  useEffect(() => {
    getProducts(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return <Loading />
  }
  return (
    <main className="container productcontent-container">
      {filteredProducts?.length ? (
        <section className="feature-content">
          {filteredProducts?.map((product, index) => {
            const { id, fields } = product;
            return (
              <article key={index}>
                <Link to={`/products/${id}`}>
                  <div className="feature-img-container">
                    <img
                      src={fields?.attachments[fields?.activeImg]?.url}
                      alt=""
                    />
                    <div className="search">
                      <AiOutlineSearch />
                    </div>
                  </div>
                </Link>
                <div className="product-info">
                  <p>{fields?.name}</p>
                  <span className="price">{fields?.price}$</span>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <h1
          style={{ textAlign: "center", color: "#102a42", minHeight: "27vh" }}
        >
          No data match your search
        </h1>
      )}
    </main>
  );
}

export default ProductContent;
