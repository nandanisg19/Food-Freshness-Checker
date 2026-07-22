import { useState } from "react";
import "../styles/CheckFreshness.css";

function CheckFreshness() {

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
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

        <button>
          Check Freshness
        </button>

      </div>

    </div>
  );
}

export default CheckFreshness;