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

  const handelOrder = async () => {
    try {
      const response = await fetch(
        'https://api.telegram.org/bot5528139786:AAGxkRgU0_Huh70DrNp79TGJg-KhgVBnp6U/sendMessage?'
        + new URLSearchParams({
          chat_id: '-1001859037553',
          text: `saeed saeed here is \n the order`
        }), { method: 'GET' });

      await response.json(); // parses JSON response into native JavaScript objects
      alert.success('Order sent suucefuly');

    } catch (err) {
      alert.error('Internal server error')
      console.log(err)
    }
  }

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
