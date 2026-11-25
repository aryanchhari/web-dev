import './Products.css';

// Sample product data
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
  }
];

function Products() {
  return (
    <>
      {/* Products Banner */}
      <section className="products-banner">
        <div className="product-banner-content">
          <h1 className="product-banner-title">
            All <span className="product-banner-highlight">Products</span>
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
            <form className="product-filters">
              <div className="filter-heading d-flex justify-content-between align-items-center">
                <h2 className="filter-title">FILTERS</h2>
                <button type="reset" className="clear-filters">Clear All</button>
              </div>

              <div className="filter-section">
                <h3 className="filter-subtitle">Categories</h3>
                <label className="filter-option"><input type="checkbox" /> Electronics</label>
                <label className="filter-option"><input type="checkbox" /> Fashion</label>
                <label className="filter-option"><input type="checkbox" /> Home & Kitchen</label>
                <label className="filter-option"><input type="checkbox" /> Beauty</label>
                <label className="filter-option"><input type="checkbox" /> Sports</label>
                <label className="filter-option"><input type="checkbox" /> Books</label>
              </div>

              <div className="filter-section">
                <h3 className="filter-subtitle">Price Range</h3>
                <input className="filter-range" type="range" min="199" max="20000" defaultValue="10100" aria-label="Maximum price" />
                <div className="filter-price d-flex justify-content-between">
                  <span>₹199</span>
                  <span>₹20,000+</span>
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-subtitle">Ratings</h3>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="filter-stars">★★★★★</span> & above
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="filter-stars">★★★★<span className="filter-empty-star">☆</span></span> & above
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span className="filter-stars">★★★<span className="filter-empty-star">☆☆</span></span> & above
                </label>
              </div>

              <div className="filter-section">
                <h3 className="filter-subtitle">Availability</h3>
                <label className="filter-option"><input type="checkbox" /> In Stock</label>
                <label className="filter-option"><input type="checkbox" /> Out of Stock</label>
              </div>
            </form>
          </aside>

          {/* Product Area */}
          <section className="col">
            <p className="product-count">Showing all products</p>

            <div className="row g-3">
              {products.map((product) => (
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
