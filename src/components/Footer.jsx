
import { Link } from "react-router-dom";
import { Crown, Heart } from "lucide-react";

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
            <a href="#instagram" aria-label="Instagram">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.3v3h2.8v8h3.4Z" />
              </svg>
            </a>
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
