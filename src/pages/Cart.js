import React from "react";
import RoutePath from "../components/sharedCompnents/RoutePath";
import ShopingItems from "../components/cartComponents/ShopingItems";
import Footer from "../components/sharedCompnents/Footer";
function Cart(props) {
  return (
    <main>
      <RoutePath />
      <ShopingItems />

    </main>
  );
}

export default Cart;
