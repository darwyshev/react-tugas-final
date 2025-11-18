"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import "../../components/ProductCard.css";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [customer, setCustomer] = useState({ name: "", phone: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    setCart(stored ? JSON.parse(stored) : []);
  }, []);

  const handleCheckout = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setCart([]);
    localStorage.removeItem("cart");
  };

  if (orderPlaced) {
    return (
      <div style={{maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem"}}>
        <Header cartCount={0} />
        <div className="product-card" style={{maxWidth: 500, margin: "2rem auto", textAlign: "center"}}>
          <h2>Thank you for your order!</h2>
          <p>Your Festfud Kecee meal is being prepared. We'll contact you at {customer.phone}.</p>
          <Link className="details-link" href="/products">Back to Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem"}}>
      <Header cartCount={cart.length} />
      <div className="product-card" style={{maxWidth: 600, margin: "2rem auto"}}>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty. <Link className="details-link" href="/products">Go to Menu</Link></p>
        ) : (
          <ul style={{marginBottom: 16}}>
            {cart.map((item, idx) => (
              <li key={idx}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <>
            <p style={{fontWeight: 600, marginBottom: 12}}>
              Total: ${cart.reduce((sum, item) => sum + item.price, 0)}
            </p>
            {!checkout ? (
              <button className="buy-btn" onClick={() => setCheckout(true)}>
                Proceed to Checkout
              </button>
            ) : (
              <form onSubmit={handleCheckout} style={{display: "flex", flexDirection: "column", gap: 12, marginTop: 16}}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customer.name}
                  onChange={e => setCustomer({ ...customer, name: e.target.value })}
                  required
                  style={{padding: 8, borderRadius: 6, border: "1px solid #ccc"}}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={customer.phone}
                  onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                  required
                  style={{padding: 8, borderRadius: 6, border: "1px solid #ccc"}}
                />
                <button className="buy-btn" type="submit">Place Order</button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
