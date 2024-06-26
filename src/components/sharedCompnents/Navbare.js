import React from "react";
// import logo from '../../assets/images/logo.svg';
import { GoThreeBars } from "react-icons/go";
import { BsCartFill, BsFillPersonPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { useContextProvider } from "../../context/context";
function Navbare() {
  const { OpenSidebar, cart, signInwithGoogle, user, logOut } = useContextProvider();
  const cartTotal = cart.reduce((prev, current) => prev + current.quantity, 0) || 0;
  return (
    <main className="nav-container ">
      <section className="nav-bar container">
        <Link to="/">
          <article className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </article>
        </Link>

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
              <span className="cart-amount">{cartTotal}</span>
            </Link>
          </article>

          {
            !Object.keys(user).length ?
              <article onClick={signInwithGoogle} className="login">  login <BsFillPersonPlusFill />  </article>
              :
              <article onClick={logOut} className="login">  LogOut <img src={user?.photoURL} alt='user' />  </article>
          }


        </div>
        <GoThreeBars className="bars-icon" onClick={() => OpenSidebar()} />
      </section>
    </main>
  );
}

export default Navbare;
