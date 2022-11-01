import React from "react";
import { ImCross } from "react-icons/im";
import { ImBin } from "react-icons/im";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { TiPlus, TiMinus } from "react-icons/ti";
import shop from "../../assets/images/shop.jpg";
function ShopingItem() {
  return (
    <main className="shop-item-container">
      <section className="shop-item">
        <img src={shop} alt="shop" />
        <article className="shop-item-info">
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
        <span className="subtotal">22$</span>
        <button className="im-bin">
          <ImBin />
        </button>
        <button className="im-cross">
          <ImCross />
        </button>
      </section>
    </main>
  );
}

export default ShopingItem;
