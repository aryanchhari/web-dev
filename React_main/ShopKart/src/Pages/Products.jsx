import './Products.css';

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
          <div className="col-12 col-md-auto">
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
          </div>

          {/* Product Area */}
          <div className="col">
            <p className="product-count">Showing all products</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Products;
