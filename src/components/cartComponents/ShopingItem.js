import React from "react";
import { ImCross } from "react-icons/im";
import { ImBin } from "react-icons/im";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { TiPlus, TiMinus } from "react-icons/ti";

function ShopingItem({ cartProduct }) {
  return (
    <main className="shop-item-container">
      <section className="shop-item">
        <img src={cartProduct?.attchment} alt="shop" />
        <article className="shop-item-info">
          <h4>Name : {cartProduct?.name}</h4>
          <div>
            Color : <VscCircleLargeFilled color={cartProduct?.color} />
          </div>
          <p>{cartProduct?.price}$</p>
        </article>
      </section>
      <section className="size">{cartProduct?.size}</section>
      <section className="quantity">
        <TiMinus />
        <span>2</span>
        <TiPlus />
      </section>
      <section>
        <span className="subtotal">{cartProduct?.subTotal}$</span>
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
