import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(){

  
return (
<>
  <nav className="HI">
    <ul>  
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/product">Product</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
    </ul>
  </nav>
    

</>
)
}
export default Navbar;