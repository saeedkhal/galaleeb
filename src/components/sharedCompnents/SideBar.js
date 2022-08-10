import React from 'react';
import { CgClose } from 'react-icons/cg';
import logo from '../../assets/images/logo.svg';
import { BsCartFill, BsFillPersonPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function SideBar() {
  return (
    <main className="sidebar oprnsidebare">
      <div className="sidebar-container">
        <section className="logo-x">
          <img src={logo} className="logo" alt="logo" />
          <CgClose className="cross" />
        </section>
        <ul className="navbar-routs-sidebar">
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
        <div className="cart-login-sidebar">
          <article className="cart-sidebar ">
            <a href="/cart">
              cart <BsCartFill />
              <span className="cart-amount">4</span>
            </a>
          </article>
          <article className="login-sidebar">
            <a href="/login">
              login <BsFillPersonPlusFill />
            </a>
          </article>
        </div>
      </div>
    </main>
  );
}

export default SideBar;
