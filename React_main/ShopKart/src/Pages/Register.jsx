import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="container text-center py-5">
      <h1>Register</h1>
      <p className="text-secondary">Registration functionality will be added later.</p>
      <Link className="btn btn-outline-success m-2" to="/login">Login</Link>
      <Link className="btn btn-outline-success m-2" to="/">Back to Home</Link>
    </section>
  );
}

export default Register;
