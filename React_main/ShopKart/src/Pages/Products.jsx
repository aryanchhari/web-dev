import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Products.css';

// Sample product data (one object for each image)
const products = [
  {
    id: 1,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    image: "/images/products/Samsung_phone.png",
    rating: 4.4,
    reviews: 1850,
    price: 12499,
    oldPrice: 14999,
    discount: 17,
    inStock: true
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    image: "/images/products/headphones.png",
    rating: 4.3,
    reviews: 940,
    price: 1999,
    oldPrice: 2999,
    discount: 33,
    inStock: true
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    category: "Electronics",
    image: "/images/products/airdopes.png",
    rating: 4.2,
    reviews: 1250,
    price: 1299,
    oldPrice: 1999,
    discount: 35,
    inStock: true
  },
  {
    id: 4,
    name: "Casual Jeans",
    category: "Fashion",
    image: "/images/products/jeans.png",
    rating: 4.1,
    reviews: 320,
    price: 1199,
    oldPrice: 1599,
    discount: 25,
    inStock: true
  },
  {
    id: 5,
    name: "Table Lamp",
    category: "Home & Kitchen",
    image: "/images/products/lamp.png",
    rating: 4.5,
    reviews: 210,
    price: 799,
    oldPrice: 999,
    discount: 20,
    inStock: true
  },
  {
    id: 6,
    name: "Lipstick Set",
    category: "Beauty",
    image: "/images/products/lipstick-set.png",
    rating: 4.3,
    reviews: 480,
    price: 599,
    oldPrice: 799,
    discount: 25,
    inStock: true
  },
  {
    id: 7,
    name: "Amazon Echo Dot",
    category: "Electronics",
    image: "/images/products/amazon_echo_dot.png",
    rating: 4.5,
    reviews: 860,
    price: 3499,
    oldPrice: 4999,
    discount: 30,
    inStock: true
  },
  {
    id: 8,
    name: "Apple iPhone",
    category: "Electronics",
    image: "/images/products/iphone.png",
    rating: 4.7,
    reviews: 1540,
    price: 59999,
    oldPrice: 69999,
    discount: 14,
    inStock: true
  },
  {
    id: 9,
    name: "NoiseFit Smartwatch",
    category: "Electronics",
    image: "/images/products/noisefit.png",
    rating: 4.2,
    reviews: 680,
    price: 2499,
    oldPrice: 3999,
    discount: 38,
    inStock: true
  },
  {
    id: 10,
    name: "Gaming Keyboard",
    category: "Electronics",
    image: "/images/products/keyboard.png",
    rating: 4.4,
    reviews: 390,
    price: 1499,
    oldPrice: 2199,
    discount: 32,
    inStock: true
  },
  {
    id: 11,
    name: "Wireless Printer",
    category: "Electronics",
    image: "/images/products/printer.png",
    rating: 4.3,
    reviews: 215,
    price: 8999,
    oldPrice: 10999,
    discount: 18,
    inStock: true
  },
  {
    id: 12,
    name: "Slim Fit Jeans",
    category: "Fashion",
    image: "/images/products/jeans-1.png",
    rating: 4.2,
    reviews: 280,
    price: 1399,
    oldPrice: 1899,
    discount: 26,
    inStock: true
  },
  {
    id: 13,
    name: "Puma Sports Shoes",
    category: "Sports",
    image: "/images/products/puma_shoes.png",
    rating: 4.5,
    reviews: 725,
    price: 2999,
    oldPrice: 4499,
    discount: 33,
    inStock: true
  },
  {
    id: 14,
    name: "Casual Sneakers",
    category: "Fashion",
    image: "/images/products/sneakers.png",
    rating: 4.3,
    reviews: 560,
    price: 1799,
    oldPrice: 2499,
    discount: 28,
    inStock: true
  },
  {
    id: 15,
    name: "Trolley Bag",
    category: "Fashion",
    image: "/images/products/trolley-bag..png",
    rating: 4.4,
    reviews: 350,
    price: 2499,
    oldPrice: 3499,
    discount: 29,
    inStock: true
  },
  {
    id: 16,
    name: "Mixer Grinder",
    category: "Home & Kitchen",
    image: "/images/products/mixer-grinder.png",
    rating: 4.4,
    reviews: 460,
    price: 2799,
    oldPrice: 3999,
    discount: 30,
    inStock: true
  },
  {
    id: 17,
    name: "Nonstick Pan",
    category: "Home & Kitchen",
    image: "/images/products/nonstick-pan.png",
    rating: 4.2,
    reviews: 330,
    price: 699,
    oldPrice: 999,
    discount: 30,
    inStock: true
  },
  {
    id: 18,
    name: "Thermos Bottle",
    category: "Home & Kitchen",
    image: "/images/products/thermos-bottle.png",
    rating: 4.5,
    reviews: 410,
    price: 899,
    oldPrice: 1299,
    discount: 31,
    inStock: true
  },
  {
    id: 19,
    name: "Skincare Combo",
    category: "Beauty",
    image: "/images/products/skincare-combo.png",
    rating: 4.3,
    reviews: 290,
    price: 999,
    oldPrice: 1499,
    discount: 33,
    inStock: true
  },
  {
    id: 20,
    name: "Ferrari Model Car",
    category: "Toys",
    image: "/images/products/ferrari.png",
    rating: 4.6,
    reviews: 175,
    price: 1999,
    oldPrice: 2999,
    discount: 33,
    inStock: false
  }
];

