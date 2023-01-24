import React from "react";
import RoutePath from "../components/sharedCompnents/RoutePath";
import ShopingItems from "../components/cartComponents/ShopingItems";
function Cart(props) {
  return (
    <main>
      <RoutePath />
      <ShopingItems />
    </main>
  );
}

export default Cart;
