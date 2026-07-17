import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">FreshCheck AI</h2>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;