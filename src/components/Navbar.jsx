import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag, Heart, Menu, X, Crown
} from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, wishlist } = useShop();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">
        ✨ Welcome to Little Princess | Free Delivery on Orders Above Rs. 5000
      </div>

      <header className="navbar">
        <Link to="/" className="logo" onClick={closeMenu}>
          <Crown size={27} />
          <span>Little <b>Princess</b></span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/shop" onClick={closeMenu}>Shop</NavLink>
          <a href="/shop#categories" onClick={closeMenu}>Categories</a>
          <a href="/#about" onClick={closeMenu}>About</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-icons">
          <Link to="/wishlist" className="nav-icon" aria-label="Wishlist">
            <Heart />
            <span className="count">{wishlist.length}</span>
          </Link>

          <Link to="/cart" className="nav-icon" aria-label="Shopping cart">
            <ShoppingBag />
            <span className="count">{cartCount}</span>
          </Link>
        </div>
      </header>
    </>
  );
}
