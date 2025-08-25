import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./components/Cart";
import Checkout from "./Pages/Checkout";

export default function App() {
  const [cart, setCart] = useState([]);

  // ✅ Add to Cart
  const addtoCart = (product) => {
    setCart([...cart, product]);
  };

  // ✅ Remove from Cart
  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addtoCart={addtoCart} />} />
        <Route path="/products" element={<Product addtoCart={addtoCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </>
  );
}
