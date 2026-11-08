import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CategoryCard = ({ category }) => {
  return (
    <Link
      to={`/shop?category=${encodeURIComponent(category.name)}`}
      className="category-card"
    >
      <div className="category-image">
        <img
          src={category.image}
          alt={category.name}
        />

        <div className="category-overlay">
          <span className="category-explore">
            Explore Collection <ArrowUpRight size={17} />
          </span>
        </div>
      </div>

      <div className="category-info">
        <h3>{category.name}</h3>
        <p>{category.subtitle}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;