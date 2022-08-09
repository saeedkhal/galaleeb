import React from 'react';
import { ImStarHalf, ImStarFull } from 'react-icons/im';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { IoMdArrowRoundBack, IoMdAddCircleOutline } from 'react-icons/io';
import img from '../../assets/images/img2.jpeg';
function ProductImgs(props) {
  return (
    <main className="container">
      <section className="product-container">
        <article className="product-img">
          <button className="backto-product">
            {' '}
            <IoMdArrowRoundBack />
            Back to products
          </button>
          <img src={img} alt="neshar" className="main-img" />
          <div className="imgesitem-container">
            <img src={img} alt="neshar" className="img-item" />
            <img src={img} alt="neshar" className="img-item" />{' '}
            <img src={img} alt="neshar" className="img-item" />{' '}
            <img src={img} alt="neshar" className="img-item" />
            <img
              src={img}
              alt="neshar"
              className="img-item active-product-item"
            />
          </div>
        </article>
        <article className="product-article">
          <h1>leather chair </h1>
          <div className="starts-rate">
            <ImStarFull />
            <ImStarHalf />
            <ImStarHalf />
            <ImStarHalf />
            <span>(17 customer reviews)</span>
          </div>
          <strong className="price">$ 200.99</strong>
          <p className="decription">
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal. Schlitz venmo everyday
            carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag
            kinfolk microdosing gochujang live-edge
          </p>
          <div className="about-product">
            <div>Available : </div>
            <div>In stock</div>
            <div>Brand :</div>
            <div>caressa</div>
            <div>Size</div>
            <div className="sizes">
              <span className="active">M</span>
              <span>L</span>
              <span>Xl</span>
              <span>XXl</span>
            </div>
            <div>Colors</div>
            <div className="color">
              <button style={{ background: 'green' }}>&nbsp;</button>
              <button className="active" style={{ background: 'red' }}>
                ✔
              </button>
            </div>
          </div>
          <div className="increase-decrease">
            <div>
              <TiMinus />
              <span>3</span>
              <TiPlus />
            </div>
            <button className="add-to-cart">
              Add To Cart <IoMdAddCircleOutline />
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ProductImgs;
