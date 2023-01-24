import React from 'react';
import { useContextProvider } from '../../context/context';
import { FcGoogle } from 'react-icons/fc'
function CeckCart() {
  const { cart, signInwithGoogle, user } = useContextProvider();


  const summary = cart.reduce((prev, current) => {
    return {
      subTotal: prev.subTotal + current.subTotal,
      freeShipping: prev.freeShipping || current.freeShipping
    }
  }, {
    subTotal: 0,
    freeShipping: false
  });

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
        {console.log(Object.keys(user))
        }
        {
          !Object.keys(user).length ? <button onClick={signInwithGoogle}>
            <FcGoogle />   <span>Log in using Google</span>
          </button> : ''
        }
      </section>
    </main>
  );
}

export default CeckCart;
