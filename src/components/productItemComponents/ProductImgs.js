import React, { useEffect, useState } from "react";
import { ImStarFull, ImStarEmpty } from "react-icons/im";
import { useContextProvider } from "../../context/context";
import Rating from "react-rating";
import { BsFillCircleFill } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { TiPlus, TiMinus } from "react-icons/ti";
import { IoMdArrowRoundBack, IoMdAddCircleOutline } from "react-icons/io";
import { useParams, useNavigate, Link } from "react-router-dom";
import { GlassMagnifier } from "react-image-magnifiers";
import Loading from "../sharedCompnents/Loading";
import { getProduct } from '../../actions';
import { UPDATE_CART } from '../../assets/contsntants/constants';
function ProductImgs() {
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
    const cardEl = {
      id: product.id,
      size: product.fields.sizes.find((el, index) => index === sizeIndex) || "",
      color: product.fields.colors.find((el, index) => index === activeIndex) || "",
      attchment: product.fields.attachments[activeIndex].url || "",
      price: product.fields.price || "",
      quantity,
      subTotal: product?.fields?.price || "",
      name: product?.fields?.name,
      freeShipping: product?.fields?.freeShipping || false

    };

    const productCard = cart?.find(el => el.id === product.id);

    if (cardEl?.color === productCard?.color && cardEl?.size === productCard.size) {
      const newCard = cart.filter(el => el.id !== productCard?.id);
      const quantityCalc = productCard?.quantity + cardEl?.quantity;
      const subTotalCalc = cardEl?.price * quantityCalc;
      dispatch({
        type: UPDATE_CART,
        payload: [...newCard, { ...cardEl, quantity: quantityCalc, subTotal: subTotalCalc }]
      });

    } else {
      return dispatch({
        type: UPDATE_CART,
        payload: [...cart, cardEl]
      })
    }
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
          <GlassMagnifier
            imageSrc={product.fields.attachments[activeIndex].url}
            imageAlt="Example"
            className="active-img"
          />
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
            <Link to="/cart">
              <button disabled={!product.fields.available} className="add-to-cart" onClick={addToCard}>
                Add To Cart <IoMdAddCircleOutline />
              </button>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ProductImgs;
