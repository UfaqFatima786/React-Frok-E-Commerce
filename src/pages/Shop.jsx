import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const categories = [
    "All", "Party Wear", "Casual Wear",
    "Birthday Wear", "Wedding Wear"
  ];
  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      const matchCategory =
        category === "All" || product.category === category;
      const matchSearch =
        product.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [category, search, sort]);
  return (
    <main className="shop-page">
      <div className="page-banner">
        <span>OUR COLLECTION</span>
        <h1>Shop Little <b>Princess</b></h1>
        <p>Beautiful outfits for your beautiful little ones.</p>
      </div>
      <section className="section shop-content">
        <div className="shop-toolbar">
          <div className="search-box">
            <Search size={19} />
            <input
              placeholder="Search beautiful frocks..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="sort-box">
            <SlidersHorizontal size={17} />
            <select value={sort} onChange={e => setSort(e.target.value)}>
              <option value="default">Default Sorting</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
        <div className="category-filters">
          {categories.map(item => (
            <button
              key={item}
              className={category === item ? "filter-btn selected" : "filter-btn"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="result-count">
          Showing {filteredProducts.length} beautiful dresses
        </p>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>🌸</span>
            <h2>No dresses found!</h2>
            <p>Try another search or category.</p>
            <button className="primary-btn" onClick={() => {
              setSearch("");
              setCategory("All");
            }}>
              View All Dresses
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
