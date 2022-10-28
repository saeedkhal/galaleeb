import React from "react";
// import logo from '../../assets/images/logo.svg';
import { GoThreeBars } from "react-icons/go";
import { BsCartFill, BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import { useContext } from "react";
import logo from "../../assets/images/logo_fill.svg";
function Navbare() {
  const { OpenSidebar } = useContext(AppContext);
  return (
    <main className="nav-container ">
      <section className="nav-bar container">
        <article className="logo-container">
          <span>GALALEEB</span>
          <img src={logo} alt="logo" className="logo" />
          <span>STORE</span>
        </article>

        <ul className="navbar-routs">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <div className="cart-login">
          <article className="cart">
            <Link to="/cart">
              cart <BsCartFill />
              <span className="cart-amount">5</span>
            </Link>
          </article>
          <article className="login">
            <a href="/login">
              login <BsFillPersonPlusFill />
            </a>{" "}
          </article>
        </div>
        <GoThreeBars className="bars-icon" onClick={() => OpenSidebar()} />
      </section>
    </main>
  );
}

export default Navbare;
