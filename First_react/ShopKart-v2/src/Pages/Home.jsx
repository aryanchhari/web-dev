import "./Home.css";

function Home(props) {
  // CSS cannot read the text inside a search box.
  // This small function chooses which CSS class each card needs.
  function getSearchClass(categoryName) {
    const word = props.search.trim().toLowerCase();

    if (word === "") {
      return "";
    }

    if (categoryName.toLowerCase().includes(word)) {
      return "search-match";
    }

    return "search-muted";
  }

  function clearSearch() {
    props.setSearch("");
  }

  return (
    <main className="page-wrapper">
      {/* Hero Section */}
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero-content">
          <h1 className="hero-title" id="hero-heading">
            <span className="headline-line">Good Choices.</span>
            <span className="headline-line headline-accent">Great Prices.</span>
          </h1>

          <p className="hero-description">
            Everything you need,<br />
            delivered to your door.
          </p>

          <div className="hero-buttons">
            <a className="hero-button shop-btn" href="#categories" onClick={clearSearch}>
              Shop Now
            </a>
            <a className="hero-button deal-btn" href="/deals">
              Explore Deals
            </a>
          </div>

          {/* Hero Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <img className="benefit-icon" src="/icons/secure.png" alt="" />
              <p className="benefit-text">100% Secure<br />Payments</p>
            </div>
            <div className="benefit-item">
              <img className="benefit-icon" src="/icons/clock.png" alt="" />
              <p className="benefit-text">7 Days Easy<br />Returns</p>
            </div>
            <div className="benefit-item">
              <img className="benefit-icon" src="/icons/express-delivery.png" alt="" />
              <p className="benefit-text">Fast & Free<br />Delivery</p>
            </div>
          </div>
        </div>

        {/* A simple background circle and three product images. */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-circle"></div>

          <div className="hero-product hero-headphones">
            <img className="hero-image" src="/images/category-electronics.webp" alt="" fetchPriority="high" />
          </div>
          <div className="hero-product hero-watch">
            <img className="hero-image" src="/images/noisefit.webp" alt="" />
          </div>
          <div className="hero-product hero-sneakers">
            <img className="hero-image" src="/images/sneakers.webp" alt="" />
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="category-section" id="categories" aria-labelledby="category-heading">
        <div className="section-heading">
          <h2 className="section-title" id="category-heading">Shop by Category</h2>
          <a className="view-categories" href="#categories" onClick={clearSearch}>View All Categories</a>
        </div>

        <p className="visually-hidden" role="status">
          Search matches are highlighted. All six category cards stay visible.
        </p>

        {/* Bootstrap grid: 2 cards on phones, 3 on tablets, 6 on desktops. */}
        <div className="row g-3">
          {/* Electronics */}
          <div className="col-6 col-md-4 col-xl-2">
            <a
              id="electronics"
              href="#electronics"
              className={"category-card electronics " + getSearchClass("Electronics")}
            >
              <img className="category-image" src="/images/category-electronics.webp" alt="Teal headphones" />
              <h3 className="category-name">Electronics</h3>
              <p className="category-count">1200+ Products</p>
            </a>
          </div>

          {/* Fashion */}
          <div className="col-6 col-md-4 col-xl-2">
            <a
              id="fashion"
              href="#fashion"
              className={"category-card fashion " + getSearchClass("Fashion")}
            >
              <img className="category-image" src="/images/category-fashion.webp" alt="Coral hoodie" />
              <h3 className="category-name">Fashion</h3>
              <p className="category-count">1800+ Products</p>
            </a>
          </div>

          {/* Home & Kitchen */}
          <div className="col-6 col-md-4 col-xl-2">
            <a
              id="home-kitchen"
              href="#home-kitchen"
              className={"category-card home-kitchen " + getSearchClass("Home & Kitchen")}
            >
              <img className="category-image" src="/images/category-home.webp" alt="Yellow armchair and lamp" />
              <h3 className="category-name">Home & Kitchen</h3>
              <p className="category-count">950+ Products</p>
            </a>
          </div>

          {/* Beauty & Personal Care */}
          <div className="col-6 col-md-4 col-xl-2">
            <a
              id="beauty"
              href="#beauty"
              className={"category-card beauty " + getSearchClass("Beauty & Personal Care")}
            >
              <img className="category-image" src="/images/category-beauty.webp" alt="Makeup collection" />
              <h3 className="category-name">Beauty & Personal Care</h3>
              <p className="category-count">750+ Products</p>
            </a>
          </div>

          {/* Sports & Fitness */}
          <div className="col-6 col-md-4 col-xl-2">
            <a
              id="sports"
              href="#sports"
              className={"category-card sports " + getSearchClass("Sports & Fitness")}
            >
              <img className="category-image" src="/images/category-fitness.webp" alt="Black dumbbells" />
              <h3 className="category-name">Sports & Fitness</h3>
              <p className="category-count">600+ Products</p>
            </a>
          </div>

          {/* Books & Stationery */}
          <div className="col-6 col-md-4 col-xl-2">
            <a
              id="books"
              href="#books"
              className={"category-card books " + getSearchClass("Books & Stationery")}
            >
              <img className="category-image" src="/images/category-books.webp" alt="Stack of books" />
              <h3 className="category-name">Books & Stationery</h3>
              <p className="category-count">500+ Products</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
