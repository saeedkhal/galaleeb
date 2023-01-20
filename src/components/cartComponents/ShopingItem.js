import React from "react";
import { ImCross } from "react-icons/im";
import { ImBin } from "react-icons/im";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useContextProvider } from "../../context/context";
import { UPDATE_CART } from '../../assets/contsntants/constants';

function ShopingItem({ cartProduct }) {
  const { cart, dispatch } = useContextProvider();
  const updateQuantity = (quantity) => {
    const newCart = cart?.map(el => {
      if (el?.id === cartProduct?.id) {
        return { ...el, quantity, subTotal: el?.price * quantity }
      }
      return el
    });
    dispatch({
      type: UPDATE_CART,
      payload: newCart
    });
  }
  const removeProduct = () => {
    const newCard = cart?.filter((el) => {
      return (!Boolean(el.size === cartProduct?.size && el.id === cartProduct?.id && el.color === cartProduct?.color))
    }
    );
    dispatch({
      type: UPDATE_CART,
      payload: newCard
    });
  }
  return (
    <main className="shop-item-container">
      <section className="shop-item">
        <img src={cartProduct?.attchment} alt="shop" />
        <article className="shop-item-info">
          <h4>name : <span> {cartProduct?.name} </span> </h4>
          <div>
            color : <VscCircleLargeFilled color={cartProduct?.color} />
          </div>
          <p>price : {cartProduct?.price}$</p>
        </article>
      </section>
      <section className="size">{cartProduct?.size}</section>
      <section className="quantity">
        <span>
          <TiMinus onClick={() => {
            if (cartProduct?.quantity !== 1) {
              updateQuantity(cartProduct?.quantity - 1);
            }
          }
          } />
        </span>
        <span>{cartProduct?.quantity}</span>
        <span>
          <TiPlus onClick={() => updateQuantity(cartProduct?.quantity + 1)} />
        </span>
      </section>
      <section>
        <span className="subtotal">{cartProduct?.subTotal}$</span>
        <button onClick={removeProduct} className="im-bin">
          <ImBin />
        </button>
        <button onClick={removeProduct} className="im-cross">
          <ImCross />
        </button>
      </section>
    </main>
  );
}

export default ShopingItem;
