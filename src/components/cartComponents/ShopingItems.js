import React from 'react';
import ShopingItem from './ShopingItem';
import CeckCart from './CeckCart';
function ShopingItems(props) {
  return (
    <main className="container shop-items-container">
      <section className="shoping-header">
        <article>Item</article>
        <article>Size</article>
        <article>Quantity</article>
        <article className="subtotal-header">SubTotal</article>
      </section>
      <section className="shop-items">
        <ShopingItem />
        <ShopingItem />
      </section>
      <section className="continue-clear">
        <button>continue shopping</button>
        <button>clear cart</button>
      </section>
      <CeckCart />
    </main>
  );
}

export default ShopingItems;
