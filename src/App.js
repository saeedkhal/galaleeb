import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import NavSideBar from './components/sharedCompnents/NavSideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Error from './pages/Error';
import Footer from './components/sharedCompnents/Footer';
function App() {
  return (
    <>
      <main className='main-container'>
        <section>
          <BrowserRouter>
            <Routes>
              <Route path="e-commerce" element={<NavSideBar />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<Product />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </section>
        <section>
          <Footer />
        </section>
      </main>

    </>
  );
}

export default App;
