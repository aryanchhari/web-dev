import { Link } from "react-router-dom";

function Cart() {
  return (
    <section className="container text-center py-5">
      <h1>Your Cart</h1>
      <img className="img-fluid mb-3" style={{ maxWidth: "240px" }} src="/images/not-found-cart.png" alt="" />
      <p className="text-secondary">Your cart is currently empty. Cart functionality will be added later.</p>
      <Link className="btn btn-outline-success m-2" to="/products">Continue Shopping</Link>
    </section>
  );
}

export default Cart;
