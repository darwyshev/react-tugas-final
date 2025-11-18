import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onBuy }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onBuy={onBuy} />
      ))}
    </div>
  );
}
