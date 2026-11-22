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
      <nav className="navbar navbar-expand-xl" aria-label="Main navigation">
        <div className="container-fluid">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/" aria-label="ShopKart home">
            <img src="/favicon.svg" alt="" className="brand-icon" />
            <span>Shop<span className="brand-accent">Kart</span></span>
          </NavLink>

          {/* Bootstrap Category Dropdown */}
          <div className="dropdown category-dropdown">
            <button
              className="category-btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-controls="categoryMenu"
              aria-label="All Categories"
            >
              <img src="/icons/category-grid.svg" alt="" />
              <span className="category-label">All Categories</span>
            </button>

            <ul className="dropdown-menu dropdown-menu-end" id="categoryMenu">
              <li>
                <a className="dropdown-item" href="/#electronics">Electronics</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#fashion">Fashion</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#home-kitchen">Home & Kitchen</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#beauty">Beauty & Personal Care</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#sports">Sports & Fitness</a>
              </li>
              <li>
                <a className="dropdown-item" href="/#books">Books & Stationery</a>
              </li>
            </ul>
          </div>

          {/* Bootstrap opens and closes this menu on smaller screens. */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar"
            aria-controls="shopKartNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="shopKartNavbar">
            {/* NavLink works like an anchor, without reloading the page. */}
            <ul className="navbar-nav main-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/deals">Deals</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>

            {/* Search: this is the only custom interaction using React state. */}
            <form className="search-box" role="search" onSubmit={searchProducts}>
              <label className="visually-hidden" htmlFor="product-search">
                Search for products
              </label>
              <input
                id="product-search"
                type="search"
                placeholder="Search for products..."
                value={props.search}
                onChange={(event) => props.setSearch(event.target.value)}
              />
              <button className="search-btn" type="submit" aria-label="Search">
                <img src="/icons/search-icon.png" alt="" />
              </button>
            </form>

            {/* Bootstrap handles the wishlist button's active state. */}
            <div className="nav-actions">
              <button
                className="nav-icon-button wishlist-button"
                type="button"
                data-bs-toggle="button"
                aria-pressed="false"
                aria-label="Wishlist"
              >
                <img src="/icons/heart.png" alt="" />
              </button>

              <NavLink className="nav-icon-button cart-wrapper" to="/cart" aria-label="Cart, 3 items">
                <img src="/icons/cart-icon.png" alt="" />
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
