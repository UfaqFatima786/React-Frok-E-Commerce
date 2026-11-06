
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useShop } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist } = useShop();

  return (
    <main className="section wishlist-page">
      <div className="section-heading">
        <span className="section-label">YOUR FAVORITES</span>
        <h2>My <span>Wishlist</span></h2>
        <p>All your favorite little princess outfits in one place.</p>
      </div>

      {wishlist.length ? (
        <div className="product-grid">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Heart size={55} />
          <h2>Your Wishlist is Empty!</h2>
          <p>Save your favorite frocks here.</p>
          <Link to="/shop" className="primary-btn">Discover Dresses</Link>
        </div>
      )}
    </main>
  );
}
