import React from 'react';
import RoutePath from '../components/sharedCompnents/RoutePath';
import FilterProducts from '../components/productsComponents/FilterProducts';
import ProductContent from '../components/productsComponents/ProductContent';
function Products(props) {
  return (
    <main>
      <RoutePath />
      <FilterProducts />
      <ProductContent />
    </main>
  );
}

export default Products;
