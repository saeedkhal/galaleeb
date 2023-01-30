import React from 'react';
import { useContextProvider } from '../../context/context';
import { FcGoogle } from 'react-icons/fc';
import { useAlert } from 'react-alert';
import { ImCross } from 'react-icons/im'
function CeckCart() {
  const alert = useAlert();
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


  async function fetchImageAsBlob(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  }
  const handelOrder = async () => {
    alert.info('Loading ...');
    const url = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_API_KEY}/sendPhoto`;
    const photo = await fetchImageAsBlob('https://v5.airtableusercontent.com/v1/14/14/1675080000000/rWVKRmfUFOcXEezQ-TNN-w/T29fUVeQdJv9NLkjxtjwMLDP2ZLUWofnv2DyaiYyG4Vp4EWfesZ4xqVhxY5S5gbDnCdzR2hptYxeD8OWxJ_uyUDH-4BwBfKBsM5d0zuQF5U/8xku5Fd1Vv-0EYSZ_oX4ILt8P0Es1BQBYJDGOVmTxw0');
    try {
      const formData = new FormData();
      formData.append("chat_id", process.env.REACT_APP_TELEGRAM_CHAT_ID);
      formData.append("caption", "text");
      formData.append("photo", photo);
      const response = await fetch(url, {
        method: "POST",
        body: formData
      });

      await response.json(); // parses JSON response into native JavaScript objects
      alert.removeAll();
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
          !Object.keys(user).length ?
            <button onClick={signInwithGoogle}>
              <FcGoogle />   <span>Log in using Google</span>
            </button> : (!cart?.length ? "" : <button onClick={handelOrder}>Order now</button>)
        }
      </section>
      <div className='order-modal'>
        <div className='order-modal-content'>
          <ImCross />
          <h1>
            please fill your phone number
          </h1>
          <label for='phone'> Phone Number</label>
          <input />
        </div>
      </div>
    </main>
  );
}

export default CeckCart;
