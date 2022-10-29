import React, { useEffect, useState } from "react";
import { useContextProvider } from "../../context/context";
import { UPDATE_FILTERED_PRODUCTS } from "../../assets/contsntants/constants";
function FilterProducts(props) {
  const { dispatch, getProducts, products, channels, categoryies } =
    useContextProvider();
  const [filterObject, setFilterObject] = useState({
    category: "",
    price: Math.max(...products.map((product) => product?.fields?.price)),
    color: "",
    freeShipping: false,
    searchName: "",
    channel: "",
  });

  const filterProducts = () => {
    const newProducts = products
      ?.filter((product) => {
        if (!filterObject?.category) {
          return true;
        }
        return filterObject?.category === product?.fields?.category.toString();
      })
      .filter((product) => {
        if (!filterObject?.freeShipping) {
          return true;
        }
        return product?.fields?.freeShipping === filterObject?.freeShipping;
      })
      .filter((product) => {
        if (!filterObject?.searchName) {
          return true;
        }
        return product?.fields?.name
          .toLowerCase()
          .includes(filterObject?.searchName?.toLowerCase());
      })
      .filter((product) => {
        if (!filterObject?.channel) {
          return true;
        }
        return product?.fields?.chennel?.includes(filterObject?.channel);
      });
    dispatch({ type: UPDATE_FILTERED_PRODUCTS, payload: newProducts });
  };
  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterObject]);
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main className="container fiterproduct-contaoner">
      <div className="container-filter">
        <section className="cateogry">
          <h3 className="header-filter">Cateogry</h3>
          {categoryies?.map((category, index) => {
            const { id, fields } = category;
            return (
              <button
                key={index}
                className={
                  id === filterObject?.category.toString()
                    ? "cateory-active"
                    : ""
                }
                onClick={() => {
                  setFilterObject({ ...filterObject, category: id });
                }}
              >
                {fields?.name}
              </button>
            );
          })}
          <button
            className={!filterObject?.category ? "cateory-active" : ""}
            onClick={() => {
              setFilterObject({
                ...filterObject,
                category: "",
              });
            }}
          >
            ALL
          </button>
        </section>
        <section className="channel">
          <h3 className="header-filter">Channel</h3>
          <select
            onChange={(e) => {
              setFilterObject({
                ...filterObject,
                channel: e.target.value,
              });
            }}
          >
            <option value="">ALL</option>
            {channels?.map((channel, index) => {
              const { id, fields } = channel;
              return (
                <option key={index} value={id}>
                  {fields?.name}
                </option>
              );
            })}
          </select>
        </section>
        <section className="price">
          <h3 className="header-filter">Price</h3>
          <div className="price-container">
            <input
              className="price-input"
              type="range"
              value={filterObject?.price}
              onChange={(e) =>
                setFilterObject({ ...filterObject, price: e.target.value })
              }
            />
            <span className="price-output">{filterObject?.price}</span>
          </div>
        </section>
        <section className="color">
          <h3 className="header-filter">Color</h3>
          <button className="All">All</button>
          <button style={{ background: "black" }} className="active">
            ✔
          </button>
          <button style={{ background: "red" }}>&#160;</button>
          <button style={{ background: "green" }}>&#160;</button>
          <button style={{ background: "blue" }}>&#160;</button>
        </section>
        <section className="shipping">
          <h3 className="header-filter">Free Shipping</h3>
          <input
            type="checkbox"
            checked={filterObject?.freeShipping}
            onChange={() => {
              setFilterObject({
                ...filterObject,
                freeShipping: !filterObject?.freeShipping,
              });
            }}
          />
        </section>
      </div>
      <section className="product-found">
        23 product found
        <div className="h-line">
          <hr />
        </div>
        <span>
          sorted by
          <select>
            <option value="min-pirce">min-price</option>
            <option value="max-pirce">max-price</option>
            <option value="name">name asce</option>
            <option value="name">name desc</option>
          </select>
        </span>
      </section>
      <input
        placeholder="Search"
        className="search-products"
        onChange={(e) => {
          setFilterObject({
            ...filterObject,
            searchName: e.target.value,
          });
        }}
      />
    </main>
  );
}

export default FilterProducts;
