"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import "../../components/ProductCard.css";

const productData = [
  { id: "1", name: "Cheeseburger", price: 25, desc: "Juicy grilled beef patty with cheese, lettuce, and tomato.", img: "/burger.jpg" },
  { id: "2", name: "French Fries", price: 15, desc: "Crispy golden fries, lightly salted.", img: "/fries.jpg" },
  { id: "3", name: "Chicken Nuggets", price: 20, desc: "Tender chicken nuggets with your choice of sauce.", img: "/nuggets.jpg" },
  { id: "4", name: "Soda", price: 10, desc: "Chilled fizzy drink to refresh your meal.", img: "/soda.jpg" },
  { id: "5", name: "Milkshake", price: 18, desc: "Creamy milkshake in chocolate, vanilla, or strawberry.", img: "/milkshake.jpg" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((p) => p.id === id);
  return (
    <div style={{maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem"}}>
      <Header />
      <div className="product-card" style={{maxWidth: 500, margin: "2rem auto"}}>
        {!product ? (
          <>
            <h2>Menu Item Not Found</h2>
            <Link className="details-link" href="/products">Back to Menu</Link>
          </>
        ) : (
          <>
            <img src={product.img} alt={product.name} style={{width: 180, height: 180, objectFit: "cover", borderRadius: 16, border: "2px solid #ffb347", marginBottom: 18}} />
            <h2>{product.name}</h2>
            <p className="product-price">${product.price}</p>
            <p>{product.desc}</p>
            <Link className="details-link" href="/products">Back to Menu</Link>
          </>
        )}
      </div>
    </div>
  );
}
