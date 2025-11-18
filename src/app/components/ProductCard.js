import React from "react";
import Link from "next/link";
import "./ProductCard.css";

export default function ProductCard({ product, onBuy }) {
  return (
    <div className="product-card">
      <div style={{width: 120, height: 120, marginBottom: 12, position: "relative"}}>
        {product.img ? (
          <img src={product.img} alt={product.name} style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: 12, border: "2px solid #ffb347"}} />
        ) : (
          <div style={{width: "100%", height: "100%", background: "#ffe5b4", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#d35400", fontSize: 32, border: "2px dashed #ffb347"}}>
            No Image
          </div>
        )}
      </div>
      <h3>{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button className="buy-btn" onClick={() => onBuy(product)}>
        Buy
      </button>
      <Link className="details-link" href={`/products/${product.id}`}>Details</Link>
    </div>
  );
}
