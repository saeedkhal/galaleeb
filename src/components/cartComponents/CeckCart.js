import React from 'react';
import { useContextProvider } from '../../context/context';
function CeckCart() {
  const { cart } = useContextProvider();


  const summary = cart.reduce((prev, current) => {
    return {
      subTotal: prev.subTotal + current.subTotal,
      freeShipping: prev.freeShipping || current.freeShipping
    }
  }, {
    subTotal: 0,
    freeShipping: false
  });

  console.log(summary);
  console.log(cart);
  return (
    <main className="ceckcart-container">
      <section>
        <article>
          <h5>
            subtotal : <span>{summary?.subTotal}$</span>
          </h5>
          <div>
            shipping free : <span>{summary?.freeShipping ? 5 : summary?.subTotal}$</span>
          </div>
          <h2>
            order Total : <span>{summary?.freeShipping ? summary?.subTotal - 5 : summary?.subTotal}$</span>
          </h2>
        </article>
        <button>Login</button>
      </section>
    </main>
  );
}

export default CeckCart;
