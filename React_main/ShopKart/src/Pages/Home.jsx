import React from "react";
import Navbar from "../components/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1> Good Choices. <br /> <span>Great Prices.</span> </h1>

          <p> Everything you need, <br /> delivered to your door. </p>

          <div className="hero-buttons">
            <button className="shop-btn">Shop Now →</button>
                        <button className="deal-btn">Explore Deals</button>
          </div>
          {/* Hero Benefits */}
          <div className="hero-benefits">
            <div className="benefit-item">
              <img src="/icons/secure.png" />  <p>100% Secure Payments</p> </div>
            <div className="benefit-item">
              <img src="/icons/clock.png" /> <p>7 Days Easy Returns</p> </div>
            <div className="benefit-item">
              <img src="/icons/express-delivery.png" /> <p>Fast & Free Delivery</p> </div>
          </div>
        </div>
      </section>

      {/* Shop By Category */}
<section className="category-section">
  <div className="section-heading">
    <h2>Shop by Category</h2>

    <a href="#">View All Categories →</a>
  </div>


  <div className="category-list">
    <div className="category-card electronics">
      <img src="/images/category-electronics.png" alt="Electronics" />
      <h3>Electronics</h3>
      <p>1200+ Products</p>
    </div>


    <div className="category-card fashion">
      <img src="/images/category-fashion.png" alt="Fashion" />
      <h3>Fashion</h3>
      <p>1800+ Products</p>
    </div>
    <div className="category-card home-kitchen">
      <img src="/images/category-home.png" alt="Home & Kitchen" />
      <h3>Home & Kitchen</h3>
      <p>950+ Products</p>
    </div>

    <div className="category-card beauty">
      <img src="/images/category-beauty.png" alt="Beauty & Personal Care" />
      <h3>Beauty & Personal Care</h3>
      <p>750+ Products</p>
    </div>

    <div className="category-card sports">
      <img src="/images/category-fitness.png" alt="Sports & Fitness" />
      <h3>Sports & Fitness</h3>
      <p>600+ Products</p>
    </div>
    <div className="category-card books">
      <img src="/images/category-books.png" alt="Books & Stationery" />
      <h3>Books & Stationery</h3>
      <p>500+ Products</p>
    </div>
  </div>
</section>
    </>
  );
}
export default Home;