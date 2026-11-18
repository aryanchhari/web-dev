import "./Navbar.css";

function Navbar(){

  
return (
<>
  <nav className="HI">
    <ul>  
      <li>
        <Navilink to="/">Home</Navilink>
      </li>
      <li>
        <Navilink to="/about">About</Navilink>
      </li>
      <li>
        <Navilink to="/contact">Contact</Navilink>
      </li>
      <li>
        <Navilink to="/product">Product</Navilink>
      </li>
      <li>
        <Navilink to="/login">Login</Navilink>
      </li>
      <li>
        <Navilink to="/register">Register</Navilink>
      </li>
      <li>
        <Navilink to="/cart">Cart</Navilink>
      </li>
      <li>
        <Navilink to="/Cart">Cart</Navilink>
      </li>
    </ul>
  </nav>
    

</>
)
}
export default Navbar;