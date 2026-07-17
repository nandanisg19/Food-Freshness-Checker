import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <h1>Detect Food Freshness Using AI</h1>

      <p>
        Know whether your food is fresh or spoiled
        in just a few seconds using AI.
      </p>

      <div className="hero-buttons">
        <button className="upload-btn">
          Upload Image
        </button>

        <button className="demo-btn">
          Try Demo
        </button>
      </div>

    </section>
  );
}

export default Hero;