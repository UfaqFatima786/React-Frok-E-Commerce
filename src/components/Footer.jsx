
import { Link } from "react-router-dom";
import { Crown, Instagram, Facebook, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <Crown size={27} />
            <span>Little <b>Princess</b></span>
          </Link>
          <p>
            Making little moments more magical with
            beautiful dresses and adorable styles.
          </p>
          <div className="social-links">
            <a href="#instagram" aria-label="Instagram"><Instagram /></a>
            <a href="#facebook" aria-label="Facebook"><Facebook /></a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop All</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        <div>
          <h3>Categories</h3>
          <Link to="/shop?category=Party%20Wear">Party Wear</Link>
          <Link to="/shop?category=Casual%20Wear">Casual Wear</Link>
          <Link to="/shop?category=Birthday%20Wear">Birthday Wear</Link>
          <Link to="/shop?category=Wedding%20Wear">Wedding Wear</Link>
        </div>

        <div>
          <h3>Customer Care</h3>
          <a href="#contact">Contact Us</a>
          <a href="#contact">Delivery Information</a>
          <a href="#contact">Return Policy</a>
          <a href="#contact">Size Guide</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Little Princess. All Rights Reserved.</p>
        <span>Made with <Heart size={14} fill="currentColor" /> for little princesses.</span>
      </div>
    </footer>
  );
}
