import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="container text-center py-5">
      <h1>Login</h1>
      <p className="text-secondary">Login functionality will be added later.</p>
      <Link className="btn btn-outline-success m-2" to="/register">Register</Link>
      <Link className="btn btn-outline-success m-2" to="/">Back to Home</Link>
    </section>
  );
}

export default Login;
