import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2>How It Works?</h2>

      <div className="steps">

        <div className="step">
          <h3>Upload Image</h3>
          <p>Upload an image of the food item.</p>
        </div>

        <div className="step">
          <h3>AI Analysis</h3>
          <p>Our AI model analyzes the image.</p>
        </div>

        <div className="step">
          <h3>Get Results</h3>
          <p>Know instantly whether the food is fresh or spoiled.</p>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;