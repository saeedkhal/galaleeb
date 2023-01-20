import React from 'react';
import RoutePath from '../components/sharedCompnents/RoutePath';
import ProductImgs from '../components/productItemComponents/ProductImgs';
import Footer from '../components/sharedCompnents/Footer';
import { useContextProvider } from "../context/context";

function Product() {
  const { product } = useContextProvider();

  return (
    <main>
      <RoutePath productName={product?.fields?.name || ""} />
      <ProductImgs />
      <Footer />
    </main>
  );
}

export default Product;
