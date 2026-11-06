
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingBag, Star, ArrowLeft } from "lucide-react";
import products from "../data/products";
import { useShop } from "../context/ShopContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  const { addToCart, toggleWishlist, isWishlisted } = useShop();
  const [size, setSize] = useState(product?.size[0] || "");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="empty-state">
        <h2>Product not found!</h2>
        <Link to="/shop" className="primary-btn">Back to Shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product, size);
    }
  };

  return (
    <main className="details-page">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}
      </div>

      <section className="details-layout">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
          <span className="product-badge">{product.badge}</span>
        </div>

        <div className="details-info">
          <span className="section-label">{product.category}</span>
          <h1>{product.name}</h1>

          <div className="rating">
            <Star size={17} fill="currentColor" />
            {product.rating} / 5
          </div>

          <div className="details-price">
            Rs. {product.price.toLocaleString("en-PK")}
            <del>Rs. {product.oldPrice.toLocaleString("en-PK")}</del>
          </div>

          <p className="details-description">{product.description}</p>

          <div className="size-selector">
            <h3>Select Size</h3>
            <div className="size-options">
              {product.size.map(item => (
                <button
                  key={item}
                  className={size === item ? "size-btn active" : "size-btn"}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <h3>Quantity</h3>
            <div className="quantity-control">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

          <div className="details-actions">
            <button className="primary-btn" onClick={handleAdd}>
              <ShoppingBag size={19} /> Add to Cart
            </button>

            <button
              className={`details-wishlist ${isWishlisted(product.id) ? "liked" : ""}`}
              onClick={() => toggleWishlist(product)}
              aria-label="Toggle wishlist"
            >
              <Heart fill={isWishlisted(product.id) ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="product-meta">
            <p>Category: {product.category}</p>
            <p>Color: {product.color}</p>
            <p>Product ID: LP-{product.id}</p>
          </div>

          <Link to="/shop" className="back-link">
            <ArrowLeft size={17} /> Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
