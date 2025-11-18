"use client";
import Header from "./components/Header";
import "./components/ProductCard.css";

export default function Home() {
  const menu = [
    { id: "1", name: "Cheeseburger", price: 25, desc: "Juicy grilled beef patty with cheese, lettuce, and tomato.", img: "/burger.jpg" },
    { id: "2", name: "French Fries", price: 15, desc: "Crispy golden fries, lightly salted.", img: "/fries.jpg" },
    { id: "3", name: "Chicken Nuggets", price: 20, desc: "Tender chicken nuggets with your choice of sauce.", img: "/nuggets.jpg" },
    { id: "4", name: "Soda", price: 10, desc: "Chilled fizzy drink to refresh your meal.", img: "/soda.jpg" },
    { id: "5", name: "Milkshake", price: 18, desc: "Creamy milkshake in chocolate, vanilla, or strawberry.", img: "/milkshake.jpg" },
  ];
  return (
    <div style={{maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem"}}>
      <Header />
      <section style={{textAlign: "center", margin: "2rem 0 3rem 0"}}>
        <img src="/hero.jpg" alt="Festfud Kecee Hero" style={{width: "100%", maxWidth: 900, borderRadius: 24, margin: "0 auto 2.5rem auto", boxShadow: "0 4px 32px rgba(255,140,0,0.10)"}} />
        <h1 style={{fontSize: "2.7rem", color: "#d35400", fontWeight: 800, letterSpacing: 1, marginTop: 32}}>Welcome to Festfud Kecee!</h1>
        <p style={{fontSize: "1.2rem", color: "#444", margin: "1rem auto 2.5rem auto", maxWidth: 600}}>
          Your favorite fast food, delivered fast and fresh. Explore our menu, learn about us, or get in touch!
        </p>
        <nav style={{display: "flex", justifyContent: "center", gap: 32, marginBottom: 40}}>
          <a className="details-link" href="/products" style={{fontWeight: 700, fontSize: "1.1rem", padding: "0.7em 2em", background: "linear-gradient(90deg,#ff9800 0%,#ffb347 100%)", color: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(255,140,0,0.10)", textDecoration: "none"}}>See Menu</a>
        </nav>
      </section>
    </div>
  );
}
