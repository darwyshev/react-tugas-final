import Link from "next/link";
import { FaHome, FaInfoCircle, FaPhone, FaShoppingCart, FaUtensils } from "react-icons/fa";
import "./Header.css";

export default function Header({ cartCount = 0 }) {
  return (
    <header className="ff-header">
      <div className="ff-header-left">
        <FaUtensils style={{marginRight: 8, color: '#d35400'}} size={28} />
        <Link href="/" className="ff-brand">Festfud Kecee</Link>
      </div>
      <nav className="ff-header-nav">
        <Link href="/" className="ff-nav-link"><FaHome /> Home</Link>
        <Link href="/about" className="ff-nav-link"><FaInfoCircle /> About</Link>
        <Link href="/contact" className="ff-nav-link"><FaPhone /> Contact</Link>
        <Link href="/products/cart" className="ff-nav-link"><FaShoppingCart /> Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}
