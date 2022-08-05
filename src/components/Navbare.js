import React from 'react';
import logo from '../assets/images/logo.svg';
import { GoThreeBars } from 'react-icons/go';
import { BsCartFill, BsFillPersonPlusFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setIsSidebarOpen } from '../features/globalSlice';
import { Link } from 'react-router-dom';
function Navbare(props) {
  const dispatch = useDispatch();
  return (
    <main className="nav-container ">
      <section className="nav-bar container">
        <img src={logo} alt="logo" className="logo" />
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
            </a>{' '}
          </article>
        </div>
        <GoThreeBars
          className="bars-icon"
          onClick={() => dispatch(setIsSidebarOpen(true))}
        />
      </section>
    </main>
  );
}

export default Navbare;
