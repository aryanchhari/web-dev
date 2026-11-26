import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="container text-center py-5">
      <h1>Contact Us</h1>
      <p className="text-secondary">ShopKart customer support details will be added soon.</p>
      <Link className="btn btn-outline-success m-2" to="/">Back to Home</Link>
      <Link className="btn btn-outline-success m-2" to="/products">Browse Products</Link>
    </section>
  );
}

export default Contact;
