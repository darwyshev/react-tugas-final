"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import ProductList from "../components/ProductList";
import Header from "../components/Header";
import "../components/ProductCard.css";

export default function Products() {
  const [products] = useState([
    { id: "1", name: "Cheeseburger", price: 25, img: "/burger.jpg" },
    { id: "2", name: "French Fries", price: 15, img: "/fries.jpg" },
    { id: "3", name: "Chicken Nuggets", price: 20, img: "/nuggets.jpg" },
    { id: "4", name: "Soda", price: 10, img: "/soda.jpg" },
    { id: "5", name: "Milkshake", price: 18, img: "/milkshake.jpg" },
  ]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleBuy = (product) => {
    setCart((prev) => [...prev, product]);
  };

  // Save cart to localStorage for Cart page
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
      <Header cartCount={cart.length} />
      <section>
        <ProductList products={products} onBuy={handleBuy} />
      </section>
      <section style={{ marginTop: 48 }}>
        <h2 style={{ textAlign: "center", marginBottom: 16, color: "#d35400" }}>
          Quick Menu Links
        </h2>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            listStyle: "none",
            padding: 0,
          }}
        >
          {products.map((p) => (
            <li key={p.id}>
              <Link className="details-link" href={`/products/${p.id}`}>
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
