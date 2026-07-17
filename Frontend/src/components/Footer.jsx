import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <h2>FreshCheck AI</h2>

      <p>
        AI-powered food freshness detection system to reduce food waste.
      </p>

      <div className="footer-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Contact</a>
        <a href="#">GitHub</a>
      </div>

      <p className="copyright">
        © 2026 FreshCheck AI. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;