import React from 'react';
import ShopingItem from './ShopingItem';
import CeckCart from './CeckCart';
import { useContextProvider } from '../../context/context';
function ShopingItems() {
  const { cart } = useContextProvider();

  return (
    <>
      {
        !cart.length ? <h1 className='header'>no elemnts</h1> : <main className="container shop-items-container">
          <section className="shoping-header">
            <article>Item</article>
            <article>Size</article>
            <article>Quantity</article>
            <article className="subtotal-header">SubTotal</article>
          </section>
          <section className="shop-items">
            {
              cart.map(cartProduct => <ShopingItem cartProduct={cartProduct} />)
            }
          </section>
          <section className="continue-clear">
            <button>continue shopping</button>
            <button>clear cart</button>
          </section>
          <CeckCart />
        </main>
      }

    </>
  );
}

export default ShopingItems;
