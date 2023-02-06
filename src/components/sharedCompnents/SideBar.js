import React from 'react';
import { CgClose } from 'react-icons/cg';
import logo from '../../assets/images/logo_fill.svg';
import { BsCartFill, BsFillPersonPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useContextProvider } from '../../context/context';
function SideBar() {
  const { cart, CloseSideBar, isSidebarOpen, user, signInwithGoogle, logOut } = useContextProvider();
  const cartTotal = cart.reduce((prev, current) => prev + current.quantity, 0) || 0
  return (
    <main className={isSidebarOpen ? 'sidebar oprnsidebare' : 'sidebar'}>
      <div className="sidebar-container">
        <section className="logo-x">
          <Link to="/" onClick={() => CloseSideBar()} >
            <article className="logo-container">
              <span>GALALEEB</span>
              <img src={logo} alt="logo" className="logo" />
              <span>STORE</span>
            </article>
          </Link>
          <CgClose className="cross" onClick={() => CloseSideBar()} />
        </section>
        <ul className="navbar-routs-sidebar">
          <li>
            <Link to="/" onClick={() => CloseSideBar()} >Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => CloseSideBar()} >About</Link>
          </li>
          <li>
            <Link to="/products" onClick={() => CloseSideBar()} >Products</Link>
          </li>
        </ul>
        <div className="cart-login-sidebar">
          <article className="cart-sidebar ">
            <Link to="/cart" onClick={() => CloseSideBar()} >
              cart <BsCartFill />
              <span className="cart-amount">{cartTotal}</span>
            </Link>
          </article>
          <article className="login-sidebar">

            {
              !Object.keys(user).length ?
                <span onClick={() => { signInwithGoogle(); CloseSideBar() }} >
                  login
                  <BsFillPersonPlusFill />
                </span>
                :
                <span onClick={() => { logOut(); CloseSideBar() }} className="login">  LogOut <img src={user?.photoURL} alt='user' />  </span>
            }
          </article>
        </div>
      </div>
    </main>
  );
}

export default SideBar;
