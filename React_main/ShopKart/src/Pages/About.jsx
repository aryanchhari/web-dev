import { Link } from "react-router-dom";
import "./About.css";

const brands = [
  { name: "Samsung", image: "samsung.png" },
  { name: "boAt", image: "boat.png" },
  { name: "Puma", image: "puma.png" },
  { name: "LG", image: "lg.png" },
  { name: "Philips", image: "philips.png" },
  { name: "The Ordinary", image: "ordinary.png" },
  { name: "Nivea", image: "nivea.png" },
  { name: "Himalaya", image: "himalaya.png" },
  { name: "Apple", image: "apple.png" },
  { name: "Fastrack", image: "fastrack.png" },
  { name: "Amazon", image: "amazon.png" },
  { name: "Levi's", image: "levis.png" },
  { name: "Nike", image: "nike.png" },
  { name: "Adidas", image: "adidas.png" },
  { name: "Zara", image: "zara.png" },
  { name: "H&M", image: "hm.png" },
  { name: "Canon", image: "canon.png" },
  { name: "Dyson", image: "dyson.png" },
  { name: "Intel", image: "intel.png" },
  { name: "Ray-Ban", image: "rayban.png" }
];

function About() {
  return (
    <>
      {/* About Us */}
      <section className="about-section">
        <div className="about-content">
          <p className="about-label"><span className="about-line"></span> ABOUT US</p>
          <h2 className="about-title">About <span className="about-highlight">us</span></h2>
          <h3 className="about-subtitle">Making everyday shopping simpler,<br /> faster and more enjoyable.</h3>
          <p className="about-text">
            At ShopKart, we believe great products should be accessible to everyone.
            We are an online shopping destination offering a wide range of high-quality
            products at great prices, delivered right to your doorstep.
          </p>
          <p className="about-text">
            From fashion and electronics to home essentials and more — we're here
            to make shopping easier, better, and more delightful for you.
          </p>
          <div className="about-buttons">
            <Link to="/products" className="about-shop-btn">Shop now &nbsp; →</Link>
            <a href="#brands" className="about-learn-btn">Learn more</a>
          </div>
          <p className="about-tagline">Shop Smarter, Live Better</p>
          <div className="about-tagline-line"></div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="brands-section" id="brands">
        <h2 className="brands-title">Trusted by leading brands</h2>
        <p className="brands-text">
          We're proud to partner with some of the world's most trusted brands to
          bring you the best products and shopping experience.
        </p>
        <div className="brands-list">
          {brands.map((brand) => (
            <div className="brand-item" key={brand.name}>
              <img className="brand-logo" src={"/images/brands/" + brand.image} alt={brand.name} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default About;
