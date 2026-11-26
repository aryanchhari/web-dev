import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="shop-footer">
      <div className="container-fluid">
        <div className="row g-4">
          <section className="col-12 col-md-4">
            <Link to="/" className="footer-logo">Shop<span className="footer-highlight">Kart</span></Link>
            <p className="footer-description">Your one-stop destination for quality<br /> products at the best prices.</p>
            <div className="footer-socials">
              <span className="footer-social"><img src="/icons/contact-facebook.png" alt="Facebook" /></span>
              <span className="footer-social"><img src="/icons/contact-instagram.png" alt="Instagram" /></span>
              <span className="footer-social"><img src="/icons/contact-twitter.png" alt="Twitter" /></span>
              <span className="footer-social"><img src="/icons/contact-youtube.png" alt="YouTube" /></span>
            </div>
          </section>

          <section className="col-6 col-md-2">
            <h3 className="footer-heading">Shop</h3>
            <Link className="footer-link" to="/products">All Products</Link>
            <Link className="footer-link" to="/products">Categories</Link>
            <span className="footer-link">New Arrivals</span>
            <span className="footer-link">Best Sellers</span>
            <Link className="footer-link" to="/deals">Deals of the Day</Link>
          </section>

          <section className="col-6 col-md-2">
            <h3 className="footer-heading">Customer Service</h3>
            <Link className="footer-link" to="/contact">Contact Us</Link>
            <span className="footer-link">FAQs</span>
            <span className="footer-link">Shipping Policy</span>
            <span className="footer-link">Returns &amp; Refunds</span>
            <span className="footer-link">Track Order</span>
          </section>

          <section className="col-6 col-md-2">
            <h3 className="footer-heading">Company</h3>
            <Link className="footer-link" to="/about">About Us</Link>
            <span className="footer-link">Careers</span>
            <span className="footer-link">Privacy Policy</span>
            <span className="footer-link">Terms &amp; Conditions</span>
            <span className="footer-link">Sell on ShopKart</span>
          </section>

          <section className="col-6 col-md-2">
            <h3 className="footer-heading">We Accept</h3>
            <div className="footer-payments">
              <img src="/images/visa.png" alt="Visa" />
              <img src="/images/mastercard.png" alt="Mastercard" />
              <img src="/images/upi.png" alt="UPI" />
              <img src="/images/paytm.png" alt="Paytm" />
            </div>
            <p className="footer-secure"><img src="/images/footer-secure.png" alt="" /> 100% Secure Payments</p>
          </section>
        </div>
        <p className="footer-copyright">© 2026 ShopKart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
