import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FreshCheck AI</h2>

      <div className="nav-buttons">

        <Link to="/check-freshness">
          <button className="check-btn">
            Check Freshness
          </button>
        </Link>

        <Link to="/login">
          <button className="login-btn">
            Login
          </button>
        </Link>

        <button className="signup-btn">
          Sign Up
        </button>

      </div>
    </nav>
  );
}

export default Navbar;