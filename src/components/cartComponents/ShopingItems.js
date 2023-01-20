import React from 'react';
import ShopingItem from './ShopingItem';
import CeckCart from './CeckCart';
import { useContextProvider } from '../../context/context';
import { UPDATE_CART } from '../../assets/contsntants/constants'


function ShopingItems() {
  const { cart, dispatch } = useContextProvider();

  return (
    <>
      {
        !cart.length ?
          <div>
            <h1 className='header'>No Product in The Cart</h1>
            <button className='shop-now'>Products</button>
          </div>
          :
          <main className="container shop-items-container">
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
              <button onClick={() => dispatch({ type: UPDATE_CART, payload: [] })}>clear cart</button>
            </section>
            <CeckCart />
          </main>
      }

    </>
  );
}

export default ShopingItems;
