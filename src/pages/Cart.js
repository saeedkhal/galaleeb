import React from 'react';
import RoutePath from '../components/RoutePath';
import ShopingItems from '../components/cartComponents/ShopingItems';
import Footer from '../components/homeComponents/HomeFooter';
function Cart(props) {
  return (
    <main>
      <RoutePath />
      <ShopingItems />
      <Footer />
    </main>
  );
}

export default Cart;
