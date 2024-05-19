import React, { useEffect, useState } from "react";
import { ImStarFull, ImStarEmpty } from "react-icons/im";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { useContextProvider } from "../../context/context";
import Rating from "react-rating";
import { BsFillCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoMdArrowRoundBack, IoMdAddCircleOutline } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import { GlassMagnifier } from "react-image-magnifiers";
import Loading from "../sharedCompnents/Loading";
import { getProduct } from '../../actions';
import { useAlert } from 'react-alert'
import { UPDATE_CART } from '../../assets/contsntants/constants';
function ProductImgs() {
  const alert = useAlert();
  const navigate = useNavigate();
  const { channels, dispatch, product, cart } = useContextProvider();
  const [loading, setLoading] = useState([]);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();

  const getSingleProduct = async () => {
    setLoading(true);
    await getProduct(dispatch, id);
    setLoading(false);
  };

  const addToCard = () => {
    if (!product.fields.available) {
      return alert.error('product not available in stock');
    }
    const cardEl = {
      id: product.id,
      size: product.fields.sizes.find((el, index) => index === sizeIndex) || "",
      color: product.fields.colors.find((el, index) => index === activeIndex) || "",
      attchment: product.fields.attachments[activeIndex].url || "",
      colorIndex: activeIndex,
      price: product.fields.price || "",
      quantity,
      subTotal: product?.fields?.price || "",
      name: product?.fields?.name,
      freeShipping: product?.fields?.freeShipping || false
    };

    const productCard = cart?.find(el => el.id === cardEl.id && cardEl?.color === el?.color && cardEl?.size === el.size);

    if (!productCard) {
      dispatch({
        type: UPDATE_CART,
        payload: [...cart, cardEl]
      })
    } else {
      const newCard = cart.filter(el => !(el.id === productCard.id && productCard?.color === el?.color && productCard?.size === el.size));
      const quantityCalc = productCard?.quantity + cardEl?.quantity;
      const subTotalCalc = cardEl?.price * quantityCalc;
      dispatch({
        type: UPDATE_CART,
        payload: [...newCard, { ...cardEl, quantity: quantityCalc, subTotal: subTotalCalc }]
      });
    }
    navigate('/cart')
  }
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 30 
  
  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance;
    if(isLeftSwipe){
      const nextIndex = activeIndex+1 === product?.fields?.attachments?.length ? 0 :activeIndex+1;
      setActiveIndex(nextIndex)
    }if(isRightSwipe){
      const nextIndex = activeIndex-1 === -1 ? product?.fields?.attachments?.length-1 : activeIndex-1;
      setActiveIndex(nextIndex)
    }
    // add your conditional logic here
  }

  useEffect(() => {
    getSingleProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (loading) {
    return <Loading />;
  }

  if (!Object.keys(product).length) {
    return navigate('/err');
  }


  return (
    <main className="container">
      <section className="product-container">
        <article className="product-img">
          <button
            className="backto-product"
            onClick={() => {
              navigate("/products");
            }}
          >
            <IoMdArrowRoundBack />
            Back to products
          </button>
          <img 
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
          className="active-img" alt="img" src={product.fields.attachments[activeIndex].url ?? ''} />

          <div className="imgesitem-container">
            {product.fields.attachments.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img?.url}
                  alt="neshar"
                  className={
                    index === activeIndex
                      ? "img-item active-product-item"
                      : "img-item"
                  }
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
          </div>
        </article>
        <article className="product-article">
          <h1>{product?.fields?.name}</h1>
          <div className="starts-rate">
            <Rating
              emptySymbol={<ImStarEmpty />}
              fullSymbol={<ImStarFull />}
              fractions={2}
              readonly
              initialRating={product.fields.rating}
            />
            <span className="number-rating">
              ({product.fields.ratingNum} customer reviews)
            </span>
          </div>
          <strong className="price">$ {product.fields.price}</strong>
          <p className="decription">{product.fields.desc}</p>
          <div className="about-product">
            <div>Free Shipping : </div>
            <div style={{ fontSize: '18px', display: "flex", alignItems: 'center' }}>
              {!product?.fields?.freeShipping ? <RxCross2 /> : <BsCheckLg />}
            </div>
            <div>Available : </div>
            <div>
              {product.fields.available ? "In Stocke" : "not Available"}
            </div>
            <div>Brand :</div>
            <div>
              {
                channels?.find(
                  (channelItem) =>
                    channelItem?.id === product?.fields?.chennel[0]
                )?.fields?.name
              }
            </div>
            <div>Size</div>
            <div className="sizes">
              {product.fields.sizes.map((size, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => setSizeIndex(index)}
                    className={sizeIndex === index ? "active" : ""}
                  >
                    {size}
                  </span>
                );
              })}
            </div>
            <div>Colors</div>
            <div className="color">
              {product.fields.colors.map((color, index) => {
                return (
                  <button key={index} onClick={() => setActiveIndex(index)}>
                    {activeIndex === index ? (
                      <FaCheckCircle style={{ color: color }} />
                    ) : (
                      <BsFillCircleFill style={{ color: color }} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="increase-decrease">
            <div>
              <span>
                <TiMinus onClick={() => {
                  if (quantity !== 1) {
                    setQuantity(quantity - 1)
                  }
                }
                } />
              </span>
              <span>{quantity}</span>
              <span>
                <TiPlus onClick={() => setQuantity(quantity + 1)} />
              </span>
            </div>
            <button
              className="add-to-cart" onClick={addToCard}>
              Add To Cart <IoMdAddCircleOutline />
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ProductImgs;
