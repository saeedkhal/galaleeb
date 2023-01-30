import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContextProvider } from "../../context/context";
import { getProducts } from "../../actions";
function ProductContent(props) {
  const { dispatch, filteredProducts, filterColor } = useContextProvider();
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  let newProducts = []
  if (filteredProducts?.length && !filterColor) {
    filteredProducts.forEach((Product) => {
      Product?.fields?.attachments?.forEach((attch) => {
        newProducts[newProducts.length] = { ...Product, url: attch?.url }
      })
    });
  } else {
    filteredProducts.forEach((Product) => {
      newProducts[newProducts.length] = { ...Product, url: Product?.fields?.attachments[Product?.fields?.activeImg]?.url }
    });
  }

  return (
    <main className="container productcontent-container">
      {newProducts?.length ? (
        <section className="feature-content grid-4">
          {newProducts?.map((product, index) => {
            const { id, fields } = product;
            return (
              <article key={index}>
                <Link to={`/products/${id}`}>
                  <div className="feature-img-container">
                    <img
                      src={product?.url}
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
