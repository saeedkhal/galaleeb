import React from 'react';
import RoutePath from '../components/sharedCompnents/RoutePath';
import ProductImgs from '../components/productItemComponents/ProductImgs';
import { useContextProvider } from "../context/context";

function Product() {
  const { product } = useContextProvider();

  return (
    <main>
      <RoutePath productName={product?.fields?.name || ""} />
      <ProductImgs />
    </main>
  );
}

export default Product;
