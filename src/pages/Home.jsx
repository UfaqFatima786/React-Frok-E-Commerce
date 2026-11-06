
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  {
    name: "Party Wear",
    subtitle: "For special celebrations",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600"
  },
  {
    name: "Casual Wear",
    subtitle: "Comfort meets style",
    image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600"
  },
  {
    name: "Birthday Wear",
    subtitle: "Make her day magical",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={16} /> A LITTLE WORLD OF MAGIC
          </span>

          <h1>
            Every Little Girl
            <br />
            Deserves to Feel
            <br />
            <span>Like a Princess!</span>
          </h1>

          <p>
            Discover adorable frocks, dreamy dresses and
            beautiful outfits made for your little one's
            sweetest moments.
          </p>

          <div className="hero-buttons">
            <Link to="/shop" className="primary-btn">
              Explore Collection <ArrowRight size={18} />
            </Link>

            <Link to="/shop" className="secondary-btn">
              Shop Now
            </Link>
          </div>

          <div className="hero-note">
            <span>♡</span> Made with love for little princesses
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRweCfRy-RsD02SI01aYLtfrOiryHEF9frGtPw741SrplO9KVrdzdDK29Vf&s=10"
            alt="Little Princess fashion collection"
          />
          <div className="floating-card">
            <span>✨ New Collection</span>
            <strong>Dreamy Dresses</strong>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div>♡ <span>Beautiful Designs</span></div>
        <div>✦ <span>Premium Quality</span></div>
        <div>♧ <span>Comfortable Fits</span></div>
        <div>♡ <span>Made for Memories</span></div>
      </section>

      <section className="section categories-section" id="categories">
        <div className="section-heading">
          <span className="section-label">EXPLORE OUR COLLECTION</span>
          <h2>Shop by <span>Category</span></h2>
          <p>Find the perfect outfit for every little occasion.</p>
        </div>

        <div className="category-grid">
          {categories.map(category => (
            <Link
              to={`/shop?category=${encodeURIComponent(category.name)}`}
              className="category-card"
              key={category.name}
            >
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <h3>{category.name}</h3>
                <p>{category.subtitle}</p>
                <span>Explore Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <span className="section-label">HANDPICKED WITH LOVE</span>
          <h2>Our <span>Best Sellers</span></h2>
          <p>Our most loved styles for your little princess.</p>
        </div>

        <div className="product-grid">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="center-button">
          <Link to="/shop" className="outline-btn">
            View All Products <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="promo-section" id="about">
        <div>
          <span className="section-label">A BOUTIQUE FULL OF LOVE</span>
          <h2>Little Outfits.<br />Big Happy Memories.</h2>
          <p>
            At Little Princess, we believe every childhood
            moment deserves a beautiful outfit. Discover
            styles made to bring smiles and sparkle.
          </p>
          <Link to="/shop" className="primary-btn">
            Discover More <ArrowRight size={18} />
          </Link>
        </div>
        <div className="promo-decoration">👑</div>
      </section>

      <section className="newsletter" id="contact">
        <span className="section-label">STAY IN THE LOOP</span>
        <h2>Join Our Little <span>Princess Club</span></h2>
        <p>Be the first to discover new collections and special offers.</p>
        <form onSubmit={e => {
          e.preventDefault();
          alert("Thank you for joining Little Princess!");
          e.target.reset();
        }}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}
