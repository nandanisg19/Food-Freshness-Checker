import "../styles/Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Why FreshCheck AI?</h2>

      <div className="feature-cards">

        <div className="card">
          <h3>AI Detection</h3>
          <p>
            Detect whether your food is fresh or spoiled using AI.
          </p>
        </div>

        <div className="card">
          <h3>Instant Results</h3>
          <p>
            Get food freshness predictions within seconds.
          </p>
        </div>

        <div className="card">
          <h3>Smart Suggestions</h3>
          <p>
            Receive useful food storage and safety recommendations.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;