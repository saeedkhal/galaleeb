import React from 'react';
import RoutePath from '../components/sharedCompnents/RoutePath';
import ProductImgs from '../components/productItemComponents/ProductImgs';
import Footer from '../components/sharedCompnents/Footer';
function Product(props) {
  return (
    <main>
      <RoutePath productName="ProductName" />
      <ProductImgs />
      <Footer />
    </main>
  );
}

export default Product;
