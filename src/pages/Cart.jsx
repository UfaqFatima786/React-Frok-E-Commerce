
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useShop();

  if (cart.length === 0) {
    return (
      <div className="empty-state cart-empty">
        <ShoppingBag size={55} />
        <h2>Your Shopping Bag is Empty!</h2>
        <p>Your little princess is waiting for something beautiful.</p>
        <Link to="/shop" className="primary-btn">Explore Dresses</Link>
      </div>
    );
  }

  return (
    <main className="cart-page section">
      <div className="section-heading">
        <span className="section-label">YOUR SHOPPING BAG</span>
        <h2>Shopping <span>Cart</span></h2>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map(item => (
            <div className="cart-item" key={`${item.id}-${item.size}`}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>Size: {item.size}</p>
                <strong>Rs. {item.price.toLocaleString("en-PK")}</strong>

                <div className="quantity-control">
                  <button onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity - 1)
                  }>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity + 1)
                  }>+</button>
                </div>
              </div>

              <div className="cart-item-end">
                <strong>
                  Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
                </strong>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.size)}
                  aria-label="Remove item"
                >
                  <Trash2 size={19} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <aside className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <strong>Rs. {cartTotal.toLocaleString("en-PK")}</strong>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <strong>{cartTotal >= 5000 ? "FREE" : "Rs. 200"}</strong>
          </div>
          <div className="summary-row total-row">
            <span>Total</span>
            <strong>
              Rs. {(cartTotal + (cartTotal >= 5000 ? 0 : 200)).toLocaleString("en-PK")}
            </strong>
          </div>

          <Link to="/checkout" className="primary-btn checkout-btn">
            Proceed to Checkout
          </Link>

          <Link to="/shop" className="continue-link">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}
