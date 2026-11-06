
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isWishlisted } = useShop();

  return (
    <article className="product-card">
      <div className="product-image">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>

        <span className="product-badge">{product.badge}</span>

        <button
          className={`wishlist-btn ${isWishlisted(product.id) ? "liked" : ""}`}
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
        >
          <Heart
            fill={isWishlisted(product.id) ? "currentColor" : "none"}
          />
        </button>

        <button
          className="quick-add"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag size={17} /> Add to Cart
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>

        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>

        <div className="rating">
          <Star size={15} fill="currentColor" />
          {product.rating}
        </div>

        <div className="product-price">
          <strong>Rs. {product.price.toLocaleString("en-PK")}</strong>
          <del>Rs. {product.oldPrice.toLocaleString("en-PK")}</del>
        </div>
      </div>
    </article>
  );
}
