import React from 'react';
import RoutePath from '../components/sharedCompnents/RoutePath';
import ProductItem from '../components/productItemComponents/ProductItem';
function Product(props) {
  return (
    <main>
      <RoutePath productName="ProductName" />
      <ProductItem />
    </main>
  );
}

export default Product;
