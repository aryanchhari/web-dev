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
          <h1 id="hero-heading">
            <span>Good Choices.</span>
            <span className="headline-accent">Great Prices.</span>
          </h1>

          <p className="hero-description">
            Everything you need,<br />
            delivered to your door.
          </p>

          <div className="hero-buttons">
            <a className="btn shop-btn" href="#categories" onClick={clearSearch}>
              Shop Now
            </a>
            <a className="btn deal-btn" href="/deals">
              Explore Deals
            </a>
          </div>

          {/* Hero Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <img src="/icons/secure.png" alt="" />
              <p>100% Secure<br />Payments</p>
            </div>
            <div className="benefit-item">
              <img src="/icons/clock.png" alt="" />
              <p>7 Days Easy<br />Returns</p>
            </div>
            <div className="benefit-item">
              <img src="/icons/express-delivery.png" alt="" />
              <p>Fast & Free<br />Delivery</p>
            </div>
          </div>
        </div>

        {/* Decorative shapes and product images. CSS handles all movement. */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-circle"></div>
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="hero-product hero-headphones">
            <img src="/images/category-electronics.webp" alt="" fetchPriority="high" />
          </div>
          <div className="hero-product hero-watch">
            <img src="/images/noisefit.webp" alt="" />
          </div>
          <div className="hero-product hero-sneakers">
            <img src="/images/sneakers.webp" alt="" />
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="category-section" id="categories" aria-labelledby="category-heading">
        <div className="section-heading">
          <h2 id="category-heading">Shop by Category</h2>
          <a href="#categories" onClick={clearSearch}>View All Categories</a>
        </div>

        <p className="visually-hidden" role="status">
          Search matches are highlighted. All six category cards stay visible.
        </p>

        {/* Bootstrap grid: 2 cards on phones, 3 on tablets, 6 on desktops. */}
        <div className="row g-3 category-list">
          {/* Electronics */}
          <div className="col-6 col-md-4 col-xl-2 category-column">
            <a
              id="electronics"
              href="#electronics"
              className={"category-card electronics " + getSearchClass("Electronics")}
            >
              <img src="/images/category-electronics.webp" alt="Teal headphones" />
              <h3>Electronics</h3>
              <p>1200+ Products</p>
            </a>
          </div>

          {/* Fashion */}
          <div className="col-6 col-md-4 col-xl-2 category-column">
            <a
              id="fashion"
              href="#fashion"
              className={"category-card fashion " + getSearchClass("Fashion")}
            >
              <img src="/images/category-fashion.webp" alt="Coral hoodie" />
              <h3>Fashion</h3>
              <p>1800+ Products</p>
            </a>
          </div>

          {/* Home & Kitchen */}
          <div className="col-6 col-md-4 col-xl-2 category-column">
            <a
              id="home-kitchen"
              href="#home-kitchen"
              className={"category-card home-kitchen " + getSearchClass("Home & Kitchen")}
            >
              <img src="/images/category-home.webp" alt="Yellow armchair and lamp" />
              <h3>Home & Kitchen</h3>
              <p>950+ Products</p>
            </a>
          </div>

          {/* Beauty & Personal Care */}
          <div className="col-6 col-md-4 col-xl-2 category-column">
            <a
              id="beauty"
              href="#beauty"
              className={"category-card beauty " + getSearchClass("Beauty & Personal Care")}
            >
              <img src="/images/category-beauty.webp" alt="Makeup collection" />
              <h3>Beauty & Personal Care</h3>
              <p>750+ Products</p>
            </a>
          </div>

          {/* Sports & Fitness */}
          <div className="col-6 col-md-4 col-xl-2 category-column">
            <a
              id="sports"
              href="#sports"
              className={"category-card sports " + getSearchClass("Sports & Fitness")}
            >
              <img src="/images/category-fitness.webp" alt="Black dumbbells" />
              <h3>Sports & Fitness</h3>
              <p>600+ Products</p>
            </a>
          </div>

          {/* Books & Stationery */}
          <div className="col-6 col-md-4 col-xl-2 category-column">
            <a
              id="books"
              href="#books"
              className={"category-card books " + getSearchClass("Books & Stationery")}
            >
              <img src="/images/category-books.webp" alt="Stack of books" />
              <h3>Books & Stationery</h3>
              <p>500+ Products</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
