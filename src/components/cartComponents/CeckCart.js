import React, { useState } from 'react';
import { useContextProvider } from '../../context/context';
import { FcGoogle } from 'react-icons/fc';
import { useAlert } from 'react-alert';
import { ImCross } from 'react-icons/im'
function CeckCart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState('');
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

  const sendMessage = async (order) => {
    const url = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_API_KEY}/sendPhoto`;

    const photo = await fetchImageAsBlob(order?.attchment);

    const formData = new FormData();
    formData.append("chat_id", process.env.REACT_APP_TELEGRAM_CHAT_ID);
    formData.append("caption", `url:https://${window.location.hostname}/products/${order?.id}\nsize: ${order?.size}\nmode name: ${order?.name}\ncolor: ${order?.color}\nprice: ${order?.price}\nfreeShipping: ${order?.freeShipping}\nquantity: ${order?.quantity}\nsubtotal: ${order?.subTotal}\ncustomer phone: ${phone}`);
    formData.append("photo", photo);
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });

    const resJson = await response.json();
    if (!resJson.ok) {
      alert.removeAll();
      alert.error(resJson?.description || 'Internal server error')
    }
  }
  const handelOrder = async () => {
    try {
      // const reg = new RegExp('^((010)|(015)|(011)|(012))\d{8}');
      const pass = /^((010)|(015)|(011)|(012))\d{8}/.test(phone);
      if (!pass) {
        return alert.error('please provide  valid phone number')
      }
      // alert.info('Loading ...');
      cart?.forEach(el => {
        sendMessage(el)
      });
      // alert.removeAll();
      alert.success('order sent suuccefuly');
      setIsModalOpen(false);

    } catch (err) {
      alert.removeAll();
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
            </button> : (!cart?.length ? "" : <button onClick={() => setIsModalOpen(true)}>Order now</button>)
        }
      </section>
      <div className={isModalOpen ? 'order-modal' : 'order-modal close-modal'}>
        <div className='order-modal-content'>
          <ImCross onClick={() => setIsModalOpen(false)} />
          <h1>
            please fill your phone number
          </h1>
          <label for='phone'> Phone Number : </label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='+20 1xxxxxxxxx' />
          <button className='order-btn' onClick={handelOrder}>Order Now</button>
        </div>
      </div>
    </main>
  );
}

export default CeckCart;
