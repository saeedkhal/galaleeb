import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ImBin } from 'react-icons/im';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import { TiPlus, TiMinus } from 'react-icons/ti';
import shop from '../../assets/images/shop.jpg';
function ShopingItem() {
  return (
    <main className="shop-item-container">
      <section>
        <img src={shop} alt="shop" />
        <article>
          <h4>Name</h4>
          <div>
            Color : <VscCircleLargeFilled />
          </div>
          <p>120$</p>
        </article>
      </section>
      <section className="size">L </section>
      <section className="quantity">
        <TiMinus />
        <span>2</span>
        <TiPlus />
      </section>
      <section>
        222$
        <button className="margin-left">
          <ImBin />
        </button>
      </section>
    </main>
  );
}

export default ShopingItem;
