import { Link } from "react-router-dom";

function Wishlist() {
  return (
    <section className="container text-center py-5">
      <h1>Your Wishlist</h1>
      <p className="text-secondary">Wishlist functionality will be added later.</p>
      <Link className="btn btn-outline-success m-2" to="/products">Browse Products</Link>
    </section>
  );
}

export default Wishlist;
