import React, { useState, useContext, useEffect } from 'react';
import RoutePath from '../components/sharedCompnents/RoutePath';
import ProductImgs from '../components/productItemComponents/ProductImgs';
import Footer from '../components/sharedCompnents/Footer';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/context';
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
