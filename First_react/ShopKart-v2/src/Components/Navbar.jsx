import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  // The search text is already stored by App.jsx.
  // Submitting the form simply jumps to the category cards.
  function searchProducts(event) {
    event.preventDefault();
    window.location.hash = "categories";
  }

  return (
    <header>
      {/* Top Shipping Bar */}
      <div className="top-bar">
        <span className="new-badge">NEW</span>
        <span>Free shipping on orders above ₹499 | Easy 7-day returns</span>
      </div>

      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-xl site-navbar" aria-label="Main navigation">
        <div className="container-fluid navbar-content">
          {/* Logo */}
          <NavLink className="navbar-brand brand-link" to="/" aria-label="ShopKart home">
            <img src="/favicon.svg" alt="" className="brand-icon" />
            <span>Shop<span className="brand-accent">Kart</span></span>
          </NavLink>

          {/* Bootstrap Category Dropdown */}
          <div className="dropdown category-dropdown">
            <button
              className="category-btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-controls="categoryMenu"
              aria-label="All Categories"
            >
              <img className="category-icon" src="/icons/category-grid.svg" alt="" />
              <span className="category-label">All Categories</span>
            </button>

            <ul className="dropdown-menu dropdown-menu-end category-menu" id="categoryMenu">
              <li>
                <a className="dropdown-item category-menu-link" href="/#electronics">Electronics</a>
              </li>
              <li>
                <a className="dropdown-item category-menu-link" href="/#fashion">Fashion</a>
              </li>
              <li>
                <a className="dropdown-item category-menu-link" href="/#home-kitchen">Home & Kitchen</a>
              </li>
              <li>
                <a className="dropdown-item category-menu-link" href="/#beauty">Beauty & Personal Care</a>
              </li>
              <li>
                <a className="dropdown-item category-menu-link" href="/#sports">Sports & Fitness</a>
              </li>
              <li>
                <a className="dropdown-item category-menu-link" href="/#books">Books & Stationery</a>
              </li>
            </ul>
          </div>

          {/* Bootstrap opens and closes this menu on smaller screens. */}
          <button
            className="navbar-toggler menu-toggle"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar"
            aria-controls="shopKartNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse menu-content" id="shopKartNavbar">
            {/* NavLink works like an anchor, without reloading the page. */}
            <ul className="navbar-nav main-nav">
              <li className="nav-item">
                <NavLink className="nav-link menu-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link menu-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link menu-link" to="/deals">Deals</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link menu-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link menu-link" to="/contact">Contact</NavLink>
              </li>
            </ul>

            {/* Search: this is the only custom interaction using React state. */}
            <form className="search-box" role="search" onSubmit={searchProducts}>
              <label className="visually-hidden" htmlFor="product-search">
                Search for products
              </label>
              <input
                className="search-input"
                id="product-search"
                type="search"
                placeholder="Search for products..."
                value={props.search}
                onChange={(event) => props.setSearch(event.target.value)}
              />
              <button className="search-btn" type="submit" aria-label="Search">
                <img className="search-icon" src="/icons/search-icon.png" alt="" />
              </button>
            </form>

            {/* Bootstrap handles the wishlist button's active state. */}
            <div className="nav-actions">
              <button
                className="btn btn-outline-danger nav-icon-button"
                type="button"
                data-bs-toggle="button"
                aria-pressed="false"
                aria-label="Wishlist"
              >
                <img className="nav-icon" src="/icons/heart.png" alt="" />
              </button>

              <NavLink className="nav-icon-button" to="/cart" aria-label="Cart, 3 items">
                <img className="nav-icon" src="/icons/cart-icon.png" alt="" />
                <span className="cart-count">3</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
