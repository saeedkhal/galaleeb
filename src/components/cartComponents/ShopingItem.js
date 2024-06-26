import React from "react";
import { ImCross } from "react-icons/im";
import { ImBin } from "react-icons/im";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { TiPlus, TiMinus } from "react-icons/ti";
import { useContextProvider } from "../../context/context";
import { UPDATE_CART } from '../../assets/contsntants/constants';
import { Link } from 'react-router-dom';
function ShopingItem({ cartProduct }) {
  const { cart, dispatch } = useContextProvider();
  const updateQuantity = (quantity) => {
    const newCart = cart?.map(el => {
      if (el?.id === cartProduct?.id && el?.color === cartProduct?.color && el?.size === cartProduct?.size) {
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
        <Link to={`/Products/${cartProduct?.id}`}>
          <img src={cartProduct?.attchment} alt="shop" />
        </Link>
        <article className="shop-item-info">
          <h4>name : <span> {cartProduct?.name} </span> </h4>
          <div>
            color : <VscCircleLargeFilled color={cartProduct?.color} />
          </div>
          <p>price : {cartProduct?.price}$</p>
          <p>size : {cartProduct?.size}</p>
        </article>
      </section>
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
      <section className='subtotal-container'>
        <div className="sub-total-text"> 
          Subtotal
        </div>
        <div className="sub-total-amount">
          <span className="subtotal">{cartProduct?.subTotal}$</span>
          <button onClick={removeProduct} className="im-bin">
            <ImBin />
          </button>
          <button onClick={removeProduct} className="im-cross">
            <ImCross />
          </button>
        </div>

      </section>
    </main>
  );
}

export default ShopingItem;
