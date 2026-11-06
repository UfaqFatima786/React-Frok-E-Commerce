
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

export default function Checkout() {
  const { cart, cartTotal, removeFromCart } = useShop();
  const navigate = useNavigate();
  const [payment, setPayment] = useState("Cash on Delivery");

  const delivery = cartTotal >= 5000 ? 0 : 200;
  const total = cartTotal + delivery;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "Karachi"
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!cart.length) return;

    const order = {
      customer: form,
      products: cart,
      payment,
      total,
      orderDate: new Date().toISOString()
    };

    console.log("Demo Order:", order);

    cart.forEach(item => removeFromCart(item.id, item.size));

    alert("Thank you! Your demo order has been placed.");
    navigate("/");
  };

  if (!cart.length) {
    return (
      <div className="empty-state">
        <h2>Your cart is empty!</h2>
        <button className="primary-btn" onClick={() => navigate("/shop")}>
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <main className="section checkout-page">
      <div className="section-heading">
        <span className="section-label">ALMOST THERE</span>
        <h2>Secure <span>Checkout</span></h2>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Information</h2>

          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />

          <label>Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />

          <label>Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />

          <label>Delivery Address</label>
          <textarea name="address" value={form.address} onChange={handleChange} required />

          <label>City</label>
          <input name="city" value={form.city} onChange={handleChange} required />

          <h2>Payment Method</h2>

          <label className="payment-option">
            <input
              type="radio"
              checked={payment === "Cash on Delivery"}
              onChange={() => setPayment("Cash on Delivery")}
            />
            Cash on Delivery
          </label>

          <button className="primary-btn checkout-btn" type="submit">
            Place Demo Order — Rs. {total.toLocaleString("en-PK")}
          </button>
        </form>

        <aside className="order-summary">
          <h2>Your Order</h2>

          {cart.map(item => (
            <div className="summary-row" key={`${item.id}-${item.size}`}>
              <span>{item.name} × {item.quantity}</span>
              <strong>
                Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
              </strong>
            </div>
          ))}

          <div className="summary-row">
            <span>Delivery</span>
            <strong>{delivery === 0 ? "FREE" : `Rs. ${delivery}`}</strong>
          </div>

          <div className="summary-row total-row">
            <span>Total</span>
            <strong>Rs. {total.toLocaleString("en-PK")}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}
