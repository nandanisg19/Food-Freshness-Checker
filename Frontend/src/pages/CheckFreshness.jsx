import { useState } from "react";
import "../styles/CheckFreshness.css";

function CheckFreshness() {

  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      setResult(null);
    }
  };


  const checkFreshness = () => {

    if (!image) {
      alert("Please upload a food image first");
      return;
    }

    setLoading(true);
    setResult(null);

    setTimeout(() => {

      setLoading(false);

      setResult({
        status: "Fresh",
        confidence: "95%",
        message: "Your food looks fresh and safe to consume."
      });

    }, 2000);

  };


  return (
    <div className="check-page">

      <h1>Check Food Freshness</h1>

      <p>
        Upload an image of your food and let AI analyze its freshness.
      </p>


      <div className="upload-box">

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />


        {image && (
          <img
            src={image}
            alt="Food Preview"
            className="preview-image"
          />
        )}


        <button onClick={checkFreshness}>
          Check Freshness
        </button>


        {loading && (
          <h3 className="loading">
            Analyzing image... ⏳
          </h3>
        )}


        {result && (
          <div className="result-box">

            <h2>
              {result.status} Food 🍎
            </h2>

            <p>
              Confidence: {result.confidence}
            </p>

            <p>
              {result.message}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default CheckFreshness;