const categories = ["Electronics", "Fashion", "Home & Kitchen", "Beauty", "Sports", "Books", "Toys"];

function Products({ deals = false }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategories = searchParams.getAll('category');
  const search = searchParams.get('search') || '';
  const [maxPrice, setMaxPrice] = useState(20000);
  const [rating, setRating] = useState(0);
  const [stock, setStock] = useState("all");

  function changeCategory(category) {
    let nextCategories;
    if (selectedCategories.includes(category)) {
      nextCategories = selectedCategories.filter((item) => item !== category);
    } else {
      nextCategories = [...selectedCategories, category];
    }

    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('category');
    nextCategories.forEach((item) => nextParams.append('category', item));
    setSearchParams(nextParams);
  }

  function clearFilters() {
    setSearchParams({});
    setMaxPrice(20000);
    setRating(0);
    setStock("all");
  }

  const filteredProducts = products.filter((product) => {
    if (deals && product.discount <= 0) return false;
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
    if (maxPrice < 20000 && product.price > maxPrice) return false;
    if (product.rating < rating) return false;
    if (stock === "in" && !product.inStock) return false;
    if (stock === "out" && product.inStock) return false;
    return true;
  });
  return (
    <>
      {/* Products Banner */}
      <section className="products-banner">
        <div className="product-banner-content">
          <h1 className="product-banner-title">
            {deals ? "Best" : "All"} <span className="product-banner-highlight">{deals ? "Deals" : "Products"}</span>
          </h1>
          <p className="product-banner-text">
            Explore our wide range of top quality products
          </p>
          <div className="product-banner-line"></div>
        </div>
      </section>

      {/* Main Product Layout */}
      <div className="container-fluid products-layout">
        <div className="row g-3">

          {/* Filters */}
          <aside className="col-12 col-md-auto">
            <div className="product-filters">
              <div className="filter-heading d-flex justify-content-between align-items-center">
                <h2 className="filter-title">FILTERS</h2>
                <button type="button" className="clear-filters" onClick={clearFilters}>Clear All</button>
              </div>

              <div className="filter-section filter-categories">
                <h3 className="filter-subtitle">Categories</h3>
                {categories.map((category) => (
                  <label className="filter-option" key={category}>
                    <input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => changeCategory(category)} />
                    {category}
                  </label>
                ))}
              </div>

              <div className="filter-section">
                <h3 className="filter-subtitle">Price Range</h3>
                <input className="filter-range" type="range" min="199" max="20000" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} aria-label="Maximum price" />
                <div className="filter-price d-flex justify-content-between">
                  <span>₹199</span>
                  <span>{maxPrice === 20000 ? "₹20,000+" : "₹" + maxPrice.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-subtitle">Ratings</h3>
                <label className="filter-option">
                  <input type="radio" name="rating" checked={rating === 5} onChange={() => setRating(5)} />
                  <span className="filter-stars">★★★★★</span> & above
                </label>
                <label className="filter-option">
                  <input type="radio" name="rating" checked={rating === 4} onChange={() => setRating(4)} />
                  <span className="filter-stars">★★★★<span className="filter-empty-star">☆</span></span> & above
                </label>
                <label className="filter-option">
                  <input type="radio" name="rating" checked={rating === 3} onChange={() => setRating(3)} />
                  <span className="filter-stars">★★★<span className="filter-empty-star">☆☆</span></span> & above
                </label>
              </div>

              <div className="filter-section">
                <h3 className="filter-subtitle">Availability</h3>
                <label className="filter-option"><input type="radio" name="stock" checked={stock === "in"} onChange={() => setStock("in")} /> In Stock</label>
                <label className="filter-option"><input type="radio" name="stock" checked={stock === "out"} onChange={() => setStock("out")} /> Out of Stock</label>
              </div>
            </div>
          </aside>

          {/* Product Area */}
          <section className="col">
            <p className="product-count">{filteredProducts.length === products.length ? "Showing all products" : "Showing " + filteredProducts.length + " products"}</p>
            {filteredProducts.length === 0 && <p>No products found.</p>}

            <div className="row g-3">
              {filteredProducts.map((product) => (
                <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                  <article className="product-card">
                    <div className="product-image-box">
                      <span className="product-discount">-{product.discount}%</span>
                      <img className="product-image" src={product.image} alt={product.name} />
                      <button className="product-wishlist" type="button" aria-label="Add to wishlist">
                        <img className="product-heart-icon" src="/icons/heart.png" alt="" />
                      </button>
                    </div>

                    <div className="product-details">
                      <p className="product-category">{product.category}</p>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-rating">
                        <span className="product-star">★</span> {product.rating} ({product.reviews})
                      </p>
                      <p className="product-prices">
                        <span className="product-price">₹{product.price.toLocaleString("en-IN")}</span>
                        <del className="product-old-price">₹{product.oldPrice.toLocaleString("en-IN")}</del>
                      </p>
                      <button className="product-cart-btn" type="button" disabled={!product.inStock}>
                        <img className="product-cart-icon" src="/icons/product-cart.png" alt="" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default Products;
