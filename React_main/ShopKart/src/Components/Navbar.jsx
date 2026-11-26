import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  function searchProducts(event) {
    event.preventDefault();
    const search = event.target.elements.search.value.trim();
    navigate("/products?search=" + encodeURIComponent(search));
  }

  return (
    <>
      {/* Top Shipping Bar */}
      <div className="top-bar">
        <div className="container-fluid">
          <span className="new-badge">NEW</span>
          Free shipping on orders above ₹499 | Easy 7-day returns
        </div>
      </div>
       {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="ShopKart" className="shopkart-logo"/>
          </Link>
                   <div className="dropdown category-dropdown">
            <button className="category-btn dropdown-toggle" type="button" 
            data-bs-toggle="dropdown" aria-expanded="false">  All Categories </button>

           <ul className="dropdown-menu">
                        <li> <Link className="dropdown-item" to="/products?category=Electronics"> Electronics </Link> </li>
              <li> <Link className="dropdown-item" to="/products?category=Fashion"> Fashion </Link> </li>
              <li> <Link className="dropdown-item" to="/products?category=Home%20%26%20Kitchen"> Home & Kitchen </Link> </li>
              <li> <Link className="dropdown-item" to="/products?category=Beauty"> Beauty & Personal Care </Link> </li>
              <li> <Link className="dropdown-item" to="/products?category=Sports"> Sports & Fitness </Link> </li>
              <li> <Link className="dropdown-item" to="/products?category=Books"> Books & Stationery </Link> </li>
            </ul>
          </div>

          {/* Mobile Toggle */}
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse"
            data-bs-target="#shopKartNavbar" >
            <span className="navbar-toggler-icon"></span> </button>

          {/* Navigation */}
          <div className="collapse navbar-collapse" id="shopKartNavbar">
            <ul className="navbar-nav main-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>Home</NavLink>
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

              
            {/* Search */}
<form className="search-box" onSubmit={searchProducts}>
  <input type="text" name="search" aria-label="Search for products" placeholder="Search for products..." />
  <button className="search-btn" type="submit">
    <img src="/icons/search-icon.png" alt="Search" />
  </button>
</form>
{/* Icons */}
<div className="nav-actions">
  <Link to="/wishlist"><img src="/icons/heart.png" alt="Wishlist" className="nav-icon" /></Link>

  <Link className="cart-wrapper" to="/cart">
    <img src="/icons/cart-icon.png" alt="Cart" className="nav-icon" />
    <span className="cart-count">0</span> </Link>
    </div>

</div>

</div>
</nav>
</>
);
}

export default Navbar;


              