import React from 'react';
import { CgClose } from 'react-icons/cg';
import logo from '../assets/images/logo.svg';
import { BsCartFill, BsFillPersonPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSidebarOpen } from '../features/globalSlice';
import { Link } from 'react-router-dom';
function SideBar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.global.isSidebarOpen);
  console.log(isSidebarOpen);
  return (
    <main className={isSidebarOpen ? 'sidebar oprnsidebare' : 'sidebar'}>
      <div className="sidebar-container">
        <section className="logo-x">
          <img src={logo} className="logo" alt="logo" />
          <CgClose
            className="cross"
            onClick={() => dispatch(setIsSidebarOpen(false))}
          />
        </section>
        <ul className="navbar-routs-sidebar">
          <li>
            <Link to="/" onClick={() => dispatch(setIsSidebarOpen(false))}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => dispatch(setIsSidebarOpen(false))}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => dispatch(setIsSidebarOpen(false))}
            >
              Products
            </Link>
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
