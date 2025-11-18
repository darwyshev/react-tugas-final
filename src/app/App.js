import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./ProductDetail";
import "./components/ProductCard.css";

const PRODUCTS = [
  { id: "1", name: "Monitor", price: 200, desc: "High-res monitor" },
  { id: "2", name: "Printer", price: 150, desc: "Fast printer" },
  { id: "3", name: "Router", price: 100, desc: "WiFi 6 router" },
];

function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleBuy = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={PRODUCTS} onBuy={handleBuy} />
      <button className="buy-btn" onClick={() => setShowCart((v) => !v)}>
        {showCart ? "Hide" : "Show"} Cart ({cart.length})
      </button>
      {showCart && (
        <div className="cart-box">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, idx) => (
                <li key={idx}>{item.name} - ${item.price}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav style={{ margin: "1rem 0" }}>
        <Link to="/products" style={{ marginRight: 16 }}>Products</Link>
      </nav>
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail products={PRODUCTS} />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}
